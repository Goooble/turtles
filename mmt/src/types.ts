// Shared TypeScript types used across all pages

export interface Flight {
  _id: string
  airline: string
  from: string
  to: string
  date: string
  departureTime: string
  arrivalTime?: string
  price: number
}

export interface BookingPayload {
  flightId: string
  userId: string | null
  passenger: {
    name: string
    age: number
  }
}

export interface Booking {
  _id: string
  flightId: string
  userId: string
  passenger: {
    name: string
    age: number
  }
  createdAt: string
  updatedAt: string
}
