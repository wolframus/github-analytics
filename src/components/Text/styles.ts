import { StyleSheet, TextStyle } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { COLORS } from '../../utils/constants';
import { TextColor, TextSize, TextWeight } from './types';
import { convertColors } from '../../utils/convertColors';

const sizeStyles = {
  small: {
    fontSize: moderateScale(12),
  },
  default: {
    fontSize: moderateScale(16),
  },
  large: {
    fontSize: moderateScale(25),
  },
  xsmall: {
    fontSize: moderateScale(8),
  },
} as Record<TextSize, TextStyle>;

const weightStyles = {
  default: {
    fontWeight: '400',
  },
  bold: {
    fontWeight: '700',
  },
  light: {
    fontWeight: '300',
  },
} as Record<TextWeight, TextStyle>;

const colorStyles = convertColors(COLORS) as Record<TextColor, TextStyle>;

export const textSizeStyles = StyleSheet.create(sizeStyles);
export const textColorStyles = StyleSheet.create(colorStyles);
export const textWeightStyles = StyleSheet.create(weightStyles);

export default StyleSheet.create({
  centeredText: {
    textAlign: 'center',
  },
});
