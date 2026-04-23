import 'dotenv/config';
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import authMiddleware from "./middlewares/authMiddleware.js";
import { connectToDatabase, createCollections } from "./db.js";
import flightsRouter from "./routes/flights.js";
import bookingsRouter from "./routes/bookings.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// ─── MongoDB Connection (Student 5 & 6) ───────────────────────────────────────
// Set MONGODB_URI in backend/.env  e.g.:
//   MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/<db>?retryWrites=true&w=majority
const MONGODB_URI = process.env.MONGODB_URI || 'PASTE_YOUR_MONGODB_ATLAS_URI_HERE';
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('✅  MongoDB connected'))
  .catch((err) => console.error('❌  MongoDB connection error:', err));

// ─── Routes ────────────────────────────────────────────────────────────────────
app.get("/home", (req, res) => {
  res.send(`
    <html>
      <head><title>Home</title></head>
      <body>
        <h1>Hello</h1>
        <p>This is HTML</p>
      </body>
    </html>
  `);
});

app.get("/app", authMiddleware, (req, res) => {
  res.send("protected bitch");
});

app.use("/api/auth", authRoutes);       // Student 1's auth routes
app.use("/flights", flightsRouter);     // Student 5 — GET /flights
app.use("/booking", bookingsRouter);    // Student 6 — POST /booking

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await connectToDatabase();
    await createCollections();
  } catch (error) {
    console.error("Failed to connect to database:", error);
  }
});
