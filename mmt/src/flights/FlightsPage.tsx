// ─────────────────────────────────────────────────────────────────────────────
// FlightsPage.tsx  ·  Student 2's responsibility
//
// TODO (Student 2): Replace this placeholder with your actual implementation.
//
// What goes here:
//   • Read flights from router state: const { flights } = useLocation().state
//   • Render a card for each flight (airline, price, time)
//   • Each card has a "Book" button that navigates to /booking with:
//       navigate('/booking', { state: { flight: selectedFlight } })
//
// Import the Flight type from '../types'
// ─────────────────────────────────────────────────────────────────────────────

function FlightsPage() {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h1>✈ Available Flights</h1>
      <p style={{ color: 'var(--text)' }}>
        Student 2 — replace this file with your flights list.
      </p>
    </div>
  )
}

export default FlightsPage
