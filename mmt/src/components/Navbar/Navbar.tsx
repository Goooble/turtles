import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'
import './Navbar.css'

export default function Navbar() {
  const { user, setUser } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3000/api/auth/logout', {}, { withCredentials: true })
      setUser(null)
      navigate('/')
    } catch (err) {
      console.error('Failed to logout', err)
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">✈️</span>
          <span className="logo-text">AeroBook</span>
        </Link>

        <div className="navbar-links">
          <Link to="/" className="nav-link">Search</Link>
          <Link to="/flights" className="nav-link">All Flights</Link>

          {user ? (
            <div className="nav-user-menu">
              <Link to="/dashboard" className="nav-link dashboard-link">My Bookings</Link>
              <button onClick={handleLogout} className="btn-logout">Log Out</button>
            </div>
          ) : (
            <div className="nav-auth-links">
              <Link to="/login" className="nav-link login-link">Log In</Link>
              <Link to="/signup" className="btn-signup">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
