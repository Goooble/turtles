import { Routes, Route } from 'react-router-dom'
import SearchPage  from './search/SearchPage'
import FlightsPage from './flights/FlightsPage'
import BookingPage from './booking/BookingPage'
import './App.css'

function App() {
  return (
    <Routes>
      {/* Student 1 — Search / home page */}
      <Route path="/"        element={<SearchPage />}  />

      {/* Student 2 — Flights listing page */}
      <Route path="/flights" element={<FlightsPage />} />

      {/* Student 3 — Booking page */}
      <Route path="/booking" element={<BookingPage />} />

      {/* Catch-all → home */}
      <Route path="*"        element={<SearchPage />}  />
    </Routes>
  )
}

export default App
