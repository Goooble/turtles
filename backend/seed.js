import 'dotenv/config';
import mongoose from 'mongoose';

// Define schemas locally for the seed script
const flightSchema = new mongoose.Schema({
  airline: String,
  from: String,
  to: String,
  date: String,
  departureTime: String,
  arrivalTime: String,
  price: Number
});

const bookingSchema = new mongoose.Schema({
  flightId: String,
  userId: String,
  passenger: {
    name: String,
    age: Number
  }
}, { timestamps: true });

const Flight = mongoose.models.Flight || mongoose.model('Flight', flightSchema);
const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);

const MONGODB_URI = process.env.MONGODB_URI;

const dummyFlights = [
  // Domestic
  { airline: 'IndiGo', from: 'DEL', to: 'BOM', date: '2026-05-01', departureTime: '06:00', arrivalTime: '08:15', price: 4200 },
  { airline: 'Air India', from: 'DEL', to: 'BOM', date: '2026-05-01', departureTime: '09:30', arrivalTime: '11:45', price: 4800 },
  { airline: 'Vistara', from: 'BOM', to: 'DEL', date: '2026-05-01', departureTime: '18:00', arrivalTime: '20:10', price: 5500 },
  { airline: 'SpiceJet', from: 'BLR', to: 'DEL', date: '2026-05-02', departureTime: '07:20', arrivalTime: '10:00', price: 6100 },
  { airline: 'IndiGo', from: 'DEL', to: 'BLR', date: '2026-05-02', departureTime: '15:00', arrivalTime: '17:45', price: 5900 },
  { airline: 'Air India', from: 'CCU', to: 'BOM', date: '2026-05-03', departureTime: '12:00', arrivalTime: '14:50', price: 7200 },
  { airline: 'Vistara', from: 'BOM', to: 'CCU', date: '2026-05-03', departureTime: '08:45', arrivalTime: '11:20', price: 6800 },
  { airline: 'IndiGo', from: 'HYD', to: 'DEL', date: '2026-05-04', departureTime: '06:30', arrivalTime: '08:45', price: 4900 },
  { airline: 'SpiceJet', from: 'DEL', to: 'HYD', date: '2026-05-04', departureTime: '19:15', arrivalTime: '21:30', price: 4500 },
  { airline: 'Air India', from: 'MAA', to: 'BOM', date: '2026-05-05', departureTime: '10:00', arrivalTime: '12:05', price: 5300 },
  { airline: 'Vistara', from: 'BOM', to: 'MAA', date: '2026-05-05', departureTime: '16:30', arrivalTime: '18:25', price: 5100 },
  { airline: 'IndiGo', from: 'PNQ', to: 'DEL', date: '2026-05-06', departureTime: '07:45', arrivalTime: '09:55', price: 4600 },
  { airline: 'Air India', from: 'DEL', to: 'PNQ', date: '2026-05-06', departureTime: '17:00', arrivalTime: '19:10', price: 5000 },
  { airline: 'Vistara', from: 'GOI', to: 'BOM', date: '2026-05-07', departureTime: '14:20', arrivalTime: '15:40', price: 3500 },
  { airline: 'IndiGo', from: 'BOM', to: 'GOI', date: '2026-05-07', departureTime: '09:00', arrivalTime: '10:15', price: 3800 },
  
  // International
  { airline: 'Emirates', from: 'BOM', to: 'DXB', date: '2026-05-01', departureTime: '04:30', arrivalTime: '06:00', price: 18000 },
  { airline: 'Air India', from: 'DEL', to: 'JFK', date: '2026-05-01', departureTime: '02:15', arrivalTime: '07:30', price: 85000 },
  { airline: 'British Airways', from: 'BOM', to: 'LHR', date: '2026-05-02', departureTime: '13:10', arrivalTime: '18:25', price: 52000 },
  { airline: 'Singapore Airlines', from: 'DEL', to: 'SIN', date: '2026-05-02', departureTime: '21:55', arrivalTime: '06:10', price: 28000 },
  { airline: 'Lufthansa', from: 'BLR', to: 'FRA', date: '2026-05-03', departureTime: '03:00', arrivalTime: '09:15', price: 61000 },
  { airline: 'Qatar Airways', from: 'BOM', to: 'DOH', date: '2026-05-03', departureTime: '04:10', arrivalTime: '05:30', price: 22000 },
  { airline: 'IndiGo', from: 'DEL', to: 'BKK', date: '2026-05-04', departureTime: '11:30', arrivalTime: '17:15', price: 16500 },
  { airline: 'Air France', from: 'BOM', to: 'CDG', date: '2026-05-04', departureTime: '02:00', arrivalTime: '08:15', price: 58000 },
  { airline: 'Vistara', from: 'DEL', to: 'LHR', date: '2026-05-05', departureTime: '14:50', arrivalTime: '19:40', price: 54000 },
  { airline: 'Etihad Airways', from: 'BOM', to: 'AUH', date: '2026-05-05', departureTime: '22:15', arrivalTime: '00:05', price: 19500 },
  { airline: 'Malaysia Airlines', from: 'DEL', to: 'KUL', date: '2026-05-06', departureTime: '23:00', arrivalTime: '06:45', price: 21000 },
  { airline: 'Cathay Pacific', from: 'BOM', to: 'HKG', date: '2026-05-06', departureTime: '01:15', arrivalTime: '09:35', price: 38000 },
  { airline: 'United Airlines', from: 'DEL', to: 'EWR', date: '2026-05-07', departureTime: '23:35', arrivalTime: '04:55', price: 82000 },
  { airline: 'Air India', from: 'BOM', to: 'SFO', date: '2026-05-07', departureTime: '14:30', arrivalTime: '17:00', price: 91000 },
  { airline: 'Emirates', from: 'DEL', to: 'DXB', date: '2026-05-08', departureTime: '10:35', arrivalTime: '12:45', price: 17500 },
  { airline: 'SriLankan Airlines', from: 'BOM', to: 'CMB', date: '2026-05-08', departureTime: '20:40', arrivalTime: '23:00', price: 14000 },
  { airline: 'IndiGo', from: 'DEL', to: 'KTM', date: '2026-05-09', departureTime: '11:45', arrivalTime: '13:45', price: 9500 },
  { airline: 'Air India', from: 'BOM', to: 'DXB', date: '2026-05-09', departureTime: '20:30', arrivalTime: '22:15', price: 15500 },
];

async function seedDB() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected!');

    console.log('Clearing existing flights and bookings...');
    await Flight.deleteMany({});
    await Booking.deleteMany({});
    
    console.log('Inserting dummy flights...');
    const insertedFlights = await Flight.insertMany(dummyFlights);
    console.log(`✅ Inserted ${insertedFlights.length} flights!`);

    console.log('Inserting dummy bookings...');
    const dummyBookings = [
      { flightId: insertedFlights[0]._id.toString(), userId: 'user123', passenger: { name: 'Alice Smith', age: 28 } },
      { flightId: insertedFlights[15]._id.toString(), userId: 'user456', passenger: { name: 'Bob Jones', age: 34 } },
      { flightId: insertedFlights[3]._id.toString(), userId: 'user789', passenger: { name: 'Charlie Brown', age: 45 } },
    ];
    const insertedBookings = await Booking.insertMany(dummyBookings);
    console.log(`✅ Inserted ${insertedBookings.length} bookings!`);

    console.log('🎉 Seeding complete!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error during seeding:', err);
    process.exit(1);
  }
}

seedDB();
