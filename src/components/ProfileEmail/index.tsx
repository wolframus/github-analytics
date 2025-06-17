import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import Text from '../Text';
import styles from './styles';
import { ProfileEmailProps } from './types';
import { COLORS } from '../../utils/constants';

export default function ProfileEmail({ isVerified, label }: ProfileEmailProps) {
  return (
    <View style={styles.container}>
      <Text size="small" color="white">
        {label}
      </Text>

      <Icon
        testID="profile-email-icon"
        size={20}
        color={isVerified ? COLORS.green : COLORS.red}
        name={isVerified ? 'check-circle-fill' : 'x-circle-fill'}
      />
    </View>
  );
}
