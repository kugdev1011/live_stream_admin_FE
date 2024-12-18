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

export interface LivestreamStatistics {
  title: string;
  videoSize: string;
  views: number;
  duration: string;
}

export enum LIVESTREAM_STATUS {
	NOT_STARTED = "Not Started",
	STREAMING = "Streaming",
	ENDED = "Ended",
	BANNED = "Banned",
	DISCONNECTED = "Disconnected",
	UNBANNING = "Unbanning"
}

export enum LIVESTREAM_TYPE {
	SPORT = "Sport",
	ESPORT = "E-Sport",
}
