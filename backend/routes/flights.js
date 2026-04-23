// Student 5 — GET /flights
import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// ─── Flight Schema ─────────────────────────────────────────────────────────────
// Matches the "flights" collection in MongoDB Atlas.
// Fields align with what Student 2's FlightsPage and Student 3's BookingPage expect.
const flightSchema = new mongoose.Schema({
  airline:       { type: String, required: true },
  from:          { type: String, required: true },
  to:            { type: String, required: true },
  date:          { type: String, required: true },  // "YYYY-MM-DD"
  departureTime: { type: String, required: true },  // "HH:MM"
  arrivalTime:   { type: String },                  // "HH:MM" (optional)
  prices: {
    economy: { type: Number, required: true },
    economyPlus: { type: Number, required: true },
    business: { type: Number, required: true }
  },
});

const Flight = mongoose.model('Flight', flightSchema, 'flights');

// ─── GET /flights ──────────────────────────────────────────────────────────────
// Query params: from, to, date  (all optional — omit to get all flights)
// Example: GET /flights?from=DEL&to=BOM&date=2025-06-01
router.get('/', async (req, res) => {
  try {
    const { from, to, date } = req.query;

    // Build filter only from params that were actually provided
    const filter = {};
    if (from) filter.from = { $regex: new RegExp(from, 'i') };
    if (to)   filter.to   = { $regex: new RegExp(to,   'i') };
    if (date) filter.date = date;

    const flights = await Flight.find(filter);
    res.json(flights);
  } catch (error) {
    console.error('Error fetching flights:', error);
    res.status(500).json({ error: 'Failed to fetch flights' });
  }
});

export default router;
