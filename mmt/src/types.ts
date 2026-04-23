// Shared TypeScript types used across all pages

export interface Flight {
  _id: string
  airline: string
  from: string
  to: string
  date: string
  departureTime: string
  arrivalTime?: string
  prices: {
    economy: number
    economyPlus: number
    business: number
  }
}

export interface BookingPayload {
  flightId: string
  userId: string | null
  flightClass: string
  pricePaid: number
  passenger: {
    name: string
    age: number
  }
}

export interface Booking {
  _id: string
  flightId: Flight
  userId: string
  flightClass: string
  pricePaid: number
  passenger: {
    name: string
    age: number
  }
  createdAt: string
  updatedAt: string
}
