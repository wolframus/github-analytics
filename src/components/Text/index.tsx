import { Text as RNText } from 'react-native';

import styles, {
  textSizeStyles,
  textColorStyles,
  textWeightStyles,
} from './styles';
import { TextProps } from './types';

export default function Text({
  style,
  center,
  color = 'accent',
  size = 'default',
  weight = 'default',
  ...rest
}: TextProps) {
  return (
    <RNText
      style={[
        style,
        textSizeStyles[size],
        textColorStyles[color],
        textWeightStyles[weight],
        center && styles.centeredText,
      ]}
      {...rest}
    />
  );
}
