import { useRef } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import Text from '../Text';
import { COLORS } from '../../utils/constants';
import styles, { iconSizeToItemGap } from './styles';
import { IconStatsIconSize, IconStatsProp } from './types';
import { getRandomColor } from '../../utils/getRandomColor';

export default function IconStats({
  data,
  withColor = true,
  iconSize = 'default',
}: IconStatsProp) {
  const sizes = useRef<Record<IconStatsIconSize, number>>({
    small: 14,
    default: 20,
  });

  const colors = useRef<Array<string>>([
    '#1E88E5',
    '#43A047',
    '#E53935',
    '#FB8C00',
    '#8E24AA',
    '#5E35B1',
    '#00ACC1',
    '#F4511E',
    '#3949AB',
    '#00897B',
    '#7CB342',
    '#D81B60',
    '#546E7A',
    '#6D4C41',
    '#FDD835',
  ]);

  return (
    <View style={styles.container}>
      {data.map(({ label, value, icon }, idx) => {
        const parsedValue = value === 0 ? '0' : value;
        return (
          <View
            key={label + icon + parsedValue + idx}
            style={[styles.item, iconSizeToItemGap[iconSize]]}
          >
            <View
              testID="icon-wrapper"
              style={[
                styles.iconWrapper,
                withColor && {
                  backgroundColor: getRandomColor(colors.current),
                },
              ]}
            >
              <Icon
                name={icon}
                color={COLORS.white}
                size={sizes.current[iconSize]}
              />
            </View>
            <Text size="small" color="white">
              {label}
              {!!parsedValue && ':'}
            </Text>
            {!!parsedValue && (
              <Text size="small" color="white" weight="bold">
                {parsedValue}
              </Text>
            )}
          </View>
        );
      })}
    </View>
  );
}
