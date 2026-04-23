// ─────────────────────────────────────────────────────────────────────────────
// BookingPage.tsx  ·  Student 3's responsibility
//
// Shows the selected flight's details and a passenger form.
// On submit → POST /booking to Student 6's backend API.
//
// Expected router state (passed by Student 2's FlightsPage):
//   navigate('/booking', { state: { flight: <Flight object> } })
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
interface Flight {
  _id: string
  airline: string
  from: string
  to: string
  date: string
  departureTime: string
  arrivalTime: string
  price: number
}

interface BookingPayload {
  flightId: string
  userId: string | null
  passenger: { name: string; age: number }
}
import './BookingPage.css'
import { formatLocation } from '../utils/flightHelpers'

// ── Backend base URL.  Change this if your backend runs on a different port. ──
const API_BASE = 'http://localhost:3000'

// ── Local shape for the passenger form fields ──────────────────────────────
interface PassengerForm {
  name: string
  age: string   // kept as string so the input is easy to control
}

// ── Router location state (what Student 2 passes when "Book" is clicked) ───
interface LocationState {
  flight: Flight
}

// ──────────────────────────────────────────────────────────────────────────────

function BookingPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, loading: authLoading } = useAuth()

  // Pull the selected flight from router state
  const state = location.state as LocationState | null
  const flight = state?.flight

  const [passenger, setPassenger] = useState<PassengerForm>({ name: '', age: '' })
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState('')
  const [success, setSuccess] = useState(false)

  // ── Guard: if no flight in state, user navigated here directly ────────────
  if (!flight) {
    return (
      <div className="booking-page">
        <div className="booking-empty-state">
          <div className="empty-icon">🛫</div>
          <h2>No flight selected</h2>
          <p>Please search for flights and click "Book" on a flight first.</p>
          <button className="btn-primary" onClick={() => navigate('/')}>
            Back to Search
          </button>
        </div>
      </div>
    )
  }

  // ── Handle input changes ──────────────────────────────────────────────────
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPassenger(prev => ({ ...prev, [name]: value }))
    setFormError('')   // clear error as user types
  }

  // ── Validate form before sending ─────────────────────────────────────────
  const validate = (): string => {
    if (!passenger.name.trim()) return 'Please enter the passenger\'s full name.'
    if (!passenger.age.trim()) return 'Please enter the passenger\'s age.'
    const ageNum = Number(passenger.age)
    if (!Number.isInteger(ageNum) || ageNum < 1 || ageNum > 120) {
      return 'Age must be a whole number between 1 and 120.'
    }
    return ''
  }

  // ── Submit booking to backend ─────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationError = validate()
    if (validationError) {
      setFormError(validationError)
      return
    }

    setLoading(true)
    setFormError('')

    const payload: BookingPayload = {
      flightId: flight._id,
      // userId comes from AuthContext
      userId: user!._id,
      passenger: {
        name: passenger.name.trim(),
        age: Number(passenger.age),
      },
    }

    try {
      await axios.post(`${API_BASE}/booking`, payload)
      setSuccess(true)
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setFormError(
          err.response?.data?.message as string
          || 'Booking failed. Please try again.'
        )
      } else {
        setFormError('An unexpected error occurred. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  // ── Success screen ────────────────────────────────────────────────────────
  if (success) {
    return (
      <div className="booking-page">
        <div className="booking-success">
          <div className="success-checkmark">✓</div>
          <h2>Booking Confirmed!</h2>
          <p>
            Your flight from <strong>{formatLocation(flight.from)}</strong> to{' '}
            <strong>{formatLocation(flight.to)}</strong> has been booked successfully.
          </p>
          <p className="success-detail">
            Passenger: <strong>{passenger.name}</strong>
          </p>
          <p className="success-detail">
            Flight: <strong>{flight.airline}</strong> on{' '}
            <strong>{flight.date}</strong>
          </p>
          <button
            className="btn-primary"
            onClick={() => navigate('/')}
          >
            Book Another Flight
          </button>
        </div>
      </div>
    )
  }

  // ── Main booking form ─────────────────────────────────────────────────────
  return (
    <div className="booking-page">
      <h1 className="page-title">Complete Your Booking</h1>

      {!user && !authLoading && (
        <div className="auth-required-banner">
          <p>Please log in or sign up to complete this booking.</p>
          <div className="auth-required-actions">
            <Link to="/login" className="btn-primary">Log In</Link>
            <Link to="/signup" className="btn-secondary">Sign Up</Link>
          </div>
        </div>
      )}

      {/* ── Flight Summary Card ─────────────────────────────────────────── */}
      <section className="flight-card" aria-label="Selected flight details">
        <h2 className="card-heading">Selected Flight</h2>
        <div className="flight-grid">
          <div className="flight-field">
            <span className="field-label">Airline</span>
            <span className="field-value">{flight.airline}</span>
          </div>
          <div className="flight-field">
            <span className="field-label">From</span>
            <span className="field-value">{formatLocation(flight.from)}</span>
          </div>
          <div className="flight-field">
            <span className="field-label">To</span>
            <span className="field-value">{formatLocation(flight.to)}</span>
          </div>
          <div className="flight-field">
            <span className="field-label">Date</span>
            <span className="field-value">{flight.date}</span>
          </div>
          <div className="flight-field">
            <span className="field-label">Departure</span>
            <span className="field-value">{flight.departureTime}</span>
          </div>
          <div className="flight-field">
            <span className="field-label">Arrival</span>
            <span className="field-value">{flight.arrivalTime}</span>
          </div>
        </div>
        {/* Price shown separately and larger */}
        <div className="flight-price-row">
          <span className="field-label">Total Price</span>
          <span className="price-amount">
            ₹{flight.price.toLocaleString('en-IN')}
          </span>
        </div>
      </section>

      {/* ── Passenger Details Form ──────────────────────────────────────── */}
      <section className="passenger-section" aria-label="Passenger details form">
        <h2 className="card-heading">Passenger Details</h2>
        <form className="passenger-form" onSubmit={handleSubmit} noValidate>

          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-input"
              placeholder="e.g. Ravi Kumar"
              value={passenger.name}
              onChange={handleChange}
              disabled={loading}
              autoComplete="name"
              maxLength={100}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="age">
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              className="form-input form-input--narrow"
              placeholder="e.g. 28"
              value={passenger.age}
              onChange={handleChange}
              disabled={loading}
              min={1}
              max={120}
            />
          </div>

          {/* Inline validation / API error message */}
          {formError && (
            <p className="form-error" role="alert">
              ⚠ {formError}
            </p>
          )}

          <div className="form-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate(-1)}
              disabled={loading}
            >
              ← Back
            </button>
            <button
              type="submit"
              className="btn-primary btn-submit"
              disabled={loading || !user}
            >
              {loading ? 'Confirming…' : 'Confirm Booking'}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default BookingPage
