import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStackParamList } from './types';
import AuthenticationScreen from '../screens/Authentication';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthenticationNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AuthenticationMain" component={AuthenticationScreen} />
  </Stack.Navigator>
);

export default AuthenticationNavigation;
