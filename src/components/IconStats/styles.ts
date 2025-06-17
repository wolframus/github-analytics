import { StyleSheet, ViewStyle } from 'react-native';

import { IconStatsIconSize } from './types';

export const iconSizeToItemGap = {
  small: { gap: 2 },
  default: { gap: 5 },
} as Record<IconStatsIconSize, ViewStyle>;

export default StyleSheet.create({
  container: {
    rowGap: 10,
    columnGap: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  item: {
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 28,
    height: 28,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
