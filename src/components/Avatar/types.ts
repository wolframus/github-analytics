import { FastImageProps } from 'react-native-fast-image';

export type AvatarSize = 'small' | 'default';

export type AvatarProps = {
  size?: AvatarSize;
  withShadow?: boolean;
} & FastImageProps;
