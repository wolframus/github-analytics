import { View } from 'react-native';

import styles from './styles';
import { ProfileSectionProps } from './types';

export default function ProfileSection({ children }: ProfileSectionProps) {
  return <View style={styles.container}>{children}</View>;
}
