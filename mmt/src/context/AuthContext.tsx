import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

interface User {
  _id: string
  email: string
}

interface AuthContextType {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if the user is logged in by calling the protected dashboard endpoint
    axios.get('http://localhost:3000/api/auth/dashboard', {
      withCredentials: true // send the httpOnly cookie
    })
    .then(res => {
      // The backend dashboard returns { msg: "Welcome", user: { id, email, ... } }
      // but wait, let's double check what authController actually returns.
      // it returns `req.user`, which comes from the JWT payload.
      if (res.data.user) {
        setUser({ _id: res.data.user.id, email: res.data.user.email })
      }
    })
    .catch(() => {
      // Not logged in or token expired
      setUser(null)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
