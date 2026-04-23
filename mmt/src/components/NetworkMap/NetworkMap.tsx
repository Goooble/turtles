import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
  ZoomableGroup
} from 'react-simple-maps'
import axios from 'axios'
import type { Flight } from '../../types'
import './NetworkMap.css'

const API_BASE = 'http://localhost:3000'

// ── Coordinates Mapping ────────────────────────────────────────────────────────
// React-simple-maps expects [longitude, latitude]
const coords: Record<string, [number, number]> = {
  BOM: [72.8777, 19.0760],   // Mumbai (HUB)
  DEL: [77.1025, 28.7041],   // Delhi
  BLR: [77.5946, 12.9716],   // Bangalore
  CCU: [88.3639, 22.5726],   // Kolkata
  HYD: [78.4867, 17.3850],   // Hyderabad
  MAA: [80.2707, 13.0827],   // Chennai
  PNQ: [73.8567, 18.5204],   // Pune
  GOI: [73.8180, 15.3803],   // Goa
  DXB: [55.2708, 25.2048],   // Dubai
  JFK: [-73.7781, 40.6413],  // New York
  LHR: [-0.4543, 51.4700],   // London
  SIN: [103.9915, 1.3644],   // Singapore
  FRA: [8.5706, 50.0333],    // Frankfurt
  DOH: [51.5310, 25.2854],   // Doha
  BKK: [100.7501, 13.6900],  // Bangkok
  CDG: [2.5479, 49.0097],    // Paris
  AUH: [54.6511, 24.4329],   // Abu Dhabi
  KUL: [101.7054, 2.7456],   // Kuala Lumpur
  HKG: [113.9145, 22.3080],  // Hong Kong
  EWR: [-74.1745, 40.6895],  // Newark
  SFO: [-122.3790, 37.6213], // San Francisco
  CMB: [79.8833, 7.1805],    // Colombo
  KTM: [85.3562, 27.6973],   // Kathmandu
}

// ── Region Mapping ────────────────────────────────────────────────────────────
// Maps a destination code to a specific region filter category
const regionMap: Record<string, string> = {
  DEL: 'Asia Pacific', BLR: 'Asia Pacific', CCU: 'Asia Pacific', HYD: 'Asia Pacific', 
  MAA: 'Asia Pacific', PNQ: 'Asia Pacific', GOI: 'Asia Pacific', SIN: 'Asia Pacific', 
  BKK: 'Asia Pacific', KUL: 'Asia Pacific', HKG: 'Asia Pacific', CMB: 'Asia Pacific', 
  KTM: 'Asia Pacific',
  DXB: 'Middle East', DOH: 'Middle East', AUH: 'Middle East',
  LHR: 'Europe', FRA: 'Europe', CDG: 'Europe',
  JFK: 'Americas', EWR: 'Americas', SFO: 'Americas',
  // No African destinations in dummy data right now, but region pill will exist
}

const REGIONS = ['All', 'Middle East', 'Europe', 'Asia Pacific', 'Africa', 'Americas']

// ─────────────────────────────────────────────────────────────────────────────

export default function NetworkMap() {
  const navigate = useNavigate()
  const [flights, setFlights] = useState<Flight[]>([])
  const [activeRegion, setActiveRegion] = useState('All')
  const [hoveredFlight, setHoveredFlight] = useState<Flight | null>(null)

  useEffect(() => {
    // Fetch all flights to display on map
    axios.get(`${API_BASE}/flights`).then((res) => {
      // Filter out duplicate routes if we have multiple flights to the same place,
      // or we can just draw them all. Let's pick one unique flight per destination
      // to avoid drawing 10 lines to the same dot.
      const uniqueRoutes = new Map<string, Flight>()
      res.data.forEach((f: Flight) => {
        if (!uniqueRoutes.has(f.to)) uniqueRoutes.set(f.to, f)
      })
      setFlights(Array.from(uniqueRoutes.values()))
    }).catch(err => console.error("Failed to fetch map flights:", err))
  }, [])

  const handleFlightClick = (flight: Flight) => {
    // Requirements: "if you click on the thing it takes you to booking"
    navigate('/booking', { state: { flight } })
  }

  // Filter flights based on active region
  const visibleFlights = flights.filter(f => {
    if (activeRegion === 'All') return true
    return regionMap[f.to] === activeRegion
  })

  return (
    <div className="network-map-container">
      {/* ── Title ── */}
      <h1 className="network-title">Our network is growing</h1>

      <div className="network-map-wrapper">
        
        {/* ── Floating Search Bar ── */}
        <div className="network-search-overlay">
          <div className="network-search-field">
            <span className="network-label">From</span>
            <span className="network-value">Mumbai (BOM)</span>
          </div>
          <div className="network-search-divider">⇌</div>
          <div className="network-search-field network-search-dest">
            <span className="network-label">To</span>
            <input type="text" placeholder="Where to?" className="network-input" />
          </div>
        </div>

        {/* ── The Map ── */}
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 140 }}
          className="composable-map"
        >
          <ZoomableGroup center={[20, 30]} zoom={1.1}>
            {/* Base world map */}
            <Geographies geography="/features.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#e1e8f0" // Light greyish blue for land
                    stroke="#ffffff"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "#d0d9e4" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Hub Marker (BOM) */}
            <Marker coordinates={coords.BOM}>
              <circle r={6} fill="#8a1538" stroke="#fff" strokeWidth={2} />
              <text textAnchor="middle" y={15} style={{ fontFamily: "Inter", fontSize: "8px", fill: "#333", fontWeight: 700 }}>
                Mumbai, India
              </text>
            </Marker>

            {/* Flight Lines & Destination Markers */}
            {visibleFlights.map((flight) => {
              const destCoords = coords[flight.to]
              if (!destCoords) return null

              const isHovered = hoveredFlight?._id === flight._id
              const lineColor = isHovered ? '#e12b5e' : 'rgba(138, 21, 56, 0.4)'

              return (
                <g key={flight._id}>
                  {/* Curved path */}
                  <Line
                    from={coords.BOM}
                    to={destCoords}
                    stroke={lineColor}
                    strokeWidth={isHovered ? 2 : 1}
                    strokeLinecap="round"
                    style={{ transition: 'stroke 0.2s', cursor: 'pointer' }}
                    onClick={() => handleFlightClick(flight)}
                    onMouseEnter={() => setHoveredFlight(flight)}
                    onMouseLeave={() => setHoveredFlight(null)}
                  />
                  
                  {/* Destination Marker */}
                  <Marker coordinates={destCoords}>
                    <circle 
                      r={isHovered ? 4 : 2.5} 
                      fill="#8a1538" 
                      onClick={() => handleFlightClick(flight)}
                      onMouseEnter={() => setHoveredFlight(flight)}
                      onMouseLeave={() => setHoveredFlight(null)}
                      style={{ cursor: 'pointer', transition: 'r 0.2s' }}
                    />
                    {isHovered && (
                      <text 
                        textAnchor="middle" 
                        y={-8} 
                        style={{ fontFamily: "Inter", fontSize: "10px", fill: "#8a1538", fontWeight: 700, pointerEvents: 'none' }}
                      >
                        {flight.to}
                      </text>
                    )}
                  </Marker>
                </g>
              )
            })}
          </ZoomableGroup>
        </ComposableMap>

        {/* ── Floating Bottom Region Filters ── */}
        <div className="network-filters">
          {REGIONS.map((region) => (
            <button
              key={region}
              className={`network-filter-btn ${activeRegion === region ? 'active' : ''}`}
              onClick={() => setActiveRegion(region)}
            >
              {region}
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}
