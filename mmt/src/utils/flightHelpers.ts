import { cityNames } from '../components/NetworkMap/cities'

export const getCityName = (code: string) => {
  return cityNames[code] || code
}

export const getTerminal = (code: string) => {
  // Generate a deterministic pseudo-random terminal number based on the airport code
  const num = (code.charCodeAt(0) + code.charCodeAt(1) + code.charCodeAt(2)) % 4 + 1
  return `Terminal ${num}`
}

export const formatLocation = (code: string) => {
  return `${getCityName(code)} (${code}) - ${getTerminal(code)}`
}
