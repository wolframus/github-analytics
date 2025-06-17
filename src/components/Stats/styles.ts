import { StyleSheet } from 'react-native';

import { COLORS } from '../../utils/constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 8,
    borderBottomWidth: 1,
    alignItems: 'center',
    borderBottomColor: `${COLORS.gray}50`,
  },
  separator: {
    borderLeftWidth: 1,
    borderLeftColor: `${COLORS.gray}50`,
  },
});
