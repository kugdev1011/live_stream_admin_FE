//  Auth Interfaces

export interface AuthContextProps {
  isAuthenticated: boolean;
  loginUser: () => void;
  logoutUser: () => void;
}

export interface AccountProps {
  id: string;
  username: string;
  display_name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  creator: string;
}
