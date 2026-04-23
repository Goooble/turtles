import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

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
app.use("/api/auth", authRoutes);

app.listen(3000, () => console.log("Server running"));
