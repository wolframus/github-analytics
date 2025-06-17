import { StyleSheet, ViewStyle } from 'react-native';

import { ButtonType } from './types';
import { COLORS } from '../../utils/constants';

const buttonStyles = {
  danger: {
    backgroundColor: COLORS.red,
  },
  primary: {
    backgroundColor: COLORS.accent,
  },
} as Record<ButtonType, ViewStyle>;

export const buttonTypeStyles = StyleSheet.create(buttonStyles);

export default StyleSheet.create({
  container: {
    gap: 10,
    padding: 10,
    borderRadius: 3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
