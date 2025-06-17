import FastImage from 'react-native-fast-image';

import { AvatarProps } from './types';
import styles, { avatarSizeStyles } from './styles';

export default function Avatar({
  style,
  size = 'default',
  withShadow = true,
  ...props
}: AvatarProps) {
  return (
    <FastImage
      testID="avatar"
      style={[
        styles.container,
        withShadow && styles.shadow,
        avatarSizeStyles[size],
        style,
      ]}
      {...props}
    />
  );
}
