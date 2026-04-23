// ─────────────────────────────────────────────────────────────────────────────
// SearchPage.tsx  ·  Student 1's responsibility
//
// TODO (Student 1): Replace this placeholder with your actual implementation.
//
// What goes here:
//   • Input fields: "From", "To", "Date"
//   • useState to store those values
//   • On "Search" click → call GET /flights?from=X&to=Y&date=Z (axios)
//   • Navigate to /flights and pass the results via router state:
//       navigate('/flights', { state: { flights: data, query: { from, to, date } } })
// ─────────────────────────────────────────────────────────────────────────────

import NetworkMap from '../components/NetworkMap/NetworkMap'

function SearchPage() {
    <div>
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h1>🔍 Search Flights</h1>
        <p style={{ color: 'var(--text)' }}>
          Student 1 — replace this file with your search form.
        </p>
      </div>
      
      {/* Flight Network Map (Student 2 / UI Upgrade) */}
      <NetworkMap />
    </div>
  )
}

export default SearchPage
