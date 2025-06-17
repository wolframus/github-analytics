/* eslint-disable react/no-unstable-nested-components */
import Icon from 'react-native-vector-icons/Octicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './home';
import ProfileStack from './profile';
import { RootTabParamList } from './types';
import { COLORS } from '../utils/constants';

const Tab = createBottomTabNavigator<RootTabParamList>();

const getPageIcon = (route: string) =>
  ({
    Profile: 'person',
    Home: 'home',
  }[route]);

const IndexNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <Icon name={getPageIcon(route.name)!} size={size} color={color} />
      ),
      tabBarActiveTintColor: COLORS.accent,
      tabBarInactiveTintColor: COLORS.gray,
    })}
  >
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Profile" component={ProfileStack} />
  </Tab.Navigator>
);

export default IndexNavigator;
