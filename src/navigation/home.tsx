import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ChevronBack } from './components';
import HomeScreen from '../screens/Home/Index';
import { HomeStackParamList, Page } from './types';
import HomeRepositories from '../screens/Home/Repositories';
import HomeOrganizations from '../screens/Home/Organizations';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const PAGES: Page[] = [
  {
    name: 'HomeMain',
    component: HomeScreen,
    options: {
      headerShown: false,
    },
  },
  {
    options: {
      title: 'Repositories',
      headerLeft: () => <ChevronBack />,
    },
    name: 'HomeRepositories',
    component: HomeRepositories,
  },
  {
    options: {
      title: 'Organizations',
      headerLeft: () => <ChevronBack />,
    },
    name: 'HomeOrganizations',
    component: HomeOrganizations,
  },
];

const HomeStack = () => (
  <Stack.Navigator screenOptions={{}}>
    {PAGES.map(data => (
      <Stack.Screen key={data.name} {...data} />
    ))}
  </Stack.Navigator>
);

export default HomeStack;
