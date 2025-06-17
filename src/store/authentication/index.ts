import { create } from 'zustand';
import { authorize } from 'react-native-app-auth';

import { AuthState } from './types';
import { Services } from '../../services/api';
import KeychainStorage from '../../services/KeychainStorage';
import { githubAuthConfig } from '../../utils/githubAuthService';

export const useAuthStore = create<AuthState>(set => ({
  token: null,
  githubLogin: null,
  isAuthenticated: false,
  requestStatus: 'loading',
  logIn: async () => {
    try {
      set({ requestStatus: 'loading' });
      const { accessToken } = await authorize(githubAuthConfig);

      await KeychainStorage.save('token', accessToken);
      const userData = await Services.github.getUser();

      set({
        token: accessToken,
        requestStatus: 'success',
        githubLogin: userData.login,
        isAuthenticated: !!accessToken,
      });
    } catch (err) {
      set({ requestStatus: 'error' });
    }
  },
  autoAuth: async () => {
    const response = await KeychainStorage.get('token');

    if (typeof response === 'boolean') {
      set({
        requestStatus: 'success', // no point of showing error if user is not logged in
      });

      return;
    }

    const userData = await Services.github.getUser();

    set({
      token: response,
      isAuthenticated: true,
      requestStatus: 'success',
      githubLogin: userData.login,
    });
  },
  logOut: async () => {
    await KeychainStorage.remove('token');
    set({
      token: undefined,
      isAuthenticated: false,
      requestStatus: 'sleeping',
    });
  },
}));
