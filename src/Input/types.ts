import { TextInputProps, ViewStyle } from 'react-native';

export type InputProps = {
  isLoading?: boolean;
  withClear?: boolean;
  containerStyle?: ViewStyle;
} & TextInputProps;
