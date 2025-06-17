import { ActivityIndicator, TouchableOpacity } from 'react-native';

import Text from '../Text';
import { ButtonProps } from './types';
import { COLORS } from '../../utils/constants';
import styles, { buttonTypeStyles } from './styles';

export default function Button({
  style,
  children,
  isLoading,
  type = 'primary',
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      accessibilityRole="button"
      style={[styles.container, buttonTypeStyles[type], style]}
      {...props}
    >
      <Text color="white">{children}</Text>
      {isLoading && (
        <ActivityIndicator
          testID="activity-indicator"
          size={20}
          color={COLORS.white}
        />
      )}
    </TouchableOpacity>
  );
}
