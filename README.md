# AeroBook - MakeMyTrip Clone ✈️

A full-stack flight search and booking application built with React, Node.js, Express, and MongoDB.

## Project Structure
The repository is split into two main directories:
- `/backend` - Node.js & Express server handling APIs, Authentication, and MongoDB connections.
- `/mmt` - React frontend built with Vite, featuring a premium glassmorphism UI and an interactive flight network map.

---

## 🚀 How to Run the Project

You will need to open **two separate terminal windows**: one for the backend and one for the frontend.

### 1. Backend Setup (Terminal 1)

1. Open your terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   - Create a file named `.env` inside the `backend/` folder.
   - Add your MongoDB Atlas connection string and port:
     ```env
     MONGODB_URI=mongodb+srv://<your_username>:<your_password>@<your_cluster>.mongodb.net/mmt?retryWrites=true&w=majority
     PORT=5000
     ```
4. **(Optional but recommended)** Seed the database with dummy flights and bookings:
   ```bash
   node seed.js
   ```
   *Note: This will populate your database with 33 realistic domestic and international flights so the interactive map works perfectly.*
5. Start the backend server:
   ```bash
   npm start
   ```
   *You should see "Server running on port 5000" and "✅ MongoDB connected".*

### 2. Frontend Setup (Terminal 2)

1. Open a new terminal window and navigate to the frontend folder:
   ```bash
   cd mmt
   ```
2. Install the required dependencies (using `--legacy-peer-deps` due to `react-simple-maps` compatibility with React 19):
   ```bash
   npm install --legacy-peer-deps
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to the local URL provided by Vite (usually `http://localhost:5173/`).

---

## Features Implemented
- **Interactive Flight Network Map**: Visualizes all available flight routes from a central hub (Mumbai) using `react-simple-maps` and TopoJSON.
- **Flight Searching**: Users can search by 'From', 'To', and 'Date'.
- **Authentication**: Secure login and signup flow using JWT cookies and `bcrypt`.
- **Protected Booking**: Users must log in or sign up before they can finalize a flight booking.
- **Dashboard**: Logged-in users can view their past and upcoming flight tickets in the "My Bookings" portal.

## Technologies Used
- **Frontend**: React 19, TypeScript, Vite, React Router, React Simple Maps, Axios, Vanilla CSS.
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT (JSON Web Tokens), Bcrypt.js.