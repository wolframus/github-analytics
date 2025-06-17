import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';

import IndexNavigation from './navigation';
import { useAuthStore } from './store/authentication';
import AuthenticationNavigation from './navigation/authentication';

export default function Index() {
  const { isAuthenticated, autoAuth, requestStatus } = useAuthStore();

  useEffect(() => {
    if (['error', 'sleeping', 'success'].includes(requestStatus)) {
      BootSplash.hide({ fade: true });
    }
  }, [requestStatus]);

  useEffect(() => {
    autoAuth();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <IndexNavigation /> : <AuthenticationNavigation />}
    </NavigationContainer>
  );
}
