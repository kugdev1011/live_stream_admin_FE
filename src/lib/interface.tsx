//  Auth Interfaces

export interface AuthContextProps {
  isAuthenticated: boolean
  loginUser: () => void
  logoutUser: () => void
}
