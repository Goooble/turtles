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
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "NBO",
    "date": "2026-05-10",
    "departureTime": "20:38",
    "arrivalTime": "10:20",
    "price": 107647
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "GAU",
    "date": "2026-05-29",
    "departureTime": "19:51",
    "arrivalTime": "18:33",
    "price": 43131
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "EZE",
    "date": "2026-05-11",
    "departureTime": "23:30",
    "arrivalTime": "20:18",
    "price": 65393
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "IST",
    "date": "2026-05-17",
    "departureTime": "23:29",
    "arrivalTime": "06:02",
    "price": 121490
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "SCL",
    "date": "2026-05-11",
    "departureTime": "13:56",
    "arrivalTime": "03:28",
    "price": 128849
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "DTW",
    "date": "2026-05-08",
    "departureTime": "04:00",
    "arrivalTime": "17:13",
    "price": 38749
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "MAA",
    "date": "2026-05-03",
    "departureTime": "08:13",
    "arrivalTime": "14:08",
    "price": 20343
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "YVR",
    "date": "2026-05-14",
    "departureTime": "03:04",
    "arrivalTime": "17:09",
    "price": 69640
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "CAI",
    "date": "2026-05-27",
    "departureTime": "20:43",
    "arrivalTime": "09:04",
    "price": 147878
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "VIE",
    "date": "2026-05-30",
    "departureTime": "04:25",
    "arrivalTime": "07:55",
    "price": 137427
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "BUD",
    "date": "2026-05-03",
    "departureTime": "08:05",
    "arrivalTime": "11:30",
    "price": 143325
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "COK",
    "date": "2026-05-19",
    "departureTime": "21:51",
    "arrivalTime": "11:14",
    "price": 119644
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "BHO",
    "date": "2026-05-14",
    "departureTime": "22:05",
    "arrivalTime": "06:25",
    "price": 22091
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "DEN",
    "date": "2026-05-04",
    "departureTime": "05:53",
    "arrivalTime": "16:23",
    "price": 102244
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "PTY",
    "date": "2026-05-21",
    "departureTime": "01:17",
    "arrivalTime": "00:46",
    "price": 127910
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "IXR",
    "date": "2026-05-27",
    "departureTime": "02:43",
    "arrivalTime": "16:37",
    "price": 100977
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "FRA",
    "date": "2026-05-11",
    "departureTime": "20:18",
    "arrivalTime": "19:23",
    "price": 72138
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "SEA",
    "date": "2026-05-13",
    "departureTime": "01:50",
    "arrivalTime": "10:56",
    "price": 131018
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "YVR",
    "date": "2026-05-30",
    "departureTime": "17:02",
    "arrivalTime": "05:04",
    "price": 123101
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "IAD",
    "date": "2026-05-27",
    "departureTime": "03:16",
    "arrivalTime": "04:19",
    "price": 44159
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "GAU",
    "date": "2026-05-13",
    "departureTime": "04:50",
    "arrivalTime": "05:29",
    "price": 133529
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "SYD",
    "date": "2026-05-19",
    "departureTime": "07:36",
    "arrivalTime": "07:33",
    "price": 44868
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "IAH",
    "date": "2026-05-10",
    "departureTime": "23:21",
    "arrivalTime": "16:20",
    "price": 79354
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "WAW",
    "date": "2026-05-09",
    "departureTime": "15:51",
    "arrivalTime": "06:11",
    "price": 88363
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "AMM",
    "date": "2026-05-08",
    "departureTime": "10:06",
    "arrivalTime": "05:51",
    "price": 60185
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "SVO",
    "date": "2026-05-26",
    "departureTime": "10:52",
    "arrivalTime": "06:15",
    "price": 123370
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "JLR",
    "date": "2026-05-20",
    "departureTime": "22:39",
    "arrivalTime": "12:58",
    "price": 86306
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "JNB",
    "date": "2026-05-26",
    "departureTime": "00:12",
    "arrivalTime": "07:40",
    "price": 144883
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "AUH",
    "date": "2026-05-02",
    "departureTime": "20:46",
    "arrivalTime": "02:16",
    "price": 40808
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "ATH",
    "date": "2026-05-05",
    "departureTime": "07:21",
    "arrivalTime": "00:53",
    "price": 68645
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "DSS",
    "date": "2026-05-30",
    "departureTime": "11:06",
    "arrivalTime": "06:27",
    "price": 113891
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "BBI",
    "date": "2026-05-15",
    "departureTime": "14:19",
    "arrivalTime": "19:56",
    "price": 66206
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "HYD",
    "date": "2026-05-18",
    "departureTime": "07:27",
    "arrivalTime": "16:22",
    "price": 92562
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "BHO",
    "date": "2026-05-29",
    "departureTime": "23:41",
    "arrivalTime": "13:16",
    "price": 96674
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "CMN",
    "date": "2026-05-26",
    "departureTime": "05:55",
    "arrivalTime": "18:01",
    "price": 28582
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "BOG",
    "date": "2026-05-19",
    "departureTime": "16:58",
    "arrivalTime": "16:28",
    "price": 95872
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "JFK",
    "date": "2026-05-17",
    "departureTime": "23:42",
    "arrivalTime": "13:25",
    "price": 134408
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "LHR",
    "date": "2026-05-24",
    "departureTime": "20:17",
    "arrivalTime": "13:11",
    "price": 8501
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "GRU",
    "date": "2026-05-14",
    "departureTime": "02:44",
    "arrivalTime": "08:13",
    "price": 69592
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "DFW",
    "date": "2026-05-13",
    "departureTime": "14:02",
    "arrivalTime": "01:57",
    "price": 52312
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "IDR",
    "date": "2026-05-04",
    "departureTime": "03:24",
    "arrivalTime": "06:49",
    "price": 105805
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "UDR",
    "date": "2026-05-30",
    "departureTime": "14:14",
    "arrivalTime": "23:50",
    "price": 135710
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "IXB",
    "date": "2026-05-11",
    "departureTime": "12:14",
    "arrivalTime": "23:23",
    "price": 84560
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "OPO",
    "date": "2026-05-15",
    "departureTime": "19:16",
    "arrivalTime": "08:47",
    "price": 37944
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "VTZ",
    "date": "2026-05-03",
    "departureTime": "15:15",
    "arrivalTime": "12:15",
    "price": 109855
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "NRT",
    "date": "2026-05-04",
    "departureTime": "15:36",
    "arrivalTime": "22:38",
    "price": 87048
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "PEK",
    "date": "2026-05-30",
    "departureTime": "09:40",
    "arrivalTime": "18:29",
    "price": 108645
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "PEK",
    "date": "2026-05-03",
    "departureTime": "16:59",
    "arrivalTime": "04:09",
    "price": 20953
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "DSS",
    "date": "2026-05-16",
    "departureTime": "23:02",
    "arrivalTime": "20:42",
    "price": 131017
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "HYD",
    "date": "2026-05-26",
    "departureTime": "02:01",
    "arrivalTime": "21:31",
    "price": 62178
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "BOG",
    "date": "2026-05-25",
    "departureTime": "19:27",
    "arrivalTime": "19:39",
    "price": 64733
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "MNL",
    "date": "2026-05-23",
    "departureTime": "23:45",
    "arrivalTime": "08:38",
    "price": 117974
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "ATQ",
    "date": "2026-05-18",
    "departureTime": "17:52",
    "arrivalTime": "14:01",
    "price": 30675
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "BBI",
    "date": "2026-05-17",
    "departureTime": "06:29",
    "arrivalTime": "06:10",
    "price": 52676
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "DFW",
    "date": "2026-05-23",
    "departureTime": "11:42",
    "arrivalTime": "13:28",
    "price": 144450
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "IXC",
    "date": "2026-05-08",
    "departureTime": "06:08",
    "arrivalTime": "04:11",
    "price": 47083
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "RPR",
    "date": "2026-05-19",
    "departureTime": "15:36",
    "arrivalTime": "10:32",
    "price": 101470
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "AMS",
    "date": "2026-05-03",
    "departureTime": "23:16",
    "arrivalTime": "19:06",
    "price": 18436
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "BNE",
    "date": "2026-05-14",
    "departureTime": "13:26",
    "arrivalTime": "13:20",
    "price": 108423
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "SIN",
    "date": "2026-05-06",
    "departureTime": "00:05",
    "arrivalTime": "21:36",
    "price": 89373
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "LIM",
    "date": "2026-05-11",
    "departureTime": "19:42",
    "arrivalTime": "03:55",
    "price": 47451
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "PRG",
    "date": "2026-05-24",
    "departureTime": "01:12",
    "arrivalTime": "17:49",
    "price": 11924
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "CDG",
    "date": "2026-05-17",
    "departureTime": "18:53",
    "arrivalTime": "20:21",
    "price": 64635
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "BBI",
    "date": "2026-05-07",
    "departureTime": "21:34",
    "arrivalTime": "12:21",
    "price": 86363
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "CDG",
    "date": "2026-05-29",
    "departureTime": "08:19",
    "arrivalTime": "01:07",
    "price": 46878
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "LIS",
    "date": "2026-05-04",
    "departureTime": "10:31",
    "arrivalTime": "05:41",
    "price": 26255
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "BAH",
    "date": "2026-05-05",
    "departureTime": "17:36",
    "arrivalTime": "08:09",
    "price": 107763
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "BKK",
    "date": "2026-05-08",
    "departureTime": "12:21",
    "arrivalTime": "13:42",
    "price": 145848
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "MXP",
    "date": "2026-05-22",
    "departureTime": "22:56",
    "arrivalTime": "15:30",
    "price": 14201
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "BAH",
    "date": "2026-05-25",
    "departureTime": "18:45",
    "arrivalTime": "06:59",
    "price": 34705
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "IAD",
    "date": "2026-05-23",
    "departureTime": "17:49",
    "arrivalTime": "05:44",
    "price": 140177
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "PTY",
    "date": "2026-05-03",
    "departureTime": "21:23",
    "arrivalTime": "13:39",
    "price": 107799
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "DTW",
    "date": "2026-05-23",
    "departureTime": "19:58",
    "arrivalTime": "01:38",
    "price": 129560
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "IST",
    "date": "2026-05-04",
    "departureTime": "22:02",
    "arrivalTime": "15:27",
    "price": 121711
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "WAW",
    "date": "2026-05-16",
    "departureTime": "15:41",
    "arrivalTime": "17:14",
    "price": 41119
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "SYD",
    "date": "2026-05-19",
    "departureTime": "08:34",
    "arrivalTime": "07:28",
    "price": 90768
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "GAU",
    "date": "2026-05-26",
    "departureTime": "12:28",
    "arrivalTime": "09:13",
    "price": 50794
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "GVA",
    "date": "2026-05-09",
    "departureTime": "16:16",
    "arrivalTime": "22:53",
    "price": 135729
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "GVA",
    "date": "2026-05-21",
    "departureTime": "18:20",
    "arrivalTime": "12:52",
    "price": 48002
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "JAI",
    "date": "2026-05-22",
    "departureTime": "11:18",
    "arrivalTime": "12:55",
    "price": 42411
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "AMS",
    "date": "2026-05-08",
    "departureTime": "19:37",
    "arrivalTime": "21:17",
    "price": 77579
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "CAI",
    "date": "2026-05-02",
    "departureTime": "11:18",
    "arrivalTime": "14:54",
    "price": 123114
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "VIE",
    "date": "2026-05-25",
    "departureTime": "15:32",
    "arrivalTime": "23:50",
    "price": 21266
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "JNB",
    "date": "2026-05-23",
    "departureTime": "00:47",
    "arrivalTime": "05:33",
    "price": 85765
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "PHL",
    "date": "2026-05-10",
    "departureTime": "04:54",
    "arrivalTime": "05:19",
    "price": 130174
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "YYZ",
    "date": "2026-05-06",
    "departureTime": "16:39",
    "arrivalTime": "00:31",
    "price": 22596
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "JNB",
    "date": "2026-05-11",
    "departureTime": "09:42",
    "arrivalTime": "03:11",
    "price": 8701
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "BNE",
    "date": "2026-05-20",
    "departureTime": "20:08",
    "arrivalTime": "10:43",
    "price": 143916
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "ICN",
    "date": "2026-05-09",
    "departureTime": "14:09",
    "arrivalTime": "08:46",
    "price": 94753
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "JFK",
    "date": "2026-05-13",
    "departureTime": "19:30",
    "arrivalTime": "05:45",
    "price": 35518
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "VTZ",
    "date": "2026-05-10",
    "departureTime": "06:25",
    "arrivalTime": "23:25",
    "price": 13492
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "TLV",
    "date": "2026-05-23",
    "departureTime": "22:37",
    "arrivalTime": "13:42",
    "price": 54523
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "AMS",
    "date": "2026-05-10",
    "departureTime": "22:44",
    "arrivalTime": "09:47",
    "price": 20365
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "YVR",
    "date": "2026-05-03",
    "departureTime": "19:07",
    "arrivalTime": "20:13",
    "price": 56596
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "DTW",
    "date": "2026-05-15",
    "departureTime": "02:43",
    "arrivalTime": "08:05",
    "price": 57507
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "OPO",
    "date": "2026-05-05",
    "departureTime": "23:11",
    "arrivalTime": "09:37",
    "price": 134430
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "TRV",
    "date": "2026-05-01",
    "departureTime": "15:51",
    "arrivalTime": "16:34",
    "price": 73768
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "CPH",
    "date": "2026-05-13",
    "departureTime": "01:18",
    "arrivalTime": "19:40",
    "price": 115492
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "MXP",
    "date": "2026-05-09",
    "departureTime": "21:18",
    "arrivalTime": "23:32",
    "price": 70122
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "EWR",
    "date": "2026-05-07",
    "departureTime": "16:29",
    "arrivalTime": "19:43",
    "price": 67463
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "BKK",
    "date": "2026-05-01",
    "departureTime": "12:27",
    "arrivalTime": "22:52",
    "price": 67019
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "VIE",
    "date": "2026-05-04",
    "departureTime": "01:03",
    "arrivalTime": "15:30",
    "price": 112693
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "ICN",
    "date": "2026-05-02",
    "departureTime": "00:07",
    "arrivalTime": "02:16",
    "price": 109954
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "YYZ",
    "date": "2026-05-14",
    "departureTime": "05:07",
    "arrivalTime": "11:11",
    "price": 13156
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "DTW",
    "date": "2026-05-20",
    "departureTime": "05:02",
    "arrivalTime": "20:59",
    "price": 88984
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "IXB",
    "date": "2026-05-25",
    "departureTime": "17:12",
    "arrivalTime": "02:02",
    "price": 38470
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "AMS",
    "date": "2026-05-21",
    "departureTime": "20:23",
    "arrivalTime": "03:10",
    "price": 95883
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "ARN",
    "date": "2026-05-24",
    "departureTime": "23:50",
    "arrivalTime": "13:44",
    "price": 78577
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "CPT",
    "date": "2026-05-13",
    "departureTime": "14:24",
    "arrivalTime": "10:40",
    "price": 12858
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "OSL",
    "date": "2026-05-03",
    "departureTime": "07:38",
    "arrivalTime": "04:21",
    "price": 130822
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "IST",
    "date": "2026-05-29",
    "departureTime": "09:49",
    "arrivalTime": "01:37",
    "price": 52331
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "VNS",
    "date": "2026-05-09",
    "departureTime": "06:33",
    "arrivalTime": "11:32",
    "price": 131019
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "VTZ",
    "date": "2026-05-23",
    "departureTime": "20:27",
    "arrivalTime": "05:22",
    "price": 19377
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "TRV",
    "date": "2026-05-21",
    "departureTime": "02:01",
    "arrivalTime": "14:12",
    "price": 12702
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "IAH",
    "date": "2026-05-03",
    "departureTime": "18:33",
    "arrivalTime": "09:27",
    "price": 71721
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "GVA",
    "date": "2026-05-11",
    "departureTime": "23:02",
    "arrivalTime": "07:37",
    "price": 134806
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "ADD",
    "date": "2026-05-09",
    "departureTime": "23:29",
    "arrivalTime": "18:29",
    "price": 33863
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "KTM",
    "date": "2026-05-27",
    "departureTime": "15:32",
    "arrivalTime": "10:37",
    "price": 49395
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "IXR",
    "date": "2026-05-10",
    "departureTime": "11:42",
    "arrivalTime": "10:21",
    "price": 32662
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "EWR",
    "date": "2026-05-28",
    "departureTime": "11:34",
    "arrivalTime": "02:30",
    "price": 110297
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "MIA",
    "date": "2026-05-03",
    "departureTime": "00:12",
    "arrivalTime": "22:14",
    "price": 141505
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "IAH",
    "date": "2026-05-15",
    "departureTime": "21:53",
    "arrivalTime": "10:00",
    "price": 96490
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "WAW",
    "date": "2026-05-02",
    "departureTime": "18:20",
    "arrivalTime": "12:34",
    "price": 45105
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "TRV",
    "date": "2026-05-23",
    "departureTime": "22:34",
    "arrivalTime": "00:39",
    "price": 80966
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "SEA",
    "date": "2026-05-09",
    "departureTime": "04:13",
    "arrivalTime": "09:13",
    "price": 129315
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "GVA",
    "date": "2026-05-05",
    "departureTime": "23:15",
    "arrivalTime": "00:50",
    "price": 126989
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "AUH",
    "date": "2026-05-03",
    "departureTime": "16:55",
    "arrivalTime": "13:58",
    "price": 39622
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "PVG",
    "date": "2026-05-12",
    "departureTime": "09:12",
    "arrivalTime": "00:45",
    "price": 29695
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "PRG",
    "date": "2026-05-29",
    "departureTime": "16:49",
    "arrivalTime": "08:18",
    "price": 133795
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "DUB",
    "date": "2026-05-03",
    "departureTime": "21:00",
    "arrivalTime": "21:35",
    "price": 122475
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "DEN",
    "date": "2026-05-20",
    "departureTime": "23:10",
    "arrivalTime": "19:50",
    "price": 69347
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "MCT",
    "date": "2026-05-03",
    "departureTime": "17:34",
    "arrivalTime": "02:36",
    "price": 53937
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "MNL",
    "date": "2026-05-20",
    "departureTime": "04:40",
    "arrivalTime": "00:30",
    "price": 39696
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "JDH",
    "date": "2026-05-08",
    "departureTime": "15:36",
    "arrivalTime": "00:21",
    "price": 70498
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "ORD",
    "date": "2026-05-07",
    "departureTime": "07:41",
    "arrivalTime": "16:46",
    "price": 143163
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "PVG",
    "date": "2026-05-10",
    "departureTime": "20:09",
    "arrivalTime": "06:08",
    "price": 122958
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "SIN",
    "date": "2026-05-09",
    "departureTime": "20:43",
    "arrivalTime": "11:04",
    "price": 19786
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "CPH",
    "date": "2026-05-11",
    "departureTime": "02:02",
    "arrivalTime": "23:22",
    "price": 33194
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "MNL",
    "date": "2026-05-14",
    "departureTime": "20:16",
    "arrivalTime": "04:01",
    "price": 48014
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "MEX",
    "date": "2026-05-11",
    "departureTime": "10:33",
    "arrivalTime": "07:44",
    "price": 121893
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "AMS",
    "date": "2026-05-17",
    "departureTime": "05:13",
    "arrivalTime": "04:40",
    "price": 16697
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "YVR",
    "date": "2026-05-19",
    "departureTime": "16:54",
    "arrivalTime": "14:20",
    "price": 98338
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "PRG",
    "date": "2026-05-29",
    "departureTime": "12:17",
    "arrivalTime": "17:02",
    "price": 17381
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "DXB",
    "date": "2026-05-10",
    "departureTime": "14:13",
    "arrivalTime": "15:37",
    "price": 115545
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "IAD",
    "date": "2026-05-10",
    "departureTime": "23:32",
    "arrivalTime": "05:01",
    "price": 59309
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "MXP",
    "date": "2026-05-27",
    "departureTime": "10:39",
    "arrivalTime": "16:05",
    "price": 56339
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "RPR",
    "date": "2026-05-04",
    "departureTime": "01:27",
    "arrivalTime": "04:23",
    "price": 104088
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "SEA",
    "date": "2026-05-03",
    "departureTime": "23:05",
    "arrivalTime": "17:26",
    "price": 66400
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "KTM",
    "date": "2026-05-04",
    "departureTime": "02:14",
    "arrivalTime": "02:04",
    "price": 113512
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "JDH",
    "date": "2026-05-16",
    "departureTime": "20:00",
    "arrivalTime": "17:28",
    "price": 73347
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "PVG",
    "date": "2026-05-26",
    "departureTime": "04:50",
    "arrivalTime": "14:07",
    "price": 75620
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "DUB",
    "date": "2026-05-09",
    "departureTime": "05:14",
    "arrivalTime": "04:28",
    "price": 35454
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "NAG",
    "date": "2026-05-01",
    "departureTime": "07:49",
    "arrivalTime": "07:04",
    "price": 143385
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "ARN",
    "date": "2026-05-01",
    "departureTime": "23:55",
    "arrivalTime": "18:42",
    "price": 113138
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "MIA",
    "date": "2026-05-27",
    "departureTime": "05:07",
    "arrivalTime": "02:27",
    "price": 63245
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "IAD",
    "date": "2026-05-08",
    "departureTime": "12:06",
    "arrivalTime": "05:27",
    "price": 53089
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "FCO",
    "date": "2026-05-16",
    "departureTime": "09:03",
    "arrivalTime": "13:46",
    "price": 78761
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "GRU",
    "date": "2026-05-25",
    "departureTime": "00:21",
    "arrivalTime": "20:30",
    "price": 126357
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "CMN",
    "date": "2026-05-08",
    "departureTime": "00:35",
    "arrivalTime": "21:28",
    "price": 130752
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "AMM",
    "date": "2026-05-27",
    "departureTime": "20:01",
    "arrivalTime": "08:58",
    "price": 66316
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "JDH",
    "date": "2026-05-05",
    "departureTime": "02:42",
    "arrivalTime": "21:17",
    "price": 69238
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "SIN",
    "date": "2026-05-07",
    "departureTime": "15:05",
    "arrivalTime": "16:16",
    "price": 121580
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "PNQ",
    "date": "2026-05-07",
    "departureTime": "04:00",
    "arrivalTime": "06:21",
    "price": 109663
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "PNQ",
    "date": "2026-05-07",
    "departureTime": "04:27",
    "arrivalTime": "21:08",
    "price": 4379
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "SFO",
    "date": "2026-05-22",
    "departureTime": "10:13",
    "arrivalTime": "20:35",
    "price": 119802
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "JFK",
    "date": "2026-05-18",
    "departureTime": "19:00",
    "arrivalTime": "12:05",
    "price": 20995
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "HEL",
    "date": "2026-05-07",
    "departureTime": "01:28",
    "arrivalTime": "19:40",
    "price": 29551
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "JLR",
    "date": "2026-05-10",
    "departureTime": "01:48",
    "arrivalTime": "14:03",
    "price": 35195
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "CPT",
    "date": "2026-05-02",
    "departureTime": "11:28",
    "arrivalTime": "16:10",
    "price": 6605
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "DMM",
    "date": "2026-05-27",
    "departureTime": "04:13",
    "arrivalTime": "06:22",
    "price": 48921
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "AMS",
    "date": "2026-05-03",
    "departureTime": "10:13",
    "arrivalTime": "03:39",
    "price": 11557
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "TLV",
    "date": "2026-05-26",
    "departureTime": "14:19",
    "arrivalTime": "13:52",
    "price": 108511
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "OTP",
    "date": "2026-05-16",
    "departureTime": "12:24",
    "arrivalTime": "19:22",
    "price": 126736
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "GVA",
    "date": "2026-05-04",
    "departureTime": "17:57",
    "arrivalTime": "22:27",
    "price": 102532
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "BOS",
    "date": "2026-05-05",
    "departureTime": "12:53",
    "arrivalTime": "12:21",
    "price": 121197
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "JAI",
    "date": "2026-05-01",
    "departureTime": "12:48",
    "arrivalTime": "10:37",
    "price": 44740
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "ATQ",
    "date": "2026-05-10",
    "departureTime": "07:27",
    "arrivalTime": "22:29",
    "price": 79609
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "JDH",
    "date": "2026-05-02",
    "departureTime": "19:02",
    "arrivalTime": "04:23",
    "price": 140338
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "JDH",
    "date": "2026-05-24",
    "departureTime": "19:13",
    "arrivalTime": "15:59",
    "price": 16599
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "ZRH",
    "date": "2026-05-03",
    "departureTime": "04:51",
    "arrivalTime": "19:43",
    "price": 6641
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "MAA",
    "date": "2026-05-09",
    "departureTime": "17:58",
    "arrivalTime": "15:52",
    "price": 63455
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "DEN",
    "date": "2026-05-17",
    "departureTime": "19:40",
    "arrivalTime": "21:48",
    "price": 93247
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "DEL",
    "date": "2026-05-17",
    "departureTime": "18:31",
    "arrivalTime": "01:32",
    "price": 25933
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "LIM",
    "date": "2026-05-06",
    "departureTime": "12:43",
    "arrivalTime": "05:31",
    "price": 46382
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "MUC",
    "date": "2026-05-10",
    "departureTime": "11:36",
    "arrivalTime": "10:13",
    "price": 8625
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "BOS",
    "date": "2026-05-19",
    "departureTime": "21:30",
    "arrivalTime": "20:19",
    "price": 93861
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "KUL",
    "date": "2026-05-28",
    "departureTime": "05:38",
    "arrivalTime": "18:27",
    "price": 63906
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "EWR",
    "date": "2026-05-08",
    "departureTime": "14:02",
    "arrivalTime": "08:03",
    "price": 121507
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "HEL",
    "date": "2026-05-11",
    "departureTime": "19:44",
    "arrivalTime": "01:09",
    "price": 111893
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "DMM",
    "date": "2026-05-08",
    "departureTime": "09:56",
    "arrivalTime": "21:31",
    "price": 87057
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "OTP",
    "date": "2026-05-10",
    "departureTime": "16:46",
    "arrivalTime": "16:19",
    "price": 38592
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "KTM",
    "date": "2026-05-28",
    "departureTime": "13:39",
    "arrivalTime": "07:26",
    "price": 136052
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "LIM",
    "date": "2026-05-02",
    "departureTime": "03:46",
    "arrivalTime": "16:07",
    "price": 55682
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "SEA",
    "date": "2026-05-18",
    "departureTime": "12:34",
    "arrivalTime": "13:34",
    "price": 44108
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "BLR",
    "date": "2026-05-11",
    "departureTime": "16:44",
    "arrivalTime": "06:10",
    "price": 113203
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "AMS",
    "date": "2026-05-11",
    "departureTime": "18:05",
    "arrivalTime": "09:58",
    "price": 138097
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "BRU",
    "date": "2026-05-04",
    "departureTime": "07:04",
    "arrivalTime": "21:03",
    "price": 55965
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "BRU",
    "date": "2026-05-06",
    "departureTime": "18:25",
    "arrivalTime": "13:57",
    "price": 51270
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "TPE",
    "date": "2026-05-22",
    "departureTime": "10:55",
    "arrivalTime": "03:53",
    "price": 136692
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "UDR",
    "date": "2026-05-27",
    "departureTime": "16:54",
    "arrivalTime": "05:57",
    "price": 135885
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
