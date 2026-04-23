import 'dotenv/config';
import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  airline: String,
  from: String,
  to: String,
  date: String,
  departureTime: String,
  arrivalTime: String,
  prices: {
    economy: Number,
    economyPlus: Number,
    business: Number
  }
});

const bookingSchema = new mongoose.Schema({
  flightId: String,
  userId: String,
  flightClass: String,
  pricePaid: Number,
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
    "to": "TRV",
    "date": "2026-05-18",
    "departureTime": "12:42",
    "arrivalTime": "06:41",
    "prices": {
      "economy": 7761,
      "economyPlus": 11641,
      "business": 27163
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "CAI",
    "date": "2026-05-21",
    "departureTime": "18:59",
    "arrivalTime": "05:34",
    "prices": {
      "economy": 23214,
      "economyPlus": 34821,
      "business": 81249
    }
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "CPH",
    "date": "2026-05-11",
    "departureTime": "04:27",
    "arrivalTime": "09:22",
    "prices": {
      "economy": 33565,
      "economyPlus": 50347,
      "business": 117477
    }
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "LIM",
    "date": "2026-05-21",
    "departureTime": "20:43",
    "arrivalTime": "13:36",
    "prices": {
      "economy": 85056,
      "economyPlus": 127584,
      "business": 297696
    }
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "NAG",
    "date": "2026-05-24",
    "departureTime": "21:19",
    "arrivalTime": "22:01",
    "prices": {
      "economy": 4940,
      "economyPlus": 7410,
      "business": 17290
    }
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "AMS",
    "date": "2026-05-19",
    "departureTime": "12:35",
    "arrivalTime": "05:43",
    "prices": {
      "economy": 35804,
      "economyPlus": 53706,
      "business": 125314
    }
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "JFK",
    "date": "2026-05-15",
    "departureTime": "02:37",
    "arrivalTime": "08:51",
    "prices": {
      "economy": 64169,
      "economyPlus": 96253,
      "business": 224591
    }
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "YVR",
    "date": "2026-05-03",
    "departureTime": "02:34",
    "arrivalTime": "05:50",
    "prices": {
      "economy": 62795,
      "economyPlus": 94192,
      "business": 219782
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "BRU",
    "date": "2026-05-07",
    "departureTime": "09:12",
    "arrivalTime": "22:54",
    "prices": {
      "economy": 35838,
      "economyPlus": 53757,
      "business": 125433
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "MIA",
    "date": "2026-05-23",
    "departureTime": "00:30",
    "arrivalTime": "15:22",
    "prices": {
      "economy": 72720,
      "economyPlus": 109080,
      "business": 254520
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "MEX",
    "date": "2026-05-03",
    "departureTime": "00:56",
    "arrivalTime": "09:25",
    "prices": {
      "economy": 79718,
      "economyPlus": 119577,
      "business": 279013
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "GOI",
    "date": "2026-05-21",
    "departureTime": "03:43",
    "arrivalTime": "20:19",
    "prices": {
      "economy": 3614,
      "economyPlus": 5421,
      "business": 12649
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "IDR",
    "date": "2026-05-21",
    "departureTime": "01:45",
    "arrivalTime": "09:32",
    "prices": {
      "economy": 4049,
      "economyPlus": 6073,
      "business": 14171
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "CAI",
    "date": "2026-05-13",
    "departureTime": "13:07",
    "arrivalTime": "16:42",
    "prices": {
      "economy": 23214,
      "economyPlus": 34821,
      "business": 81249
    }
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "RPR",
    "date": "2026-05-06",
    "departureTime": "18:34",
    "arrivalTime": "15:17",
    "prices": {
      "economy": 6224,
      "economyPlus": 9336,
      "business": 21784
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "NBO",
    "date": "2026-05-19",
    "departureTime": "03:49",
    "arrivalTime": "18:39",
    "prices": {
      "economy": 24166,
      "economyPlus": 36249,
      "business": 84581
    }
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "GRU",
    "date": "2026-05-30",
    "departureTime": "02:04",
    "arrivalTime": "10:46",
    "prices": {
      "economy": 70280,
      "economyPlus": 105420,
      "business": 245980
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "JAI",
    "date": "2026-05-06",
    "departureTime": "11:51",
    "arrivalTime": "18:25",
    "prices": {
      "economy": 6103,
      "economyPlus": 9154,
      "business": 21360
    }
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "HKG",
    "date": "2026-05-27",
    "departureTime": "22:47",
    "arrivalTime": "13:08",
    "prices": {
      "economy": 22855,
      "economyPlus": 34282,
      "business": 79992
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "BHO",
    "date": "2026-05-19",
    "departureTime": "23:59",
    "arrivalTime": "15:30",
    "prices": {
      "economy": 4806,
      "economyPlus": 7209,
      "business": 16821
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "MCT",
    "date": "2026-05-17",
    "departureTime": "11:02",
    "arrivalTime": "17:40",
    "prices": {
      "economy": 9458,
      "economyPlus": 14187,
      "business": 33103
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "ORD",
    "date": "2026-05-01",
    "departureTime": "17:16",
    "arrivalTime": "13:26",
    "prices": {
      "economy": 66224,
      "economyPlus": 99336,
      "business": 231784
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "PHL",
    "date": "2026-05-17",
    "departureTime": "03:01",
    "arrivalTime": "10:41",
    "prices": {
      "economy": 64869,
      "economyPlus": 97303,
      "business": 227041
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "FRA",
    "date": "2026-05-11",
    "departureTime": "14:38",
    "arrivalTime": "20:56",
    "prices": {
      "economy": 34353,
      "economyPlus": 51529,
      "business": 120235
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "CMB",
    "date": "2026-05-24",
    "departureTime": "06:52",
    "arrivalTime": "05:55",
    "prices": {
      "economy": 9120,
      "economyPlus": 13680,
      "business": 31920
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "AMM",
    "date": "2026-05-01",
    "departureTime": "04:14",
    "arrivalTime": "14:47",
    "prices": {
      "economy": 21197,
      "economyPlus": 31795,
      "business": 74189
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "CMN",
    "date": "2026-05-08",
    "departureTime": "07:11",
    "arrivalTime": "17:56",
    "prices": {
      "economy": 41481,
      "economyPlus": 62221,
      "business": 145183
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "MCO",
    "date": "2026-05-01",
    "departureTime": "12:01",
    "arrivalTime": "15:09",
    "prices": {
      "economy": 71741,
      "economyPlus": 107611,
      "business": 251093
    }
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "ORD",
    "date": "2026-05-02",
    "departureTime": "16:06",
    "arrivalTime": "07:24",
    "prices": {
      "economy": 66224,
      "economyPlus": 99336,
      "business": 231784
    }
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "RUH",
    "date": "2026-05-27",
    "departureTime": "19:29",
    "arrivalTime": "00:50",
    "prices": {
      "economy": 15359,
      "economyPlus": 23038,
      "business": 53756
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "CUN",
    "date": "2026-05-16",
    "departureTime": "09:16",
    "arrivalTime": "16:51",
    "prices": {
      "economy": 76699,
      "economyPlus": 115048,
      "business": 268446
    }
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "OSL",
    "date": "2026-05-16",
    "departureTime": "11:33",
    "arrivalTime": "00:04",
    "prices": {
      "economy": 34647,
      "economyPlus": 51970,
      "business": 121264
    }
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "LIS",
    "date": "2026-05-19",
    "departureTime": "23:37",
    "arrivalTime": "07:11",
    "prices": {
      "economy": 41595,
      "economyPlus": 62392,
      "business": 145582
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "DUB",
    "date": "2026-05-02",
    "departureTime": "07:02",
    "arrivalTime": "12:50",
    "prices": {
      "economy": 39509,
      "economyPlus": 59263,
      "business": 138281
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "CMN",
    "date": "2026-05-11",
    "departureTime": "00:33",
    "arrivalTime": "16:35",
    "prices": {
      "economy": 41481,
      "economyPlus": 62221,
      "business": 145183
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "BLR",
    "date": "2026-05-03",
    "departureTime": "23:16",
    "arrivalTime": "01:01",
    "prices": {
      "economy": 5726,
      "economyPlus": 8589,
      "business": 20041
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "AMM",
    "date": "2026-05-26",
    "departureTime": "12:38",
    "arrivalTime": "08:38",
    "prices": {
      "economy": 21197,
      "economyPlus": 31795,
      "business": 74189
    }
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "ATQ",
    "date": "2026-05-20",
    "departureTime": "02:35",
    "arrivalTime": "16:29",
    "prices": {
      "economy": 8553,
      "economyPlus": 12829,
      "business": 29935
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "CMB",
    "date": "2026-05-23",
    "departureTime": "17:15",
    "arrivalTime": "12:33",
    "prices": {
      "economy": 9120,
      "economyPlus": 13680,
      "business": 31920
    }
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "ORD",
    "date": "2026-05-17",
    "departureTime": "01:29",
    "arrivalTime": "05:56",
    "prices": {
      "economy": 66224,
      "economyPlus": 99336,
      "business": 231784
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "UDR",
    "date": "2026-05-15",
    "departureTime": "20:40",
    "arrivalTime": "07:42",
    "prices": {
      "economy": 4591,
      "economyPlus": 6886,
      "business": 16068
    }
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "IXB",
    "date": "2026-05-15",
    "departureTime": "11:13",
    "arrivalTime": "13:50",
    "prices": {
      "economy": 10457,
      "economyPlus": 15685,
      "business": 36599
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "BCN",
    "date": "2026-05-25",
    "departureTime": "12:44",
    "arrivalTime": "17:19",
    "prices": {
      "economy": 36695,
      "economyPlus": 55042,
      "business": 128432
    }
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "AMS",
    "date": "2026-05-16",
    "departureTime": "11:55",
    "arrivalTime": "15:19",
    "prices": {
      "economy": 35804,
      "economyPlus": 53706,
      "business": 125314
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "TLV",
    "date": "2026-05-15",
    "departureTime": "17:33",
    "arrivalTime": "10:38",
    "prices": {
      "economy": 21743,
      "economyPlus": 32614,
      "business": 76100
    }
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "PAT",
    "date": "2026-05-14",
    "departureTime": "14:07",
    "arrivalTime": "06:45",
    "prices": {
      "economy": 8766,
      "economyPlus": 13149,
      "business": 30681
    }
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "DSS",
    "date": "2026-05-22",
    "departureTime": "02:11",
    "arrivalTime": "00:15",
    "prices": {
      "economy": 48872,
      "economyPlus": 73308,
      "business": 171052
    }
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "SEA",
    "date": "2026-05-24",
    "departureTime": "21:38",
    "arrivalTime": "10:49",
    "prices": {
      "economy": 63817,
      "economyPlus": 95725,
      "business": 223359
    }
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "DFW",
    "date": "2026-05-10",
    "departureTime": "16:47",
    "arrivalTime": "21:49",
    "prices": {
      "economy": 72185,
      "economyPlus": 108277,
      "business": 252647
    }
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "NBO",
    "date": "2026-05-10",
    "departureTime": "00:12",
    "arrivalTime": "00:11",
    "prices": {
      "economy": 24166,
      "economyPlus": 36249,
      "business": 84581
    }
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "LIM",
    "date": "2026-05-28",
    "departureTime": "19:31",
    "arrivalTime": "02:31",
    "prices": {
      "economy": 85056,
      "economyPlus": 127584,
      "business": 297696
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "BAH",
    "date": "2026-05-26",
    "departureTime": "21:41",
    "arrivalTime": "18:34",
    "prices": {
      "economy": 13571,
      "economyPlus": 20356,
      "business": 47498
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "DTW",
    "date": "2026-05-16",
    "departureTime": "19:28",
    "arrivalTime": "22:13",
    "prices": {
      "economy": 72185,
      "economyPlus": 108277,
      "business": 252647
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "ATQ",
    "date": "2026-05-30",
    "departureTime": "00:48",
    "arrivalTime": "11:12",
    "prices": {
      "economy": 8553,
      "economyPlus": 12829,
      "business": 29935
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "GIG",
    "date": "2026-05-05",
    "departureTime": "06:09",
    "arrivalTime": "18:44",
    "prices": {
      "economy": 68599,
      "economyPlus": 102898,
      "business": 240096
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "GOI",
    "date": "2026-05-08",
    "departureTime": "18:37",
    "arrivalTime": "20:34",
    "prices": {
      "economy": 3614,
      "economyPlus": 5421,
      "business": 12649
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "DFW",
    "date": "2026-05-20",
    "departureTime": "00:59",
    "arrivalTime": "11:25",
    "prices": {
      "economy": 72185,
      "economyPlus": 108277,
      "business": 252647
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "ACC",
    "date": "2026-05-25",
    "departureTime": "06:12",
    "arrivalTime": "08:36",
    "prices": {
      "economy": 41623,
      "economyPlus": 62434,
      "business": 145680
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "GRU",
    "date": "2026-05-19",
    "departureTime": "21:46",
    "arrivalTime": "13:18",
    "prices": {
      "economy": 70280,
      "economyPlus": 105420,
      "business": 245980
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "ZRH",
    "date": "2026-05-12",
    "departureTime": "09:34",
    "arrivalTime": "16:21",
    "prices": {
      "economy": 34204,
      "economyPlus": 51306,
      "business": 119714
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "BNE",
    "date": "2026-05-09",
    "departureTime": "10:49",
    "arrivalTime": "14:50",
    "prices": {
      "economy": 51794,
      "economyPlus": 77691,
      "business": 181279
    }
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "JNB",
    "date": "2026-05-10",
    "departureTime": "01:24",
    "arrivalTime": "05:52",
    "prices": {
      "economy": 36319,
      "economyPlus": 54478,
      "business": 127116
    }
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "OTP",
    "date": "2026-05-03",
    "departureTime": "00:32",
    "arrivalTime": "05:59",
    "prices": {
      "economy": 27266,
      "economyPlus": 40899,
      "business": 95431
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "JDH",
    "date": "2026-05-13",
    "departureTime": "00:41",
    "arrivalTime": "01:39",
    "prices": {
      "economy": 5483,
      "economyPlus": 8224,
      "business": 19190
    }
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "DME",
    "date": "2026-05-29",
    "departureTime": "08:47",
    "arrivalTime": "11:31",
    "prices": {
      "economy": 26446,
      "economyPlus": 39669,
      "business": 92561
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "BHO",
    "date": "2026-05-07",
    "departureTime": "22:16",
    "arrivalTime": "19:31",
    "prices": {
      "economy": 4806,
      "economyPlus": 7209,
      "business": 16821
    }
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "CMB",
    "date": "2026-05-19",
    "departureTime": "13:48",
    "arrivalTime": "22:26",
    "prices": {
      "economy": 9120,
      "economyPlus": 13680,
      "business": 31920
    }
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "OPO",
    "date": "2026-05-15",
    "departureTime": "16:26",
    "arrivalTime": "07:29",
    "prices": {
      "economy": 41168,
      "economyPlus": 61752,
      "business": 144088
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "HEL",
    "date": "2026-05-29",
    "departureTime": "21:38",
    "arrivalTime": "13:09",
    "prices": {
      "economy": 33648,
      "economyPlus": 50472,
      "business": 117768
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "KUL",
    "date": "2026-05-10",
    "departureTime": "10:45",
    "arrivalTime": "07:54",
    "prices": {
      "economy": 19611,
      "economyPlus": 29416,
      "business": 68638
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "MEL",
    "date": "2026-05-10",
    "departureTime": "16:21",
    "arrivalTime": "15:54",
    "prices": {
      "economy": 50521,
      "economyPlus": 75781,
      "business": 176823
    }
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "AKL",
    "date": "2026-05-07",
    "departureTime": "04:23",
    "arrivalTime": "03:18",
    "prices": {
      "economy": 63011,
      "economyPlus": 94516,
      "business": 220538
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "VTZ",
    "date": "2026-05-17",
    "departureTime": "17:38",
    "arrivalTime": "21:19",
    "prices": {
      "economy": 7009,
      "economyPlus": 10513,
      "business": 24531
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "BNE",
    "date": "2026-05-02",
    "departureTime": "20:33",
    "arrivalTime": "21:59",
    "prices": {
      "economy": 51794,
      "economyPlus": 77691,
      "business": 181279
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "BRU",
    "date": "2026-05-27",
    "departureTime": "20:48",
    "arrivalTime": "13:39",
    "prices": {
      "economy": 35838,
      "economyPlus": 53757,
      "business": 125433
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "JLR",
    "date": "2026-05-28",
    "departureTime": "19:23",
    "arrivalTime": "00:52",
    "prices": {
      "economy": 5834,
      "economyPlus": 8751,
      "business": 20419
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "ACC",
    "date": "2026-05-07",
    "departureTime": "05:17",
    "arrivalTime": "17:52",
    "prices": {
      "economy": 41623,
      "economyPlus": 62434,
      "business": 145680
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "VNS",
    "date": "2026-05-25",
    "departureTime": "05:19",
    "arrivalTime": "23:18",
    "prices": {
      "economy": 7745,
      "economyPlus": 11617,
      "business": 27107
    }
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "OPO",
    "date": "2026-05-29",
    "departureTime": "21:03",
    "arrivalTime": "04:08",
    "prices": {
      "economy": 41168,
      "economyPlus": 61752,
      "business": 144088
    }
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "SCL",
    "date": "2026-05-25",
    "departureTime": "07:23",
    "arrivalTime": "01:13",
    "prices": {
      "economy": 81914,
      "economyPlus": 122871,
      "business": 286699
    }
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "CMN",
    "date": "2026-05-25",
    "departureTime": "20:30",
    "arrivalTime": "14:10",
    "prices": {
      "economy": 41481,
      "economyPlus": 62221,
      "business": 145183
    }
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "EZE",
    "date": "2026-05-25",
    "departureTime": "02:08",
    "arrivalTime": "04:58",
    "prices": {
      "economy": 76230,
      "economyPlus": 114345,
      "business": 266805
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "DTW",
    "date": "2026-05-17",
    "departureTime": "06:46",
    "arrivalTime": "02:32",
    "prices": {
      "economy": 72185,
      "economyPlus": 108277,
      "business": 252647
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "DSS",
    "date": "2026-05-30",
    "departureTime": "19:28",
    "arrivalTime": "16:59",
    "prices": {
      "economy": 48872,
      "economyPlus": 73308,
      "business": 171052
    }
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "IDR",
    "date": "2026-05-24",
    "departureTime": "03:45",
    "arrivalTime": "12:36",
    "prices": {
      "economy": 4049,
      "economyPlus": 6073,
      "business": 14171
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "DEL",
    "date": "2026-05-04",
    "departureTime": "11:47",
    "arrivalTime": "01:16",
    "prices": {
      "economy": 7266,
      "economyPlus": 10899,
      "business": 25431
    }
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "FRA",
    "date": "2026-05-24",
    "departureTime": "08:16",
    "arrivalTime": "23:23",
    "prices": {
      "economy": 34353,
      "economyPlus": 51529,
      "business": 120235
    }
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "IXB",
    "date": "2026-05-01",
    "departureTime": "23:30",
    "arrivalTime": "13:05",
    "prices": {
      "economy": 10457,
      "economyPlus": 15685,
      "business": 36599
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "ADD",
    "date": "2026-05-30",
    "departureTime": "07:23",
    "arrivalTime": "11:14",
    "prices": {
      "economy": 20677,
      "economyPlus": 31015,
      "business": 72369
    }
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "SYD",
    "date": "2026-05-14",
    "departureTime": "00:55",
    "arrivalTime": "16:26",
    "prices": {
      "economy": 69057,
      "economyPlus": 103585,
      "business": 241699
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "SCL",
    "date": "2026-05-22",
    "departureTime": "19:55",
    "arrivalTime": "21:14",
    "prices": {
      "economy": 81914,
      "economyPlus": 122871,
      "business": 286699
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "IXR",
    "date": "2026-05-04",
    "departureTime": "23:23",
    "arrivalTime": "03:53",
    "prices": {
      "economy": 8363,
      "economyPlus": 12544,
      "business": 29270
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "HYD",
    "date": "2026-05-01",
    "departureTime": "02:31",
    "arrivalTime": "06:19",
    "prices": {
      "economy": 4607,
      "economyPlus": 6910,
      "business": 16124
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "DXB",
    "date": "2026-05-09",
    "departureTime": "23:08",
    "arrivalTime": "03:01",
    "prices": {
      "economy": 11175,
      "economyPlus": 16762,
      "business": 39112
    }
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "IXB",
    "date": "2026-05-26",
    "departureTime": "17:48",
    "arrivalTime": "04:52",
    "prices": {
      "economy": 10457,
      "economyPlus": 15685,
      "business": 36599
    }
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "DXB",
    "date": "2026-05-12",
    "departureTime": "21:33",
    "arrivalTime": "00:16",
    "prices": {
      "economy": 11175,
      "economyPlus": 16762,
      "business": 39112
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "SFO",
    "date": "2026-05-20",
    "departureTime": "02:16",
    "arrivalTime": "07:43",
    "prices": {
      "economy": 69057,
      "economyPlus": 103585,
      "business": 241699
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "OSL",
    "date": "2026-05-30",
    "departureTime": "11:26",
    "arrivalTime": "04:05",
    "prices": {
      "economy": 34647,
      "economyPlus": 51970,
      "business": 121264
    }
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "BOS",
    "date": "2026-05-03",
    "departureTime": "21:55",
    "arrivalTime": "07:35",
    "prices": {
      "economy": 62720,
      "economyPlus": 94080,
      "business": 219520
    }
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "VIE",
    "date": "2026-05-06",
    "departureTime": "07:45",
    "arrivalTime": "21:04",
    "prices": {
      "economy": 31303,
      "economyPlus": 46954,
      "business": 109560
    }
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "DMM",
    "date": "2026-05-09",
    "departureTime": "16:27",
    "arrivalTime": "21:33",
    "prices": {
      "economy": 14002,
      "economyPlus": 21003,
      "business": 49007
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "FCO",
    "date": "2026-05-24",
    "departureTime": "14:21",
    "arrivalTime": "07:56",
    "prices": {
      "economy": 32474,
      "economyPlus": 48711,
      "business": 113659
    }
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "UDR",
    "date": "2026-05-26",
    "departureTime": "16:50",
    "arrivalTime": "14:27",
    "prices": {
      "economy": 4591,
      "economyPlus": 6886,
      "business": 16068
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "BHO",
    "date": "2026-05-19",
    "departureTime": "07:46",
    "arrivalTime": "05:29",
    "prices": {
      "economy": 4806,
      "economyPlus": 7209,
      "business": 16821
    }
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "WAW",
    "date": "2026-05-17",
    "departureTime": "11:28",
    "arrivalTime": "02:50",
    "prices": {
      "economy": 30407,
      "economyPlus": 45610,
      "business": 106424
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "IXB",
    "date": "2026-05-16",
    "departureTime": "09:01",
    "arrivalTime": "16:01",
    "prices": {
      "economy": 10457,
      "economyPlus": 15685,
      "business": 36599
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "IAD",
    "date": "2026-05-22",
    "departureTime": "00:52",
    "arrivalTime": "15:58",
    "prices": {
      "economy": 65808,
      "economyPlus": 98712,
      "business": 230328
    }
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "EZE",
    "date": "2026-05-06",
    "departureTime": "07:30",
    "arrivalTime": "07:46",
    "prices": {
      "economy": 76230,
      "economyPlus": 114345,
      "business": 266805
    }
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "CAI",
    "date": "2026-05-24",
    "departureTime": "13:17",
    "arrivalTime": "03:06",
    "prices": {
      "economy": 23214,
      "economyPlus": 34821,
      "business": 81249
    }
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "RPR",
    "date": "2026-05-21",
    "departureTime": "07:46",
    "arrivalTime": "09:41",
    "prices": {
      "economy": 6224,
      "economyPlus": 9336,
      "business": 21784
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "MCO",
    "date": "2026-05-09",
    "departureTime": "04:30",
    "arrivalTime": "17:41",
    "prices": {
      "economy": 71741,
      "economyPlus": 107611,
      "business": 251093
    }
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "LIM",
    "date": "2026-05-25",
    "departureTime": "03:02",
    "arrivalTime": "06:57",
    "prices": {
      "economy": 85056,
      "economyPlus": 127584,
      "business": 297696
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "ATL",
    "date": "2026-05-15",
    "departureTime": "12:02",
    "arrivalTime": "12:47",
    "prices": {
      "economy": 69892,
      "economyPlus": 104838,
      "business": 244622
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "DFW",
    "date": "2026-05-17",
    "departureTime": "20:54",
    "arrivalTime": "00:36",
    "prices": {
      "economy": 72185,
      "economyPlus": 108277,
      "business": 252647
    }
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "CUN",
    "date": "2026-05-13",
    "departureTime": "10:51",
    "arrivalTime": "17:00",
    "prices": {
      "economy": 76699,
      "economyPlus": 115048,
      "business": 268446
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "MUC",
    "date": "2026-05-06",
    "departureTime": "17:09",
    "arrivalTime": "17:19",
    "prices": {
      "economy": 33073,
      "economyPlus": 49609,
      "business": 115755
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "CCU",
    "date": "2026-05-01",
    "departureTime": "08:21",
    "arrivalTime": "06:38",
    "prices": {
      "economy": 9774,
      "economyPlus": 14661,
      "business": 34209
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "NBO",
    "date": "2026-05-26",
    "departureTime": "18:03",
    "arrivalTime": "11:45",
    "prices": {
      "economy": 24166,
      "economyPlus": 36249,
      "business": 84581
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "LHR",
    "date": "2026-05-03",
    "departureTime": "10:05",
    "arrivalTime": "22:18",
    "prices": {
      "economy": 37571,
      "economyPlus": 56356,
      "business": 131498
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "SVO",
    "date": "2026-05-14",
    "departureTime": "02:18",
    "arrivalTime": "03:06",
    "prices": {
      "economy": 26765,
      "economyPlus": 40147,
      "business": 93677
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "IXB",
    "date": "2026-05-08",
    "departureTime": "17:54",
    "arrivalTime": "00:39",
    "prices": {
      "economy": 10457,
      "economyPlus": 15685,
      "business": 36599
    }
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "ATL",
    "date": "2026-05-02",
    "departureTime": "13:51",
    "arrivalTime": "22:22",
    "prices": {
      "economy": 69892,
      "economyPlus": 104838,
      "business": 244622
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "IDR",
    "date": "2026-05-06",
    "departureTime": "11:46",
    "arrivalTime": "16:18",
    "prices": {
      "economy": 4049,
      "economyPlus": 6073,
      "business": 14171
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "GAU",
    "date": "2026-05-19",
    "departureTime": "20:21",
    "arrivalTime": "19:57",
    "prices": {
      "economy": 11931,
      "economyPlus": 17896,
      "business": 41758
    }
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "GAU",
    "date": "2026-05-05",
    "departureTime": "01:30",
    "arrivalTime": "03:08",
    "prices": {
      "economy": 11931,
      "economyPlus": 17896,
      "business": 41758
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "BOG",
    "date": "2026-05-19",
    "departureTime": "11:47",
    "arrivalTime": "12:06",
    "prices": {
      "economy": 79204,
      "economyPlus": 118806,
      "business": 277214
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "BCN",
    "date": "2026-05-27",
    "departureTime": "06:47",
    "arrivalTime": "03:44",
    "prices": {
      "economy": 36695,
      "economyPlus": 55042,
      "business": 128432
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "WAW",
    "date": "2026-05-18",
    "departureTime": "19:44",
    "arrivalTime": "06:13",
    "prices": {
      "economy": 30407,
      "economyPlus": 45610,
      "business": 106424
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "BBI",
    "date": "2026-05-13",
    "departureTime": "09:51",
    "arrivalTime": "12:28",
    "prices": {
      "economy": 8309,
      "economyPlus": 12463,
      "business": 29081
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "PAT",
    "date": "2026-05-13",
    "departureTime": "08:19",
    "arrivalTime": "06:28",
    "prices": {
      "economy": 8766,
      "economyPlus": 13149,
      "business": 30681
    }
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "DME",
    "date": "2026-05-04",
    "departureTime": "19:46",
    "arrivalTime": "00:46",
    "prices": {
      "economy": 26446,
      "economyPlus": 39669,
      "business": 92561
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "MEX",
    "date": "2026-05-26",
    "departureTime": "00:12",
    "arrivalTime": "16:56",
    "prices": {
      "economy": 79718,
      "economyPlus": 119577,
      "business": 279013
    }
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "AMD",
    "date": "2026-05-20",
    "departureTime": "18:18",
    "arrivalTime": "19:42",
    "prices": {
      "economy": 3699,
      "economyPlus": 5548,
      "business": 12946
    }
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "CMB",
    "date": "2026-05-04",
    "departureTime": "22:45",
    "arrivalTime": "10:02",
    "prices": {
      "economy": 9120,
      "economyPlus": 13680,
      "business": 31920
    }
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "EZE",
    "date": "2026-05-26",
    "departureTime": "18:23",
    "arrivalTime": "20:47",
    "prices": {
      "economy": 76230,
      "economyPlus": 114345,
      "business": 266805
    }
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "IXB",
    "date": "2026-05-21",
    "departureTime": "06:19",
    "arrivalTime": "12:59",
    "prices": {
      "economy": 10457,
      "economyPlus": 15685,
      "business": 36599
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "ZRH",
    "date": "2026-05-14",
    "departureTime": "20:38",
    "arrivalTime": "05:24",
    "prices": {
      "economy": 34204,
      "economyPlus": 51306,
      "business": 119714
    }
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "SYD",
    "date": "2026-05-07",
    "departureTime": "15:57",
    "arrivalTime": "20:47",
    "prices": {
      "economy": 69057,
      "economyPlus": 103585,
      "business": 241699
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "ICN",
    "date": "2026-05-04",
    "departureTime": "20:03",
    "arrivalTime": "00:58",
    "prices": {
      "economy": 29234,
      "economyPlus": 43851,
      "business": 102319
    }
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "DEL",
    "date": "2026-05-21",
    "departureTime": "16:46",
    "arrivalTime": "03:41",
    "prices": {
      "economy": 7266,
      "economyPlus": 10899,
      "business": 25431
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "BOS",
    "date": "2026-05-04",
    "departureTime": "07:13",
    "arrivalTime": "05:11",
    "prices": {
      "economy": 62720,
      "economyPlus": 94080,
      "business": 219520
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "COK",
    "date": "2026-05-24",
    "departureTime": "05:29",
    "arrivalTime": "11:17",
    "prices": {
      "economy": 6900,
      "economyPlus": 10350,
      "business": 24150
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "BUD",
    "date": "2026-05-13",
    "departureTime": "17:46",
    "arrivalTime": "06:49",
    "prices": {
      "economy": 30247,
      "economyPlus": 45370,
      "business": 105864
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "BHO",
    "date": "2026-05-14",
    "departureTime": "03:47",
    "arrivalTime": "17:38",
    "prices": {
      "economy": 4806,
      "economyPlus": 7209,
      "business": 16821
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "LAX",
    "date": "2026-05-05",
    "departureTime": "15:56",
    "arrivalTime": "22:42",
    "prices": {
      "economy": 71498,
      "economyPlus": 107247,
      "business": 250243
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "DOH",
    "date": "2026-05-10",
    "departureTime": "21:04",
    "arrivalTime": "14:59",
    "prices": {
      "economy": 13002,
      "economyPlus": 19503,
      "business": 45507
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "JDH",
    "date": "2026-05-17",
    "departureTime": "17:48",
    "arrivalTime": "21:25",
    "prices": {
      "economy": 5483,
      "economyPlus": 8224,
      "business": 19190
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "ACC",
    "date": "2026-05-06",
    "departureTime": "12:44",
    "arrivalTime": "03:39",
    "prices": {
      "economy": 41623,
      "economyPlus": 62434,
      "business": 145680
    }
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "CAI",
    "date": "2026-05-07",
    "departureTime": "04:42",
    "arrivalTime": "22:24",
    "prices": {
      "economy": 23214,
      "economyPlus": 34821,
      "business": 81249
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "FCO",
    "date": "2026-05-17",
    "departureTime": "15:01",
    "arrivalTime": "03:52",
    "prices": {
      "economy": 32474,
      "economyPlus": 48711,
      "business": 113659
    }
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "PTY",
    "date": "2026-05-25",
    "departureTime": "10:06",
    "arrivalTime": "17:55",
    "prices": {
      "economy": 79758,
      "economyPlus": 119637,
      "business": 279153
    }
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "JNB",
    "date": "2026-05-09",
    "departureTime": "02:16",
    "arrivalTime": "17:58",
    "prices": {
      "economy": 36319,
      "economyPlus": 54478,
      "business": 127116
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "SFO",
    "date": "2026-05-28",
    "departureTime": "10:58",
    "arrivalTime": "02:19",
    "prices": {
      "economy": 69057,
      "economyPlus": 103585,
      "business": 241699
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "COK",
    "date": "2026-05-12",
    "departureTime": "22:30",
    "arrivalTime": "02:02",
    "prices": {
      "economy": 6900,
      "economyPlus": 10350,
      "business": 24150
    }
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "CDG",
    "date": "2026-05-20",
    "departureTime": "10:24",
    "arrivalTime": "16:49",
    "prices": {
      "economy": 36477,
      "economyPlus": 54715,
      "business": 127669
    }
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "SEA",
    "date": "2026-05-02",
    "departureTime": "08:57",
    "arrivalTime": "17:52",
    "prices": {
      "economy": 63817,
      "economyPlus": 95725,
      "business": 223359
    }
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "IXC",
    "date": "2026-05-05",
    "departureTime": "00:22",
    "arrivalTime": "02:24",
    "prices": {
      "economy": 8271,
      "economyPlus": 12406,
      "business": 28948
    }
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "BNE",
    "date": "2026-05-13",
    "departureTime": "04:39",
    "arrivalTime": "10:53",
    "prices": {
      "economy": 51794,
      "economyPlus": 77691,
      "business": 181279
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "BOS",
    "date": "2026-05-05",
    "departureTime": "18:05",
    "arrivalTime": "02:26",
    "prices": {
      "economy": 62720,
      "economyPlus": 94080,
      "business": 219520
    }
  },
  {
    "airline": "Air France",
    "from": "BOM",
    "to": "LIS",
    "date": "2026-05-02",
    "departureTime": "10:51",
    "arrivalTime": "20:13",
    "prices": {
      "economy": 41595,
      "economyPlus": 62392,
      "business": 145582
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "CMN",
    "date": "2026-05-17",
    "departureTime": "03:51",
    "arrivalTime": "07:56",
    "prices": {
      "economy": 41481,
      "economyPlus": 62221,
      "business": 145183
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "OSL",
    "date": "2026-05-10",
    "departureTime": "11:32",
    "arrivalTime": "02:36",
    "prices": {
      "economy": 34647,
      "economyPlus": 51970,
      "business": 121264
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "LIS",
    "date": "2026-05-02",
    "departureTime": "00:13",
    "arrivalTime": "07:36",
    "prices": {
      "economy": 41595,
      "economyPlus": 62392,
      "business": 145582
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "NRT",
    "date": "2026-05-07",
    "departureTime": "10:12",
    "arrivalTime": "20:46",
    "prices": {
      "economy": 35430,
      "economyPlus": 53145,
      "business": 124005
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "BLR",
    "date": "2026-05-30",
    "departureTime": "06:00",
    "arrivalTime": "09:43",
    "prices": {
      "economy": 5726,
      "economyPlus": 8589,
      "business": 20041
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "LKO",
    "date": "2026-05-26",
    "departureTime": "17:31",
    "arrivalTime": "14:58",
    "prices": {
      "economy": 7473,
      "economyPlus": 11209,
      "business": 26155
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "ZRH",
    "date": "2026-05-07",
    "departureTime": "22:06",
    "arrivalTime": "02:12",
    "prices": {
      "economy": 34204,
      "economyPlus": 51306,
      "business": 119714
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "CGK",
    "date": "2026-05-22",
    "departureTime": "11:11",
    "arrivalTime": "03:11",
    "prices": {
      "economy": 24705,
      "economyPlus": 37057,
      "business": 86467
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "MAA",
    "date": "2026-05-30",
    "departureTime": "06:11",
    "arrivalTime": "13:47",
    "prices": {
      "economy": 6665,
      "economyPlus": 9997,
      "business": 23327
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "YVR",
    "date": "2026-05-26",
    "departureTime": "18:21",
    "arrivalTime": "12:02",
    "prices": {
      "economy": 62795,
      "economyPlus": 94192,
      "business": 219782
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "NAG",
    "date": "2026-05-24",
    "departureTime": "04:00",
    "arrivalTime": "23:23",
    "prices": {
      "economy": 4940,
      "economyPlus": 7410,
      "business": 17290
    }
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "LIM",
    "date": "2026-05-29",
    "departureTime": "03:36",
    "arrivalTime": "02:25",
    "prices": {
      "economy": 85056,
      "economyPlus": 127584,
      "business": 297696
    }
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "IST",
    "date": "2026-05-13",
    "departureTime": "10:55",
    "arrivalTime": "19:34",
    "prices": {
      "economy": 25681,
      "economyPlus": 38521,
      "business": 89883
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "IDR",
    "date": "2026-05-03",
    "departureTime": "05:25",
    "arrivalTime": "09:57",
    "prices": {
      "economy": 4049,
      "economyPlus": 6073,
      "business": 14171
    }
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "IXR",
    "date": "2026-05-03",
    "departureTime": "16:52",
    "arrivalTime": "20:03",
    "prices": {
      "economy": 8363,
      "economyPlus": 12544,
      "business": 29270
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "BBI",
    "date": "2026-05-21",
    "departureTime": "12:46",
    "arrivalTime": "20:18",
    "prices": {
      "economy": 8309,
      "economyPlus": 12463,
      "business": 29081
    }
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "MCO",
    "date": "2026-05-15",
    "departureTime": "05:32",
    "arrivalTime": "06:14",
    "prices": {
      "economy": 71741,
      "economyPlus": 107611,
      "business": 251093
    }
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "ATH",
    "date": "2026-05-17",
    "departureTime": "12:27",
    "arrivalTime": "19:55",
    "prices": {
      "economy": 27254,
      "economyPlus": 40881,
      "business": 95389
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "JNB",
    "date": "2026-05-11",
    "departureTime": "23:56",
    "arrivalTime": "05:44",
    "prices": {
      "economy": 36319,
      "economyPlus": 54478,
      "business": 127116
    }
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "IXC",
    "date": "2026-05-25",
    "departureTime": "22:20",
    "arrivalTime": "10:27",
    "prices": {
      "economy": 8271,
      "economyPlus": 12406,
      "business": 28948
    }
  },
  {
    "airline": "United Airlines",
    "from": "BOM",
    "to": "ORD",
    "date": "2026-05-27",
    "departureTime": "01:13",
    "arrivalTime": "22:34",
    "prices": {
      "economy": 66224,
      "economyPlus": 99336,
      "business": 231784
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "MEL",
    "date": "2026-05-10",
    "departureTime": "13:42",
    "arrivalTime": "02:06",
    "prices": {
      "economy": 50521,
      "economyPlus": 75781,
      "business": 176823
    }
  },
  {
    "airline": "Air India",
    "from": "BOM",
    "to": "MAD",
    "date": "2026-05-23",
    "departureTime": "07:15",
    "arrivalTime": "00:05",
    "prices": {
      "economy": 39098,
      "economyPlus": 58647,
      "business": 136843
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "GIG",
    "date": "2026-05-01",
    "departureTime": "00:22",
    "arrivalTime": "07:43",
    "prices": {
      "economy": 68599,
      "economyPlus": 102898,
      "business": 240096
    }
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "MAA",
    "date": "2026-05-24",
    "departureTime": "23:12",
    "arrivalTime": "02:12",
    "prices": {
      "economy": 6665,
      "economyPlus": 9997,
      "business": 23327
    }
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "CMB",
    "date": "2026-05-13",
    "departureTime": "22:25",
    "arrivalTime": "17:46",
    "prices": {
      "economy": 9120,
      "economyPlus": 13680,
      "business": 31920
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "MNL",
    "date": "2026-05-19",
    "departureTime": "09:43",
    "arrivalTime": "22:14",
    "prices": {
      "economy": 19611,
      "economyPlus": 29416,
      "business": 68638
    }
  },
  {
    "airline": "Qatar Airways",
    "from": "BOM",
    "to": "EZE",
    "date": "2026-05-06",
    "departureTime": "17:02",
    "arrivalTime": "18:00",
    "prices": {
      "economy": 76230,
      "economyPlus": 114345,
      "business": 266805
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "JLR",
    "date": "2026-05-28",
    "departureTime": "13:31",
    "arrivalTime": "17:06",
    "prices": {
      "economy": 5834,
      "economyPlus": 8751,
      "business": 20419
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "JED",
    "date": "2026-05-01",
    "departureTime": "19:58",
    "arrivalTime": "20:32",
    "prices": {
      "economy": 19100,
      "economyPlus": 28650,
      "business": 66850
    }
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "BKK",
    "date": "2026-05-20",
    "departureTime": "22:56",
    "arrivalTime": "12:41",
    "prices": {
      "economy": 16647,
      "economyPlus": 24970,
      "business": 58264
    }
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "JDH",
    "date": "2026-05-03",
    "departureTime": "02:02",
    "arrivalTime": "17:47",
    "prices": {
      "economy": 5483,
      "economyPlus": 8224,
      "business": 19190
    }
  },
  {
    "airline": "Vistara",
    "from": "BOM",
    "to": "ATQ",
    "date": "2026-05-12",
    "departureTime": "23:56",
    "arrivalTime": "23:45",
    "prices": {
      "economy": 8553,
      "economyPlus": 12829,
      "business": 29935
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "IDR",
    "date": "2026-05-23",
    "departureTime": "12:00",
    "arrivalTime": "11:18",
    "prices": {
      "economy": 4049,
      "economyPlus": 6073,
      "business": 14171
    }
  },
  {
    "airline": "Lufthansa",
    "from": "BOM",
    "to": "ATQ",
    "date": "2026-05-23",
    "departureTime": "21:15",
    "arrivalTime": "06:01",
    "prices": {
      "economy": 8553,
      "economyPlus": 12829,
      "business": 29935
    }
  },
  {
    "airline": "Emirates",
    "from": "BOM",
    "to": "TPE",
    "date": "2026-05-05",
    "departureTime": "20:56",
    "arrivalTime": "19:52",
    "prices": {
      "economy": 26508,
      "economyPlus": 39762,
      "business": 92778
    }
  },
  {
    "airline": "British Airways",
    "from": "BOM",
    "to": "TPE",
    "date": "2026-05-28",
    "departureTime": "12:09",
    "arrivalTime": "06:19",
    "prices": {
      "economy": 26508,
      "economyPlus": 39762,
      "business": 92778
    }
  },
  {
    "airline": "SpiceJet",
    "from": "BOM",
    "to": "NAG",
    "date": "2026-05-12",
    "departureTime": "20:23",
    "arrivalTime": "08:13",
    "prices": {
      "economy": 4940,
      "economyPlus": 7410,
      "business": 17290
    }
  },
  {
    "airline": "Singapore Airlines",
    "from": "BOM",
    "to": "IAH",
    "date": "2026-05-13",
    "departureTime": "01:01",
    "arrivalTime": "13:40",
    "prices": {
      "economy": 73575,
      "economyPlus": 110362,
      "business": 257512
    }
  },
  {
    "airline": "IndiGo",
    "from": "BOM",
    "to": "DME",
    "date": "2026-05-30",
    "departureTime": "10:31",
    "arrivalTime": "20:52",
    "prices": {
      "economy": 26446,
      "economyPlus": 39669,
      "business": 92561
    }
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
