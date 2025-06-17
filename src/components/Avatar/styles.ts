import { StyleSheet } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';

import { AvatarSize } from './types';
import { COLORS } from '../../utils/constants';

const sizeStyles = {
  default: {
    width: 80,
    height: 80,
  },
  small: {
    width: 40,
    height: 40,
  },
} as Record<AvatarSize, ImageStyle>;

export const avatarSizeStyles = StyleSheet.create(sizeStyles);

export default StyleSheet.create({
  container: {
    borderRadius: 200,
  },
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
