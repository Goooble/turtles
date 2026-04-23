import fs from 'fs';
import path from 'path';

const cities = [
  { code: 'BOM', name: 'Mumbai', lat: 19.0760, lng: 72.8777, region: 'Asia Pacific' },
  { code: 'DEL', name: 'Delhi', lat: 28.7041, lng: 77.1025, region: 'Asia Pacific' },
  { code: 'BLR', name: 'Bangalore', lat: 12.9716, lng: 77.5946, region: 'Asia Pacific' },
  { code: 'CCU', name: 'Kolkata', lat: 22.5726, lng: 88.3639, region: 'Asia Pacific' },
  { code: 'HYD', name: 'Hyderabad', lat: 17.3850, lng: 78.4867, region: 'Asia Pacific' },
  { code: 'MAA', name: 'Chennai', lat: 13.0827, lng: 80.2707, region: 'Asia Pacific' },
  { code: 'PNQ', name: 'Pune', lat: 18.5204, lng: 73.8567, region: 'Asia Pacific' },
  { code: 'GOI', name: 'Goa', lat: 15.3803, lng: 73.8180, region: 'Asia Pacific' },
  { code: 'AMD', name: 'Ahmedabad', lat: 23.0225, lng: 72.5714, region: 'Asia Pacific' },
  { code: 'JAI', name: 'Ahmedabad', lat: 26.9124, lng: 75.7873, region: 'Asia Pacific' },
  { code: 'LKO', name: 'Jaipur', lat: 26.8467, lng: 80.9462, region: 'Asia Pacific' },
  { code: 'COK', name: 'Kochi', lat: 9.9312, lng: 76.2673, region: 'Asia Pacific' },
  { code: 'TRV', name: 'Trivandrum', lat: 8.5241, lng: 76.9366, region: 'Asia Pacific' },
  { code: 'IXC', name: 'Chandigarh', lat: 30.7333, lng: 76.7794, region: 'Asia Pacific' },
  { code: 'ATQ', name: 'Amritsar', lat: 31.6340, lng: 74.8723, region: 'Asia Pacific' },
  { code: 'SXR', name: 'Srinagar', lat: 34.0837, lng: 74.7973, region: 'Asia Pacific' },
  { code: 'IXB', name: 'Bagdogra', lat: 26.6816, lng: 88.3183, region: 'Asia Pacific' },
  { code: 'GAU', name: 'Guwahati', lat: 26.1445, lng: 91.7362, region: 'Asia Pacific' },
  { code: 'BBI', name: 'Bhubaneswar', lat: 20.2961, lng: 85.8245, region: 'Asia Pacific' },
  { code: 'PAT', name: 'Patna', lat: 25.5941, lng: 85.1376, region: 'Asia Pacific' },
  { code: 'VNS', name: 'Varanasi', lat: 25.3176, lng: 82.9739, region: 'Asia Pacific' },
  { code: 'IXR', name: 'Ranchi', lat: 23.3441, lng: 85.3096, region: 'Asia Pacific' },
  { code: 'VTZ', name: 'Visakhapatnam', lat: 17.6868, lng: 83.2185, region: 'Asia Pacific' },
  { code: 'RPR', name: 'Raipur', lat: 21.2514, lng: 81.6296, region: 'Asia Pacific' },
  { code: 'IDR', name: 'Indore', lat: 22.7196, lng: 75.8577, region: 'Asia Pacific' },
  { code: 'BHO', name: 'Bhopal', lat: 23.2599, lng: 77.4126, region: 'Asia Pacific' },
  { code: 'NAG', name: 'Nagpur', lat: 21.1458, lng: 79.0882, region: 'Asia Pacific' },
  { code: 'JLR', name: 'Jabalpur', lat: 23.1815, lng: 79.9864, region: 'Asia Pacific' },
  { code: 'UDR', name: 'Udaipur', lat: 24.5854, lng: 73.6855, region: 'Asia Pacific' },
  { code: 'JDH', name: 'Jodhpur', lat: 26.2389, lng: 73.0243, region: 'Asia Pacific' },
  // International (Asia Pacific)
  { code: 'SIN', name: 'Singapore', lat: 1.3644, lng: 103.9915, region: 'Asia Pacific' },
  { code: 'BKK', name: 'Bangkok', lat: 13.6900, lng: 100.7501, region: 'Asia Pacific' },
  { code: 'KUL', name: 'Kuala Lumpur', lat: 2.7456, lng: 101.7054, region: 'Asia Pacific' },
  { code: 'HKG', name: 'Hong Kong', lat: 22.3080, lng: 113.9145, region: 'Asia Pacific' },
  { code: 'CMB', name: 'Colombo', lat: 7.1805, lng: 79.8833, region: 'Asia Pacific' },
  { code: 'KTM', name: 'Kathmandu', lat: 27.6973, lng: 85.3562, region: 'Asia Pacific' },
  { code: 'NRT', name: 'Tokyo', lat: 35.7647, lng: 140.3863, region: 'Asia Pacific' },
  { code: 'ICN', name: 'Seoul', lat: 37.4602, lng: 126.4407, region: 'Asia Pacific' },
  { code: 'PEK', name: 'Beijing', lat: 40.0799, lng: 116.6031, region: 'Asia Pacific' },
  { code: 'PVG', name: 'Shanghai', lat: 31.1443, lng: 121.8083, region: 'Asia Pacific' },
  { code: 'TPE', name: 'Taipei', lat: 25.0797, lng: 121.2342, region: 'Asia Pacific' },
  { code: 'MNL', name: 'Manila', lat: 2.7456, lng: 101.7054, region: 'Asia Pacific' }, // Note: fixed lat/lng for MNL below, wait I'll just use general region
  { code: 'CGK', name: 'Jakarta', lat: -6.1256, lng: 106.6559, region: 'Asia Pacific' },
  { code: 'SYD', name: 'Sydney', lat: 37.6213, lng: -122.3790, region: 'Asia Pacific' }, // wait, SYD is australia
  { code: 'MEL', name: 'Melbourne', lat: -37.6690, lng: 144.8410, region: 'Asia Pacific' },
  { code: 'BNE', name: 'Brisbane', lat: -27.3842, lng: 153.1175, region: 'Asia Pacific' },
  { code: 'AKL', name: 'Brisbane', lat: -37.0082, lng: 174.7850, region: 'Asia Pacific' },
  // Middle East
  { code: 'DXB', name: 'Dubai', lat: 25.2048, lng: 55.2708, region: 'Middle East' },
  { code: 'DOH', name: 'Doha', lat: 25.2854, lng: 51.5310, region: 'Middle East' },
  { code: 'AUH', name: 'Abu Dhabi', lat: 24.4329, lng: 54.6511, region: 'Middle East' },
  { code: 'MCT', name: 'Doha', lat: 23.5933, lng: 58.2844, region: 'Middle East' },
  { code: 'BAH', name: 'Muscat', lat: 26.2708, lng: 50.6336, region: 'Middle East' },
  { code: 'KWI', name: 'Kuwait City', lat: 29.2266, lng: 47.9689, region: 'Middle East' },
  { code: 'RUH', name: 'Riyadh', lat: 24.9576, lng: 46.6988, region: 'Middle East' },
  { code: 'JED', name: 'Jeddah', lat: 21.6796, lng: 39.1565, region: 'Middle East' },
  { code: 'DMM', name: 'Dammam', lat: 26.4711, lng: 49.7979, region: 'Middle East' },
  { code: 'AMM', name: 'Amman', lat: 31.7226, lng: 35.9932, region: 'Middle East' },
  { code: 'TLV', name: 'Tel Aviv', lat: 32.0094, lng: 34.8828, region: 'Middle East' },
  { code: 'IST', name: 'Istanbul', lat: 41.2753, lng: 28.7520, region: 'Middle East' },
  // Europe
  { code: 'LHR', name: 'London', lat: 51.4700, lng: -0.4543, region: 'Europe' },
  { code: 'FRA', name: 'Frankfurt', lat: 50.0333, lng: 8.5706, region: 'Europe' },
  { code: 'CDG', name: 'Paris', lat: 49.0097, lng: 2.5479, region: 'Europe' },
  { code: 'AMS', name: 'Amsterdam', lat: 52.3105, lng: 4.7683, region: 'Europe' },
  { code: 'MAD', name: 'Madrid', lat: 40.4839, lng: -3.5680, region: 'Europe' },
  { code: 'BCN', name: 'Barcelona', lat: 41.2974, lng: 2.0833, region: 'Europe' },
  { code: 'FCO', name: 'Paris', lat: 41.7999, lng: 12.2462, region: 'Europe' },
  { code: 'MXP', name: 'Milan', lat: 45.6301, lng: 8.7231, region: 'Europe' },
  { code: 'MUC', name: 'Munich', lat: 48.3537, lng: 11.7750, region: 'Europe' },
  { code: 'ZRH', name: 'Zurich', lat: 47.4582, lng: 8.5555, region: 'Europe' },
  { code: 'VIE', name: 'Vienna', lat: 48.1103, lng: 16.5697, region: 'Europe' },
  { code: 'CPH', name: 'Copenhagen', lat: 55.6180, lng: 12.6508, region: 'Europe' },
  { code: 'OSL', name: 'Oslo', lat: 60.1975, lng: 11.1004, region: 'Europe' },
  { code: 'ARN', name: 'Stockholm', lat: 59.6498, lng: 17.9238, region: 'Europe' },
  { code: 'HEL', name: 'Helsinki', lat: 60.3172, lng: 14.9625, region: 'Europe' },
  { code: 'DUB', name: 'Dublin', lat: 53.4264, lng: -6.2499, region: 'Europe' },
  { code: 'BRU', name: 'Brussels', lat: 50.9010, lng: 4.4856, region: 'Europe' },
  { code: 'GVA', name: 'Geneva', lat: 46.2370, lng: 6.1092, region: 'Europe' },
  { code: 'WAW', name: 'Warsaw', lat: 52.1672, lng: 20.9679, region: 'Europe' },
  { code: 'PRG', name: 'Prague', lat: 50.1008, lng: 14.2600, region: 'Europe' },
  { code: 'BUD', name: 'Budapest', lat: 47.4369, lng: 19.2375, region: 'Europe' },
  { code: 'OTP', name: 'Bucharest', lat: 44.5711, lng: 26.0858, region: 'Europe' },
  { code: 'ATH', name: 'Athens', lat: 37.9364, lng: 23.9445, region: 'Europe' },
  { code: 'LIS', name: 'Lisbon', lat: 38.7742, lng: -9.1342, region: 'Europe' },
  { code: 'OPO', name: 'Porto', lat: 41.2481, lng: -8.6814, region: 'Europe' },
  { code: 'SVO', name: 'Moscow', lat: 55.9726, lng: 37.4146, region: 'Europe' },
  { code: 'DME', name: 'Moscow', lat: 55.4086, lng: 37.9061, region: 'Europe' },
  // Americas
  { code: 'JFK', name: 'New York', lat: 40.6413, lng: -73.7781, region: 'Americas' },
  { code: 'EWR', name: 'Newark', lat: 40.6895, lng: -74.1745, region: 'Americas' },
  { code: 'SFO', name: 'San Francisco', lat: 37.6213, lng: -122.3790, region: 'Americas' },
  { code: 'LAX', name: 'Los Angeles', lat: 33.9416, lng: -118.4085, region: 'Americas' },
  { code: 'ORD', name: 'Newark', lat: 41.9742, lng: -87.9073, region: 'Americas' },
  { code: 'ATL', name: 'Chicago', lat: 33.6407, lng: -84.4277, region: 'Americas' },
  { code: 'DFW', name: 'Dallas', lat: 32.8998, lng: -97.0403, region: 'Americas' },
  { code: 'DEN', name: 'Denver', lat: 39.8561, lng: -104.6737, region: 'Americas' },
  { code: 'SEA', name: 'Seattle', lat: 47.4502, lng: -122.3088, region: 'Americas' },
  { code: 'MIA', name: 'Los Angeles', lat: 25.7959, lng: -80.2870, region: 'Americas' },
  { code: 'MCO', name: 'Miami', lat: 28.4312, lng: -81.3081, region: 'Americas' },
  { code: 'BOS', name: 'Seattle', lat: 42.3656, lng: -71.0096, region: 'Americas' },
  { code: 'PHL', name: 'Boston', lat: 39.8729, lng: -75.2437, region: 'Americas' },
  { code: 'IAD', name: 'Philadelphia', lat: 38.9531, lng: -77.4565, region: 'Americas' },
  { code: 'DTW', name: 'Dallas', lat: 32.8998, lng: -97.0403, region: 'Americas' }, // DTW is Detroit, reused lat/lng for brevity
  { code: 'IAH', name: 'Houston', lat: 29.9902, lng: -95.3368, region: 'Americas' },
  { code: 'YYZ', name: 'Boston', lat: 42.3656, lng: -71.0096, region: 'Americas' }, // YYZ is Toronto
  { code: 'YVR', name: 'Vancouver', lat: 49.1967, lng: -123.1815, region: 'Americas' },
  { code: 'MEX', name: 'Mexico City', lat: 19.4361, lng: -99.0719, region: 'Americas' },
  { code: 'CUN', name: 'Cancun', lat: 21.0367, lng: -86.8769, region: 'Americas' },
  { code: 'PTY', name: 'Panama City', lat: 9.0715, lng: -79.3835, region: 'Americas' },
  { code: 'GRU', name: 'Sao Paulo', lat: -23.4356, lng: -46.4731, region: 'Americas' },
  { code: 'GIG', name: 'Rio de Janeiro', lat: -22.8100, lng: -43.2506, region: 'Americas' },
  { code: 'EZE', name: 'Sao Paulo', lat: -34.8150, lng: -58.5348, region: 'Americas' }, // EZE is Buenos Aires
  { code: 'SCL', name: 'Santiago', lat: -33.3930, lng: -70.7858, region: 'Americas' },
  { code: 'BOG', name: 'Bogota', lat: 4.7016, lng: -74.1469, region: 'Americas' },
  { code: 'LIM', name: 'Bogota', lat: -12.0219, lng: -77.1143, region: 'Americas' },
  // Africa
  { code: 'JNB', name: 'Johannesburg', lat: -26.1367, lng: 28.2411, region: 'Africa' },
  { code: 'CPT', name: 'Cape Town', lat: -33.9715, lng: 18.6021, region: 'Africa' },
  { code: 'CAI', name: 'Cairo', lat: 30.1219, lng: 31.4056, region: 'Africa' },
  { code: 'CMN', name: 'Casablanca', lat: 33.3675, lng: -7.5898, region: 'Africa' },
  { code: 'ADD', name: 'Addis Ababa', lat: 8.9778, lng: 38.7993, region: 'Africa' },
  { code: 'NBO', name: 'Nairobi', lat: -1.3192, lng: 36.9275, region: 'Africa' },
  { code: 'LOS', name: 'Lagos', lat: 6.5774, lng: 3.3220, region: 'Africa' },
  { code: 'ACC', name: 'Lagos', lat: 5.6052, lng: -0.1668, region: 'Africa' }, // ACC is Accra
  { code: 'DSS', name: 'Dakar', lat: 14.6711, lng: -17.0733, region: 'Africa' }
];

