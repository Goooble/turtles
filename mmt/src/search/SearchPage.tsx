import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NetworkMap from '../components/NetworkMap/NetworkMap'
import './SearchPage.css'

export default function SearchPage() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Build query params
    const params = new URLSearchParams()
    if (from) params.append('from', from)
    if (to) params.append('to', to)
    if (date) params.append('date', date)
    
    // Navigate to flights page, which handles fetching
    navigate(`/flights?${params.toString()}`)
  }

  return (
    <div className="search-page">
      <div className="hero-section">
        <h1 className="hero-title">Where to next?</h1>
        <p className="hero-subtitle">Discover premium flights to destinations across the globe.</p>
        
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-input-group">
            <label>From</label>
            <input 
              type="text" 
              placeholder="e.g. Mumbai" 
              value={from} 
              onChange={e => setFrom(e.target.value)} 
            />
          </div>
          
          <div className="search-divider"></div>
          
          <div className="search-input-group">
            <label>To</label>
            <input 
              type="text" 
              placeholder="e.g. Dubai" 
              value={to} 
              onChange={e => setTo(e.target.value)} 
            />
          </div>
          
          <div className="search-divider"></div>
          
          <div className="search-input-group">
            <label>Date</label>
            <input 
              type="date" 
              value={date} 
              onChange={e => setDate(e.target.value)} 
            />
          </div>
          
          <button type="submit" className="btn-search">Search Flights</button>
        </form>
      </div>

      <div className="map-section">
        <NetworkMap />
      </div>
    </div>
  )
}
