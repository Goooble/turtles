import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import type { Flight } from '../types'
import './Dashboard.css'
import { formatLocation } from '../utils/flightHelpers'

interface BookingData {
  _id: string
  userId: string
  flightId: Flight
  passenger: { name: string; age: number }
  createdAt: string
}

export default function Dashboard() {
  const { user, loading: authLoading } = useAuth()
  const navigate = useNavigate()
  const [bookings, setBookings] = useState<BookingData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    // If auth is done loading and no user, redirect to login
    if (!authLoading && !user) {
      navigate('/login')
      return
    }

    if (user) {
      fetchBookings()
    }
  }, [user, authLoading, navigate])

  const fetchBookings = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/booking/user/${user?._id}`)
      setBookings(res.data)
    } catch (err) {
      setError('Failed to load your bookings.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (authLoading || loading) return <div className="dashboard-page"><div className="loading-spinner">Loading your profile...</div></div>

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>My Account</h1>
        <p>Welcome back, {user?.email}</p>
      </div>

      <div className="dashboard-content">
        <h2>Your Bookings</h2>
        
        {error && <div className="dashboard-error">{error}</div>}

        {bookings.length === 0 && !error ? (
          <div className="empty-bookings">
            <div className="empty-icon">🎫</div>
            <h3>No flights booked yet</h3>
            <p>Ready for your next adventure?</p>
            <button onClick={() => navigate('/')} className="btn-explore">Explore Flights</button>
          </div>
        ) : (
          <div className="bookings-grid">
            {bookings.map((booking) => (
              <div key={booking._id} className="booking-ticket">
                <div className="ticket-header">
                  <span className="ticket-airline">{booking.flightId.airline}</span>
                  <div className="ticket-class-badge" style={{ 
                    background: booking.flightClass === 'Business' ? '#1a237e' : booking.flightClass === 'Economy Plus' ? '#ff9800' : '#0057B8',
                    color: '#fff',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}>
                    {booking.flightClass}
                  </div>
                  <span className="ticket-date">{booking.flightId.date}</span>
                </div>
                
                <div className="ticket-route">
                  <div className="ticket-point">
                    <span className="point-time">{booking.flightId.departureTime}</span>
                    <span className="point-code" style={{ fontSize: '0.85rem' }}>{formatLocation(booking.flightId.from)}</span>
                  </div>
                  
                  <div className="ticket-divider">
                    <span className="plane-icon">✈️</span>
                  </div>
                  
                  <div className="ticket-point" style={{ textAlign: 'right' }}>
                    <span className="point-time">{booking.flightId.arrivalTime}</span>
                    <span className="point-code" style={{ fontSize: '0.85rem' }}>{formatLocation(booking.flightId.to)}</span>
                  </div>
                </div>

                <div className="ticket-footer">
                  <div className="passenger-info">
                    <span className="info-label">Passenger</span>
                    <span className="info-value">{booking.passenger.name}</span>
                  </div>
                  <div className="booking-ref">
                    <span className="info-label">Price Paid</span>
                    <span className="info-value" style={{ color: '#0057B8', fontWeight: 800 }}>₹{booking.pricePaid?.toLocaleString('en-IN') || 'N/A'}</span>
                  </div>
                  <div className="booking-ref">
                    <span className="info-label">Booking Ref</span>
                    <span className="info-value">#{booking._id.slice(-6).toUpperCase()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
