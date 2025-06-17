import { StyleSheet } from 'react-native';

import { COLORS } from '../../utils/constants';

export default StyleSheet.create({
  container: {
    gap: 10,
    padding: 15,
    borderRadius: 6,
    backgroundColor: COLORS.accent,
  },
  header: {
    gap: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
