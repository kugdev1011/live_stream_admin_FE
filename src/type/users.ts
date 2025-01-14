import { ROLE } from './role';

export interface UserResponse {
  id: number;
  username: string;
  display_name: string;
  avatar_file_name: string;
  email: string;
  role_id: number;
  role: UserRoleResponse;
  status: USER_STATUS;
  created_by_id: number;
  created_by?: {
    id: number;
    display_name: string;
    username: string;
    email: string;
    created_at: string;
    updated_at: string;
  };
  created_at: string;
  updated_at: string;
}

export interface UserRoleResponse {
  id: number;
  type: ROLE;
  description: string;
  created_at?: string;
  updated_at?: string;
  users?: null;
}

export enum USER_STATUS {
  ONLINE = 'online',
  OFFLINE = 'offline',
  BLOCKED = 'blocked',
}
