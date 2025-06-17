import Icon from 'react-native-vector-icons/Octicons';
import { View, TouchableOpacity } from 'react-native';

import Text from '../Text';
import styles from './styles';
import { HomeNavItemProps } from './types';
import { COLORS } from '../../utils/constants';

export default function HomeNavItem({
  icon,
  label,
  onPress,
  hideBorder,
}: HomeNavItemProps) {
  return (
    <TouchableOpacity
      testID="home-nav-item"
      onPress={onPress}
      activeOpacity={0.5}
      style={[styles.container, hideBorder && styles.noBorderContainer]}
    >
      <Icon name={icon} size={20} style={styles.icon} color={COLORS.white} />

      <View style={styles.body}>
        <Text color="white">{label}</Text>
        <Icon size={15} color={COLORS.white} name="chevron-right" />
      </View>
    </TouchableOpacity>
  );
}
