// Student 6 — POST /booking
import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// ─── Booking Schema ────────────────────────────────────────────────────────────
// Matches the "bookings" collection in MongoDB Atlas.
// Body shape sent by Student 3's BookingPage:
//   { flightId, userId, passenger: { name, age } }
const bookingSchema = new mongoose.Schema(
  {
    userId:   { type: String, required: true },
    flightId: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true },
    passenger: {
      name: { type: String, required: true },
      age:  { type: Number, required: true },
    },
  },
  { timestamps: true }  // adds createdAt + updatedAt automatically
);

const Booking = mongoose.model('Booking', bookingSchema, 'bookings');

// ─── POST /booking ─────────────────────────────────────────────────────────────
// Body: { userId, flightId, passenger: { name, age } }
// Returns: { message, booking }
router.post('/', async (req, res) => {
  try {
    const { userId, flightId, passenger } = req.body;

    // Basic validation
    if (!userId || !flightId || !passenger?.name || !passenger?.age) {
      return res.status(400).json({
        error: 'All fields are required: userId, flightId, passenger.name, passenger.age',
      });
    }

    const newBooking = new Booking({
      userId,
      flightId,
      passenger: {
        name: passenger.name.trim(),
        age:  Number(passenger.age),
      },
    });

    const savedBooking = await newBooking.save();

    res.status(201).json({
      message: 'Booking confirmed successfully! ✈️',
      booking: savedBooking,
    });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ error: 'Failed to save booking' });
  }
});

export default router;
