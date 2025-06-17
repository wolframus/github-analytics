import { StyleSheet } from 'react-native';

import { COLORS } from '../../../utils/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    gap: 5,
    padding: 14,
  },
  emptyListContainer: {
    padding: 20,
    alignItems: 'center',
  },
});
