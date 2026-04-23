import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar/Navbar'
import SearchPage from './search/SearchPage'
import FlightsPage from './flights/FlightsPage'
import BookingPage from './booking/BookingPage'
import Login from './auth/Login'
import Signup from './auth/Signup'
import Dashboard from './dashboard/Dashboard'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
            <Routes>
              <Route path="/" element={<SearchPage />} />
              <Route path="/flights" element={<FlightsPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<SearchPage />} />
            </Routes>
          </main>
        </div>
    </AuthProvider>
  )
}

export default App
