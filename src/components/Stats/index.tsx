import { View } from 'react-native';

import Text from '../Text';
import styles from './styles';
import { StatsProp } from './types';

export default function Stats({ data }: StatsProp) {
  return (
    <View style={styles.container}>
      {data.map(({ label, value }, idx) => (
        <View
          testID={`stats-item-${label}`}
          key={label + value}
          style={[styles.item, idx > 0 && styles.separator]}
        >
          <Text size="small" color="white">
            {label}
          </Text>
          <Text weight="bold" color="white">
            {value}
          </Text>
        </View>
      ))}
    </View>
  );
}