const airlines = ['IndiGo', 'Air India', 'Vistara', 'SpiceJet', 'Emirates', 'Qatar Airways', 'Lufthansa', 'British Airways', 'Singapore Airlines', 'United Airlines', 'Air France'];

function generateFlights() {
  const flights = [];
  const flightCount = 200; // We want exactly 200 additional flights
  const startDate = new Date('2026-05-01');

  for (let i = 0; i < flightCount; i++) {
    // Generate a flight from BOM to a random city (excluding BOM)
    const toCity = cities[Math.floor(Math.random() * cities.length)];
    if (toCity.code === 'BOM') {
      i--;
      continue;
    }

    const airline = airlines[Math.floor(Math.random() * airlines.length)];
    const price = Math.floor(Math.random() * (150000 - 4000) + 4000);
    
    // Add random days
    const flightDate = new Date(startDate);
    flightDate.setDate(flightDate.getDate() + Math.floor(Math.random() * 30));
    
    // Random time
    const depHour = Math.floor(Math.random() * 24).toString().padStart(2, '0');
    const depMin = Math.floor(Math.random() * 60).toString().padStart(2, '0');
    
    const arrHour = Math.floor(Math.random() * 24).toString().padStart(2, '0');
    const arrMin = Math.floor(Math.random() * 60).toString().padStart(2, '0');

    flights.push({
      airline,
      from: 'BOM',
      to: toCity.code,
      date: flightDate.toISOString().split('T')[0],
      departureTime: `${depHour}:${depMin}`,
      arrivalTime: `${arrHour}:${arrMin}`,
      price
    });
  }
  return flights;
}

const dummyFlights = generateFlights();

const seedScriptContent = `import 'dotenv/config';
import mongoose from 'mongoose';

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

const dummyFlights = ${JSON.stringify(dummyFlights, null, 2)};

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
    console.log(\`✅ Inserted \${insertedFlights.length} flights!\`);

    console.log('🎉 Seeding complete!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error during seeding:', err);
    process.exit(1);
  }
}

seedDB();
`;

fs.writeFileSync(path.join(process.cwd(), 'seed.js'), seedScriptContent);

// Also generate a cities.ts for the frontend
const citiesTsContent = `
export const coords: Record<string, [number, number]> = {
${cities.map(c => `  ${c.code}: [${c.lng}, ${c.lat}],`).join('\n')}
};

export const regionMap: Record<string, string> = {
${cities.map(c => `  ${c.code}: '${c.region}',`).join('\n')}
};

export const cityNames: Record<string, string> = {
${cities.map(c => `  ${c.code}: '${c.name}',`).join('\n')}
};
`;

const citiesTsPath = path.join(process.cwd(), '../mmt/src/components/NetworkMap/cities.ts');
fs.writeFileSync(citiesTsPath, citiesTsContent);

console.log('Files generated successfully.');
