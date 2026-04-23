import 'dotenv/config';
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

const dummyFlights = [
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "VTZ",
    "date": "2026-05-05",
    "departureTime": "03:44",
    "arrivalTime": "12:28",
    "price": 143140
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "MXP",
    "date": "2026-05-26",
    "departureTime": "04:04",
    "arrivalTime": "07:12",
    "price": 96798
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "BBI",
    "date": "2026-05-28",
    "departureTime": "22:55",
    "arrivalTime": "09:17",
    "price": 145026
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "JED",
    "date": "2026-05-17",
    "departureTime": "21:31",
    "arrivalTime": "06:03",
    "price": 111319
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "DMM",
    "date": "2026-05-14",
    "departureTime": "00:58",
    "arrivalTime": "08:48",
    "price": 104267
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "BCN",
    "date": "2026-05-22",
    "departureTime": "15:01",
    "arrivalTime": "21:07",
    "price": 101332
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "SXR",
    "date": "2026-05-21",
    "departureTime": "02:26",
    "arrivalTime": "11:06",
    "price": 63674
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "LHR",
    "date": "2026-05-18",
    "departureTime": "16:17",
    "arrivalTime": "15:30",
    "price": 82471
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "PTY",
    "date": "2026-05-29",
    "departureTime": "11:35",
    "arrivalTime": "01:12",
    "price": 17861
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "OSL",
    "date": "2026-05-05",
    "departureTime": "06:33",
    "arrivalTime": "10:44",
    "price": 39974
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "SYD",
    "date": "2026-05-02",
    "departureTime": "10:29",
    "arrivalTime": "15:30",
    "price": 81006
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "AMD",
    "date": "2026-05-24",
    "departureTime": "15:32",
    "arrivalTime": "13:42",
    "price": 20660
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "CAI",
    "date": "2026-05-13",
    "departureTime": "10:25",
    "arrivalTime": "02:03",
    "price": 14631
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "MEL",
    "date": "2026-05-04",
    "departureTime": "16:11",
    "arrivalTime": "20:24",
    "price": 143019
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "LIS",
    "date": "2026-05-02",
    "departureTime": "11:30",
    "arrivalTime": "23:44",
    "price": 109229
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "DSS",
    "date": "2026-05-26",
    "departureTime": "17:54",
    "arrivalTime": "09:06",
    "price": 117054
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "ICN",
    "date": "2026-05-24",
    "departureTime": "16:50",
    "arrivalTime": "08:57",
    "price": 135481
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "AMM",
    "date": "2026-05-04",
    "departureTime": "13:09",
    "arrivalTime": "01:46",
    "price": 31215
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "ORD",
    "date": "2026-05-07",
    "departureTime": "10:35",
    "arrivalTime": "03:00",
    "price": 144048
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "IAD",
    "date": "2026-05-23",
    "departureTime": "17:26",
    "arrivalTime": "02:24",
    "price": 124228
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "BNE",
    "date": "2026-05-03",
    "departureTime": "11:58",
    "arrivalTime": "14:30",
    "price": 104597
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "OSL",
    "date": "2026-05-16",
    "departureTime": "01:39",
    "arrivalTime": "07:16",
    "price": 139776
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "DME",
    "date": "2026-05-28",
    "departureTime": "04:03",
    "arrivalTime": "19:10",
    "price": 18883
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "PVG",
    "date": "2026-05-13",
    "departureTime": "07:23",
    "arrivalTime": "08:22",
    "price": 10414
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "DTW",
    "date": "2026-05-29",
    "departureTime": "12:57",
    "arrivalTime": "00:32",
    "price": 11627
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "BNE",
    "date": "2026-05-15",
    "departureTime": "10:22",
    "arrivalTime": "22:49",
    "price": 26212
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "TRV",
    "date": "2026-05-08",
    "departureTime": "10:42",
    "arrivalTime": "04:35",
    "price": 38106
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "IAH",
    "date": "2026-05-30",
    "departureTime": "08:28",
    "arrivalTime": "12:51",
    "price": 58641
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "SCL",
    "date": "2026-05-27",
    "departureTime": "12:45",
    "arrivalTime": "10:37",
    "price": 41939
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "MAA",
    "date": "2026-05-21",
    "departureTime": "19:50",
    "arrivalTime": "17:21",
    "price": 31145
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "NRT",
    "date": "2026-05-17",
    "departureTime": "21:18",
    "arrivalTime": "23:06",
    "price": 57928
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "CPH",
    "date": "2026-05-06",
    "departureTime": "03:50",
    "arrivalTime": "02:17",
    "price": 34442
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "IST",
    "date": "2026-05-07",
    "departureTime": "11:44",
    "arrivalTime": "10:54",
    "price": 70564
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "BAH",
    "date": "2026-05-27",
    "departureTime": "22:05",
    "arrivalTime": "20:30",
    "price": 41513
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "KTM",
    "date": "2026-05-12",
    "departureTime": "04:29",
    "arrivalTime": "16:23",
    "price": 37040
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "MAA",
    "date": "2026-05-09",
    "departureTime": "00:37",
    "arrivalTime": "15:26",
    "price": 125653
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "SYD",
    "date": "2026-05-03",
    "departureTime": "21:21",
    "arrivalTime": "21:05",
    "price": 25489
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "DME",
    "date": "2026-05-06",
    "departureTime": "14:47",
    "arrivalTime": "11:53",
    "price": 6123
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "LOS",
    "date": "2026-05-10",
    "departureTime": "23:28",
    "arrivalTime": "12:38",
    "price": 42385
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "MUC",
    "date": "2026-05-19",
    "departureTime": "14:13",
    "arrivalTime": "02:33",
    "price": 105215
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "KUL",
    "date": "2026-05-24",
    "departureTime": "17:50",
    "arrivalTime": "14:18",
    "price": 149155
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "PEK",
    "date": "2026-05-23",
    "departureTime": "03:53",
    "arrivalTime": "04:29",
    "price": 9005
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "TPE",
    "date": "2026-05-14",
    "departureTime": "11:55",
    "arrivalTime": "17:45",
    "price": 118418
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "DSS",
    "date": "2026-05-24",
    "departureTime": "14:17",
    "arrivalTime": "23:12",
    "price": 104485
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "PRG",
    "date": "2026-05-28",
    "departureTime": "14:03",
    "arrivalTime": "09:08",
    "price": 82422
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "CMB",
    "date": "2026-05-13",
    "departureTime": "16:51",
    "arrivalTime": "09:16",
    "price": 123950
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "TLV",
    "date": "2026-05-18",
    "departureTime": "14:54",
    "arrivalTime": "12:10",
    "price": 13496
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "MIA",
    "date": "2026-05-24",
    "departureTime": "22:34",
    "arrivalTime": "06:19",
    "price": 31746
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "JED",
    "date": "2026-05-05",
    "departureTime": "15:21",
    "arrivalTime": "23:02",
    "price": 142082
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "SXR",
    "date": "2026-05-10",
    "departureTime": "06:24",
    "arrivalTime": "10:21",
    "price": 39376
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "JAI",
    "date": "2026-05-25",
    "departureTime": "08:29",
    "arrivalTime": "04:48",
    "price": 146832
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "BUD",
    "date": "2026-05-13",
    "departureTime": "02:14",
    "arrivalTime": "17:13",
    "price": 42489
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "PVG",
    "date": "2026-05-25",
    "departureTime": "11:11",
    "arrivalTime": "09:12",
    "price": 63340
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "YVR",
    "date": "2026-05-24",
    "departureTime": "02:51",
    "arrivalTime": "09:50",
    "price": 100103
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "CAI",
    "date": "2026-05-20",
    "departureTime": "14:56",
    "arrivalTime": "04:39",
    "price": 46463
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "GVA",
    "date": "2026-05-30",
    "departureTime": "02:50",
    "arrivalTime": "13:52",
    "price": 51503
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "BOG",
    "date": "2026-05-28",
    "departureTime": "00:23",
    "arrivalTime": "09:56",
    "price": 55903
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "PHL",
    "date": "2026-05-18",
    "departureTime": "11:04",
    "arrivalTime": "10:05",
    "price": 118819
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "PTY",
    "date": "2026-05-08",
    "departureTime": "00:38",
    "arrivalTime": "14:13",
    "price": 128211
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "CCU",
    "date": "2026-05-16",
    "departureTime": "00:42",
    "arrivalTime": "12:57",
    "price": 69278
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "VIE",
    "date": "2026-05-02",
    "departureTime": "02:29",
    "arrivalTime": "20:39",
    "price": 50084
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "ADD",
    "date": "2026-05-15",
    "departureTime": "01:27",
    "arrivalTime": "05:49",
    "price": 120320
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "IXC",
    "date": "2026-05-15",
    "departureTime": "05:55",
    "arrivalTime": "05:21",
    "price": 11100
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "BOG",
    "date": "2026-05-14",
    "departureTime": "19:59",
    "arrivalTime": "07:36",
    "price": 104905
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "IST",
    "date": "2026-05-19",
    "departureTime": "12:18",
    "arrivalTime": "04:18",
    "price": 99748
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "DME",
    "date": "2026-05-19",
    "departureTime": "06:05",
    "arrivalTime": "20:18",
    "price": 52842
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "HEL",
    "date": "2026-05-25",
    "departureTime": "11:32",
    "arrivalTime": "17:09",
    "price": 63569
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "MCO",
    "date": "2026-05-13",
    "departureTime": "18:57",
    "arrivalTime": "21:59",
    "price": 89517
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "COK",
    "date": "2026-05-02",
    "departureTime": "02:51",
    "arrivalTime": "22:52",
    "price": 85902
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "EZE",
    "date": "2026-05-04",
    "departureTime": "10:08",
    "arrivalTime": "07:03",
    "price": 50123
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "GAU",
    "date": "2026-05-09",
    "departureTime": "19:31",
    "arrivalTime": "01:17",
    "price": 56672
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "DOH",
    "date": "2026-05-07",
    "departureTime": "13:33",
    "arrivalTime": "06:52",
    "price": 92986
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "SYD",
    "date": "2026-05-06",
    "departureTime": "23:19",
    "arrivalTime": "10:49",
    "price": 88424
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "IAH",
    "date": "2026-05-29",
    "departureTime": "22:39",
    "arrivalTime": "07:21",
    "price": 121961
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "DSS",
    "date": "2026-05-30",
    "departureTime": "05:34",
    "arrivalTime": "02:41",
    "price": 53323
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "AMM",
    "date": "2026-05-29",
    "departureTime": "01:32",
    "arrivalTime": "03:43",
    "price": 118725
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "JLR",
    "date": "2026-05-30",
    "departureTime": "06:03",
    "arrivalTime": "22:09",
    "price": 35783
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "PEK",
    "date": "2026-05-06",
    "departureTime": "10:54",
    "arrivalTime": "17:51",
    "price": 44664
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "OPO",
    "date": "2026-05-24",
    "departureTime": "02:11",
    "arrivalTime": "08:08",
    "price": 97097
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "ADD",
    "date": "2026-05-09",
    "departureTime": "12:23",
    "arrivalTime": "19:33",
    "price": 24765
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "GVA",
    "date": "2026-05-02",
    "departureTime": "19:27",
    "arrivalTime": "14:11",
    "price": 102688
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "AMD",
    "date": "2026-05-11",
    "departureTime": "05:53",
    "arrivalTime": "01:17",
    "price": 42067
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "VNS",
    "date": "2026-05-05",
    "departureTime": "00:05",
    "arrivalTime": "12:53",
    "price": 51239
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "CDG",
    "date": "2026-05-23",
    "departureTime": "17:59",
    "arrivalTime": "15:33",
    "price": 100429
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "IXB",
    "date": "2026-05-18",
    "departureTime": "19:45",
    "arrivalTime": "15:38",
    "price": 8816
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "LIS",
    "date": "2026-05-14",
    "departureTime": "23:39",
    "arrivalTime": "07:45",
    "price": 51784
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "UDR",
    "date": "2026-05-26",
    "departureTime": "19:22",
    "arrivalTime": "02:27",
    "price": 51001
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "SEA",
    "date": "2026-05-24",
    "departureTime": "18:09",
    "arrivalTime": "07:10",
    "price": 53651
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "LIS",
    "date": "2026-05-26",
    "departureTime": "15:12",
    "arrivalTime": "18:32",
    "price": 19064
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "BLR",
    "date": "2026-05-27",
    "departureTime": "16:12",
    "arrivalTime": "13:14",
    "price": 141399
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "VIE",
    "date": "2026-05-22",
    "departureTime": "06:19",
    "arrivalTime": "22:36",
    "price": 36787
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "JAI",
    "date": "2026-05-16",
    "departureTime": "14:45",
    "arrivalTime": "09:31",
    "price": 17957
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "TLV",
    "date": "2026-05-16",
    "departureTime": "20:04",
    "arrivalTime": "08:16",
    "price": 119356
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "DSS",
    "date": "2026-05-22",
    "departureTime": "20:05",
    "arrivalTime": "05:55",
    "price": 28438
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "IDR",
    "date": "2026-05-09",
    "departureTime": "23:32",
    "arrivalTime": "20:59",
    "price": 16659
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "GAU",
    "date": "2026-05-22",
    "departureTime": "07:16",
    "arrivalTime": "06:06",
    "price": 5535
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "DEL",
    "date": "2026-05-15",
    "departureTime": "14:20",
    "arrivalTime": "16:16",
    "price": 136769
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "MEX",
    "date": "2026-05-22",
    "departureTime": "05:42",
    "arrivalTime": "00:57",
    "price": 98907
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "LIS",
    "date": "2026-05-29",
    "departureTime": "12:04",
    "arrivalTime": "16:16",
    "price": 31939
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "CPT",
    "date": "2026-05-05",
    "departureTime": "23:08",
    "arrivalTime": "18:25",
    "price": 145295
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "PAT",
    "date": "2026-05-29",
    "departureTime": "15:36",
    "arrivalTime": "15:42",
    "price": 89658
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "IDR",
    "date": "2026-05-21",
    "departureTime": "17:34",
    "arrivalTime": "03:35",
    "price": 14980
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "BBI",
    "date": "2026-05-28",
    "departureTime": "02:51",
    "arrivalTime": "03:50",
    "price": 104064
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "PRG",
    "date": "2026-05-01",
    "departureTime": "22:49",
    "arrivalTime": "12:37",
    "price": 94801
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "AMS",
    "date": "2026-05-27",
    "departureTime": "03:49",
    "arrivalTime": "09:42",
    "price": 134577
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "ATL",
    "date": "2026-05-07",
    "departureTime": "12:56",
    "arrivalTime": "17:57",
    "price": 18288
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "CAI",
    "date": "2026-05-19",
    "departureTime": "20:13",
    "arrivalTime": "09:26",
    "price": 140047
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "SXR",
    "date": "2026-05-13",
    "departureTime": "00:46",
    "arrivalTime": "12:02",
    "price": 17310
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "LHR",
    "date": "2026-05-16",
    "departureTime": "05:33",
    "arrivalTime": "04:58",
    "price": 71408
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "HYD",
    "date": "2026-05-09",
    "departureTime": "05:29",
    "arrivalTime": "10:59",
    "price": 95271
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "FRA",
    "date": "2026-05-12",
    "departureTime": "11:16",
    "arrivalTime": "01:53",
    "price": 68038
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "CUN",
    "date": "2026-05-30",
    "departureTime": "11:04",
    "arrivalTime": "15:32",
    "price": 51585
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "DME",
    "date": "2026-05-08",
    "departureTime": "20:09",
    "arrivalTime": "06:36",
    "price": 97073
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "AMD",
    "date": "2026-05-29",
    "departureTime": "07:06",
    "arrivalTime": "08:15",
    "price": 130796
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "MAA",
    "date": "2026-05-03",
    "departureTime": "12:41",
    "arrivalTime": "02:19",
    "price": 41903
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "AKL",
    "date": "2026-05-07",
    "departureTime": "05:34",
    "arrivalTime": "13:57",
    "price": 127773
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "LIM",
    "date": "2026-05-22",
    "departureTime": "18:56",
    "arrivalTime": "11:52",
    "price": 66988
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "DFW",
    "date": "2026-05-21",
    "departureTime": "10:38",
    "arrivalTime": "06:13",
    "price": 73818
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "JDH",
    "date": "2026-05-01",
    "departureTime": "16:36",
    "arrivalTime": "08:13",
    "price": 34771
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "TRV",
    "date": "2026-05-08",
    "departureTime": "15:48",
    "arrivalTime": "16:29",
    "price": 148425
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "OSL",
    "date": "2026-05-19",
    "departureTime": "20:26",
    "arrivalTime": "01:52",
    "price": 31573
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "IST",
    "date": "2026-05-04",
    "departureTime": "06:58",
    "arrivalTime": "11:55",
    "price": 69096
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "MAD",
    "date": "2026-05-22",
    "departureTime": "16:13",
    "arrivalTime": "04:27",
    "price": 91641
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "DEL",
    "date": "2026-05-30",
    "departureTime": "17:34",
    "arrivalTime": "03:03",
    "price": 38082
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "CPH",
    "date": "2026-05-25",
    "departureTime": "21:42",
    "arrivalTime": "23:19",
    "price": 102011
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "MXP",
    "date": "2026-05-03",
    "departureTime": "15:54",
    "arrivalTime": "06:33",
    "price": 134956
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "YVR",
    "date": "2026-05-13",
    "departureTime": "03:35",
    "arrivalTime": "03:33",
    "price": 130574
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "BLR",
    "date": "2026-05-06",
    "departureTime": "07:46",
    "arrivalTime": "11:26",
    "price": 144257
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "KUL",
    "date": "2026-05-28",
    "departureTime": "03:32",
    "arrivalTime": "01:47",
    "price": 26308
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "VTZ",
    "date": "2026-05-15",
    "departureTime": "04:02",
    "arrivalTime": "04:25",
    "price": 65227
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "KWI",
    "date": "2026-05-25",
    "departureTime": "02:19",
    "arrivalTime": "15:47",
    "price": 76085
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "AMM",
    "date": "2026-05-29",
    "departureTime": "12:12",
    "arrivalTime": "03:33",
    "price": 131994
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "CMB",
    "date": "2026-05-14",
    "departureTime": "03:30",
    "arrivalTime": "08:51",
    "price": 95772
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "JAI",
    "date": "2026-05-29",
    "departureTime": "13:25",
    "arrivalTime": "04:08",
    "price": 71039
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "DME",
    "date": "2026-05-07",
    "departureTime": "07:09",
    "arrivalTime": "17:51",
    "price": 125595
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "JFK",
    "date": "2026-05-17",
    "departureTime": "20:51",
    "arrivalTime": "05:36",
    "price": 117308
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "PTY",
    "date": "2026-05-27",
    "departureTime": "00:48",
    "arrivalTime": "08:50",
    "price": 82453
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "CPT",
    "date": "2026-05-21",
    "departureTime": "01:07",
    "arrivalTime": "04:57",
    "price": 80822
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "SFO",
    "date": "2026-05-06",
    "departureTime": "03:13",
    "arrivalTime": "04:33",
    "price": 148311
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "MUC",
    "date": "2026-05-22",
    "departureTime": "09:22",
    "arrivalTime": "00:56",
    "price": 60449
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "AKL",
    "date": "2026-05-13",
    "departureTime": "12:38",
    "arrivalTime": "07:20",
    "price": 36583
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "PEK",
    "date": "2026-05-22",
    "departureTime": "03:08",
    "arrivalTime": "18:58",
    "price": 140529
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "SFO",
    "date": "2026-05-22",
    "departureTime": "17:10",
    "arrivalTime": "23:18",
    "price": 42029
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "OTP",
    "date": "2026-05-26",
    "departureTime": "21:06",
    "arrivalTime": "04:55",
    "price": 107340
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "SVO",
    "date": "2026-05-26",
    "departureTime": "05:00",
    "arrivalTime": "17:25",
    "price": 108335
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "JED",
    "date": "2026-05-23",
    "departureTime": "03:38",
    "arrivalTime": "14:34",
    "price": 96900
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "VTZ",
    "date": "2026-05-22",
    "departureTime": "14:14",
    "arrivalTime": "08:33",
    "price": 38316
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "KTM",
    "date": "2026-05-28",
    "departureTime": "23:19",
    "arrivalTime": "19:56",
    "price": 65169
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "LIS",
    "date": "2026-05-14",
    "departureTime": "06:03",
    "arrivalTime": "05:26",
    "price": 56276
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "BBI",
    "date": "2026-05-23",
    "departureTime": "02:12",
    "arrivalTime": "04:38",
    "price": 17756
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "DOH",
    "date": "2026-05-07",
    "departureTime": "10:26",
    "arrivalTime": "18:12",
    "price": 92934
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "IXB",
    "date": "2026-05-16",
    "departureTime": "02:36",
    "arrivalTime": "16:05",
    "price": 146186
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "EZE",
    "date": "2026-05-10",
    "departureTime": "07:54",
    "arrivalTime": "18:19",
    "price": 46807
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "GAU",
    "date": "2026-05-06",
    "departureTime": "20:20",
    "arrivalTime": "22:02",
    "price": 147082
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "IAH",
    "date": "2026-05-28",
    "departureTime": "20:08",
    "arrivalTime": "20:04",
    "price": 99322
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "RUH",
    "date": "2026-05-04",
    "departureTime": "18:38",
    "arrivalTime": "06:29",
    "price": 122314
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "ATL",
    "date": "2026-05-19",
    "departureTime": "07:01",
    "arrivalTime": "13:10",
    "price": 33379
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "KWI",
    "date": "2026-05-21",
    "departureTime": "20:50",
    "arrivalTime": "00:33",
    "price": 69517
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "AMD",
    "date": "2026-05-02",
    "departureTime": "18:01",
    "arrivalTime": "02:50",
    "price": 31008
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "CAI",
    "date": "2026-05-22",
    "departureTime": "16:05",
    "arrivalTime": "16:48",
    "price": 28184
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "BBI",
    "date": "2026-05-16",
    "departureTime": "12:07",
    "arrivalTime": "03:31",
    "price": 45896
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "IST",
    "date": "2026-05-24",
    "departureTime": "15:26",
    "arrivalTime": "21:09",
    "price": 35544
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "GAU",
    "date": "2026-05-30",
    "departureTime": "18:23",
    "arrivalTime": "04:20",
    "price": 19793
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "ADD",
    "date": "2026-05-08",
    "departureTime": "22:26",
    "arrivalTime": "19:40",
    "price": 76026
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "DTW",
    "date": "2026-05-04",
    "departureTime": "18:51",
    "arrivalTime": "12:26",
    "price": 90071
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "GAU",
    "date": "2026-05-28",
    "departureTime": "03:34",
    "arrivalTime": "04:05",
    "price": 105671
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "GIG",
    "date": "2026-05-13",
    "departureTime": "17:26",
    "arrivalTime": "16:59",
    "price": 21877
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "SFO",
    "date": "2026-05-25",
    "departureTime": "00:38",
    "arrivalTime": "18:22",
    "price": 114760
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "BCN",
    "date": "2026-05-19",
    "departureTime": "02:55",
    "arrivalTime": "05:02",
    "price": 28911
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "ACC",
    "date": "2026-05-03",
    "departureTime": "00:07",
    "arrivalTime": "17:37",
    "price": 45687
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "IXB",
    "date": "2026-05-15",
    "departureTime": "05:19",
    "arrivalTime": "14:37",
    "price": 97105
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "BLR",
    "date": "2026-05-07",
    "departureTime": "06:27",
    "arrivalTime": "00:20",
    "price": 51647
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "TRV",
    "date": "2026-05-30",
    "departureTime": "04:28",
    "arrivalTime": "12:54",
    "price": 39232
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "COK",
    "date": "2026-05-01",
    "departureTime": "05:58",
    "arrivalTime": "07:56",
    "price": 15591
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "BLR",
    "date": "2026-05-08",
    "departureTime": "16:46",
    "arrivalTime": "13:37",
    "price": 88350
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "VIE",
    "date": "2026-05-02",
    "departureTime": "15:42",
    "arrivalTime": "20:14",
    "price": 5623
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "BKK",
    "date": "2026-05-15",
    "departureTime": "09:31",
    "arrivalTime": "19:13",
    "price": 147968
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "DFW",
    "date": "2026-05-07",
    "departureTime": "06:59",
    "arrivalTime": "01:17",
    "price": 79719
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "NAG",
    "date": "2026-05-01",
    "departureTime": "01:39",
    "arrivalTime": "10:12",
    "price": 42358
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "GAU",
    "date": "2026-05-12",
    "departureTime": "03:27",
    "arrivalTime": "13:23",
    "price": 102050
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "JFK",
    "date": "2026-05-26",
    "departureTime": "16:53",
    "arrivalTime": "23:58",
    "price": 61569
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "PEK",
    "date": "2026-05-06",
    "departureTime": "14:48",
    "arrivalTime": "18:08",
    "price": 13315
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "GIG",
    "date": "2026-05-26",
    "departureTime": "00:48",
    "arrivalTime": "14:29",
    "price": 32389
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "CUN",
    "date": "2026-05-05",
    "departureTime": "12:36",
    "arrivalTime": "13:56",
    "price": 64327
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "CUN",
    "date": "2026-05-04",
    "departureTime": "20:15",
    "arrivalTime": "03:46",
    "price": 34509
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "JLR",
    "date": "2026-05-06",
    "departureTime": "21:00",
    "arrivalTime": "20:13",
    "price": 122607
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "IXR",
    "date": "2026-05-06",
    "departureTime": "23:26",
    "arrivalTime": "20:03",
    "price": 18986
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "CPT",
    "date": "2026-05-04",
    "departureTime": "18:01",
    "arrivalTime": "02:48",
    "price": 110289
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "ARN",
    "date": "2026-05-12",
    "departureTime": "19:15",
    "arrivalTime": "23:36",
    "price": 43686
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "HKG",
    "date": "2026-05-04",
    "departureTime": "11:20",
    "arrivalTime": "20:00",
    "price": 132306
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "COK",
    "date": "2026-05-18",
    "departureTime": "17:05",
    "arrivalTime": "18:54",
    "price": 118790
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "IAH",
    "date": "2026-05-01",
    "departureTime": "04:53",
    "arrivalTime": "01:45",
    "price": 77602
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "BOS",
    "date": "2026-05-23",
    "departureTime": "14:39",
    "arrivalTime": "12:49",
    "price": 129489
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "JDH",
    "date": "2026-05-09",
    "departureTime": "11:07",
    "arrivalTime": "15:07",
    "price": 18760
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "ATH",
    "date": "2026-05-11",
    "departureTime": "12:26",
    "arrivalTime": "16:10",
    "price": 40726
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "BRU",
    "date": "2026-05-26",
    "departureTime": "19:07",
    "arrivalTime": "11:19",
    "price": 128617
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "OSL",
    "date": "2026-05-27",
    "departureTime": "09:16",
    "arrivalTime": "09:03",
    "price": 136953
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "MUC",
    "date": "2026-05-18",
    "departureTime": "23:09",
    "arrivalTime": "06:28",
    "price": 20480
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "PNQ",
    "date": "2026-05-13",
    "departureTime": "01:25",
    "arrivalTime": "03:29",
    "price": 21393
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "JED",
    "date": "2026-05-11",
    "departureTime": "15:00",
    "arrivalTime": "21:50",
    "price": 49824
  }
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

    console.log('🎉 Seeding complete!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error during seeding:', err);
    process.exit(1);
  }
}

seedDB();
