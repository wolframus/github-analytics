import { RequestStatus } from '../shared.store.types';

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  githubLogin?: string | null;
  requestStatus: RequestStatus;
  logIn: () => Promise<void>;
  logOut: () => Promise<void>;
  autoAuth: () => Promise<void>;
}
