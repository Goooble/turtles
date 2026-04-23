// ─────────────────────────────────────────────────────────────────────────────
// FlightsPage.tsx  ·  Student 2's responsibility
// ─────────────────────────────────────────────────────────────────────────────
//
// Behaviour:
//   1. If Student 1's SearchPage passed flights via router state → use them.
//   2. Otherwise (navigated directly) → fetch from GET /flights with any
//      query params (from, to, date) found in the URL search string.
//
// "Book" button → navigate('/booking', { state: { flight } })
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import type { Flight } from '../types'
import './FlightsPage.css'
import { formatLocation } from '../utils/flightHelpers'

// ── Backend base URL ──────────────────────────────────────────────────────────
const API_BASE = 'http://localhost:3000'

// ── Airline accent colours (maps airline name → brand colour) ─────────────────
const AIRLINE_COLORS: Record<string, string> = {
  'air india':   '#e8192c',
  'indigo':      '#2c3e8c',
  'spicejet':    '#d0021b',
  'vistara':     '#4a1942',
  'goair':       '#1c3f94',
  'lufthansa':   '#05164d',
  'emirates':    '#c69214',
  'air emirates':'#c69214',
  'british airways': '#075aaa',
  'singapore airlines': '#2b3990',
}

function getAccentColor(airline: string): string {
  const key = airline.toLowerCase()
  for (const [name, color] of Object.entries(AIRLINE_COLORS)) {
    if (key.includes(name)) return color
  }
  return '#2563eb'
}

// ── Router location state shape (passed by Student 1's SearchPage) ─────────────
interface LocationState {
  flights?: Flight[]
  query?: { from: string; to: string; date: string }
}

// ─────────────────────────────────────────────────────────────────────────────

function FlightsPage() {
  const navigate       = useNavigate()
  const location       = useLocation()
  const [searchParams] = useSearchParams()

  const [flights, setFlights] = useState<Flight[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)

  // Label shown in the heading (set from state or URL params)
  const locationState = location.state as LocationState | null
  const query = locationState?.query
  const fromLabel = query?.from || searchParams.get('from') || ''
  const toLabel   = query?.to   || searchParams.get('to')   || ''

  useEffect(() => {
    // ── Path 1: flights already fetched by SearchPage ────────────────────────
    if (locationState?.flights) {
      setFlights(locationState.flights)
      setLoading(false)
      return
    }

    // ── Path 2: fetch directly (e.g. user navigated to /flights directly) ────
    const fetchFlights = async () => {
      setLoading(true)
      setError(null)
      try {
        const params: Record<string, string> = {}
        const from = searchParams.get('from')
        const to   = searchParams.get('to')
        const date = searchParams.get('date')
        if (from) params.from = from
        if (to)   params.to   = to
        if (date) params.date = date

        const { data } = await axios.get<Flight[]>(`${API_BASE}/flights`, { params })
        setFlights(data)
      } catch (err) {
        console.error('Failed to fetch flights:', err)
        setError('Could not load flights. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchFlights()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleBook = (flight: Flight) => {
    navigate('/booking', { state: { flight } })
  }

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="fp-page">

      {/* ── Header ───────────────────────────────────────────────────────── */}
      <header className="fp-header">
        <div className="fp-header__brand">
          <span className="fp-header__plane">✈</span>
          <span className="fp-header__title">MakeMyTrip</span>
        </div>
        {fromLabel && toLabel && (
          <div className="fp-header__route-pill">
            {fromLabel.toUpperCase()} → {toLabel.toUpperCase()}
          </div>
        )}
      </header>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <main className="fp-main">

        <h1 className="fp-heading">
          {fromLabel && toLabel
            ? `Flights: ${fromLabel.toUpperCase()} → ${toLabel.toUpperCase()}`
            : 'Available Flights'}
        </h1>

        {/* Loading */}
        {loading && (
          <div className="fp-status">
            <div className="fp-spinner" aria-label="Loading" />
            <p>Searching for the best flights…</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="fp-status fp-status--error">
            <span className="fp-status__icon">⚠️</span>
            <p>{error}</p>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && flights.length === 0 && (
          <div className="fp-status fp-status--empty">
            <span className="fp-status__icon">🔍</span>
            <p>No flights found.</p>
            <p className="fp-status__sub">Try a different date or route.</p>
          </div>
        )}

        {/* Flight cards */}
        {!loading && !error && flights.length > 0 && (
          <ul className="fp-list" aria-label="Available flights">
            {flights.map((flight) => {
              const accent = getAccentColor(flight.airline)
              return (
                <li
                  key={flight._id}
                  className="fp-card"
                  style={{ '--accent': accent } as React.CSSProperties}
                >
                  {/* Airline strip */}
                  <div className="fp-card__strip">
                    <span className="fp-card__plane-icon">✈</span>
                    <span className="fp-card__airline">{flight.airline}</span>
                  </div>

                  {/* Route */}
                  <div className="fp-card__route">
                    <div className="fp-card__city">
                      <span className="fp-card__code">{flight.from}</span>
                      <span className="fp-card__city-label">{formatLocation(flight.from)}</span>
                    </div>

                    <svg className="fp-card__arrow-svg" viewBox="0 0 80 14" aria-hidden="true">
                      <line x1="0" y1="7" x2="66" y2="7" stroke="currentColor" strokeWidth="1.5"/>
                      <polyline points="60,3 70,7 60,11" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>

                    <div className="fp-card__city fp-card__city--right">
                      <span className="fp-card__code">{flight.to}</span>
                      <span className="fp-card__city-label">{formatLocation(flight.to)}</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="fp-card__details">
                    <div className="fp-card__detail">
                      <span className="fp-card__detail-label">🕐 Departure</span>
                      <span className="fp-card__detail-value">{flight.departureTime}</span>
                    </div>
                    {flight.arrivalTime && (
                      <div className="fp-card__detail">
                        <span className="fp-card__detail-label">🛬 Arrival</span>
                        <span className="fp-card__detail-value">{flight.arrivalTime}</span>
                      </div>
                    )}
                    <div className="fp-card__detail">
                      <span className="fp-card__detail-label">📅 Date</span>
                      <span className="fp-card__detail-value">{flight.date}</span>
                    </div>
                    <div className="fp-card__detail fp-card__detail--price">
                      <span className="fp-card__detail-label">Price</span>
                      <span className="fp-card__price">
                        ₹{flight.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Book button */}
                  <button
                    id={`book-btn-${flight._id}`}
                    className="fp-card__book-btn"
                    onClick={() => handleBook(flight)}
                    aria-label={`Book ${flight.airline} flight from ${flight.from} to ${flight.to}`}
                  >
                    Book Now
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </main>
    </div>
  )
}

export default FlightsPage
