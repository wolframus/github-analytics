export interface AuthToken {
  accessToken: string;
  tokenType?: string;
}

export interface UserProfile {
  id: number;
  name: string;
  email?: string;
  avatarUrl?: string;
  [key: string]: any;
}
