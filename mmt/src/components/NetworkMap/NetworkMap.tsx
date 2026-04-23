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

import { coords, regionMap } from './cities'

const REGIONS = ['All', 'Middle East', 'Europe', 'Asia Pacific', 'Africa', 'Americas']

// ─────────────────────────────────────────────────────────────────────────────

export default function NetworkMap() {
  const navigate = useNavigate()
  const [flights, setFlights] = useState<Flight[]>([])
  const [activeRegion, setActiveRegion] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
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

  // Filter flights based on active region and search query
  const visibleFlights = flights.filter(f => {
    // Filter by Region
    if (activeRegion !== 'All' && regionMap[f.to] !== activeRegion) return false
    
    // Filter by Search Input
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      // Match against the airport code
      if (!f.to.toLowerCase().includes(query)) return false
    }
    
    return true
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
            <input 
              type="text" 
              placeholder="e.g. DXB or LHR" 
              className="network-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
              <circle r={6} fill="#0057B8" stroke="#fff" strokeWidth={2} />
              <text textAnchor="middle" y={15} style={{ fontFamily: "Inter", fontSize: "8px", fill: "#0057B8", fontWeight: 700 }}>
                Mumbai, India
              </text>
            </Marker>

            {/* Flight Lines & Destination Markers */}
            {visibleFlights.map((flight) => {
              const destCoords = coords[flight.to]
              if (!destCoords) return null

              const isHovered = hoveredFlight?._id === flight._id
              const lineColor = isHovered ? '#FFD700' : 'rgba(0, 87, 184, 0.4)'

              return (
                <g key={flight._id}>
                  {/* Invisible thick path for precise hitbox */}
                  <Line
                    from={coords.BOM}
                    to={destCoords}
                    stroke="transparent"
                    strokeWidth={15}
                    strokeLinecap="round"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleFlightClick(flight)}
                    onMouseEnter={() => setHoveredFlight(flight)}
                    onMouseLeave={() => setHoveredFlight(null)}
                  />

                  {/* Visible thin path */}
                  <Line
                    from={coords.BOM}
                    to={destCoords}
                    stroke={lineColor}
                    strokeWidth={isHovered ? 2 : 1}
                    strokeLinecap="round"
                    style={{ transition: 'stroke 0.2s', pointerEvents: 'none' }}
                  />
                  
                  {/* Destination Marker */}
                  <Marker coordinates={destCoords}>
                    <circle 
                      r={isHovered ? 4 : 2.5} 
                      fill={isHovered ? "#FFD700" : "#0057B8"} 
                      onClick={() => handleFlightClick(flight)}
                      onMouseEnter={() => setHoveredFlight(flight)}
                      onMouseLeave={() => setHoveredFlight(null)}
                      style={{ cursor: 'pointer', transition: 'r 0.2s' }}
                    />
                    {isHovered && (
                      <text 
                        textAnchor="middle" 
                        y={-8} 
                        style={{ fontFamily: "Inter", fontSize: "10px", fill: "#0057B8", fontWeight: 700, pointerEvents: 'none' }}
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
