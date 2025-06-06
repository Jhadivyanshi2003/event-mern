import React, { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

export default function HomePage() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ name: '', date: '', location: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  // Fetch events from backend
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch(`${API_URL}/api/events`);
      if (!res.ok) throw new Error('Failed to fetch events');
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      setError('Failed to load events. Please try again later.');
      console.error('Error fetching events:', err);
    }
  };

  // Handle form input changes
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); // Clear any previous errors
  };

  // Handle create or update
  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      if (editingId) {
        // Update event
        const res = await fetch(`${API_URL}/api/events/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || 'Failed to update event');
        }
        const updated = await res.json();
        setEvents(events.map(ev => (ev._id === editingId ? updated : ev)));
        setEditingId(null);
        setMessage('Event updated successfully!');
      } else {
        // Create event
        const res = await fetch(`${API_URL}/api/events`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || 'Failed to create event');
        }
        const newEvent = await res.json();
        setEvents([...events, newEvent]);
        setMessage('Event created successfully!');
      }
      setForm({ name: '', date: '', location: '', description: '' });
    } catch (err) {
      setError(err.message);
      console.error('Error saving event:', err);
    }
    setTimeout(() => {
      setMessage('');
      setError('');
    }, 3000);
  };

  // Handle delete
  const handleDelete = async id => {
    try {
      const res = await fetch(`${API_URL}/api/events/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete event');
      setEvents(events.filter(ev => ev._id !== id));
      setMessage('Event deleted successfully!');
    } catch (err) {
      setError('Failed to delete event. Please try again.');
      console.error('Error deleting event:', err);
    }
    setTimeout(() => {
      setMessage('');
      setError('');
    }, 3000);
  };

  // Handle edit
  const handleEdit = event => {
    setForm({
      name: event.name,
      date: event.date,
      location: event.location,
      description: event.description,
    });
    setEditingId(event._id);
    setError('');
  };

  return (
    <div>
      <div className="banner">
        <h1>Welcome to the Event Management System!</h1>
        <p>Browse, create, edit, and manage your events easily.</p>
      </div>
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}
      <h2>Events</h2>
      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px', width: '60%' }}
      />
      <form onSubmit={handleSubmit}>
        <input 
          name="name" 
          placeholder="Name" 
          value={form.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          name="date" 
          type="date"
          placeholder="Date" 
          value={form.date} 
          onChange={handleChange} 
          required 
        />
        <input 
          name="location" 
          placeholder="Location" 
          value={form.location} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="description" 
          placeholder="Description" 
          value={form.description} 
          onChange={handleChange}
          rows="3"
        />
        <button type="submit">{editingId ? 'Update' : 'Create'}</button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setForm({ name: '', date: '', location: '', description: '' });
              setError('');
            }}
          >
            Cancel
          </button>
        )}
      </form>
      <div className="event-grid">
        {events
          .filter(event =>
            event.name.toLowerCase().includes(search.toLowerCase()) ||
            event.location.toLowerCase().includes(search.toLowerCase())
          )
          .map(event => (
            <div className="event-card" key={event._id}>
              <h3>{event.name}</h3>
              <p><b>Date:</b> {new Date(event.date).toLocaleDateString()}</p>
              <p><b>Location:</b> {event.location}</p>
              <p>{event.description}</p>
              <button onClick={() => handleEdit(event)}>Edit</button>
              <button onClick={() => handleDelete(event._id)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
}