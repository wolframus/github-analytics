import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export type Page = {
  name: keyof HomeStackParamList;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
};

export type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  HomeMain: undefined;
  HomeRepositories: undefined;
  HomeOrganizations: undefined;
};

export type ProfileStackParamList = {
  ProfileMain: undefined;
};

export type AuthStackParamList = {
  AuthenticationMain: undefined;
};
