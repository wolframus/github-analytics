import { TextProps as RNTextPRops } from 'react-native';

import { COLORS } from '../../utils/constants';

export type TextSize = 'default' | 'small' | 'large' | 'xsmall';
export type TextWeight = 'default' | 'light' | 'bold';
export type TextColor = keyof typeof COLORS;

export type TextProps = {
  size?: TextSize;
  center?: boolean;
  color?: TextColor;
  weight?: TextWeight;
} & RNTextPRops;
