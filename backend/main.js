import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import authMiddleware from "./middlewares/authMiddleware.js";
import { connectToDatabase, createCollections } from "./db.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
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
app.use("/api/auth", authRoutes);

app.listen(3000, async () => {
  console.log("Server running");
  try {
    await connectToDatabase();
    await createCollections();
  } catch (error) {
    console.error("Failed to connect to database:", error);
  }
});
