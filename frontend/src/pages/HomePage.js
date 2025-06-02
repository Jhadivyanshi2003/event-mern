import React, { useEffect, useState } from 'react';

export default function HomePage() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ name: '', date: '', location: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');
  const [search, setSearch] = useState('');

  // Fetch events from backend
  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(setEvents);
  }, []);

  // Handle form input changes
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle create or update
  const handleSubmit = async e => {
    e.preventDefault();
    if (editingId) {
      // Update event
      const res = await fetch(`/api/events/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const updated = await res.json();
      setEvents(events.map(ev => (ev._id === editingId ? updated : ev)));
      setEditingId(null);
      setMessage('Event updated!');
    } else {
      // Create event
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const newEvent = await res.json();
      setEvents([...events, newEvent]);
      setMessage('Event created!');
    }
    setForm({ name: '', date: '', location: '', description: '' });
    setTimeout(() => setMessage(''), 2000);
  };

  // Handle delete
  const handleDelete = async id => {
    await fetch(`/api/events/${id}`, { method: 'DELETE' });
    setEvents(events.filter(ev => ev._id !== id));
    setMessage('Event deleted!');
    setTimeout(() => setMessage(''), 2000);
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
  };

  return (
    <div>
      <div className="banner">
        <h1>Welcome to the Event Management System!</h1>
        <p>Browse, create, edit, and manage your events easily.</p>
      </div>
      {message && <div className="success-message">{message}</div>}
      <h2>Events</h2>
      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px', width: '60%' }}
      />
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="date" placeholder="Date" value={form.date} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <button type="submit">{editingId ? 'Update' : 'Create'}</button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setForm({ name: '', date: '', location: '', description: '' });
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
              <p><b>Date:</b> {event.date}</p>
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