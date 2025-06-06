const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// CREATE
router.post('/', async (req, res) => {
  try {
    console.log('Received event data:', req.body);
    const event = new Event(req.body);
    const savedEvent = await event.save();
    console.log('Saved event:', savedEvent);
    res.status(201).json(savedEvent);
  } catch (err) {
    console.error('Error creating event:', err);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ 
        error: 'Validation Error', 
        details: Object.values(err.errors).map(e => e.message)
      });
    }
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (err) {
    console.error('Error fetching events:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (err) {
    console.error('Error updating event:', err);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ 
        error: 'Validation Error', 
        details: Object.values(err.errors).map(e => e.message)
      });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully' });
  } catch (err) {
    console.error('Error deleting event:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;