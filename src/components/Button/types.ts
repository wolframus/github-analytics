import { TouchableOpacityProps } from 'react-native';

export type ButtonType = 'primary' | 'danger';

export type ButtonProps = {
  type?: ButtonType;
  children: string;
  isLoading?: boolean;
} & TouchableOpacityProps;
