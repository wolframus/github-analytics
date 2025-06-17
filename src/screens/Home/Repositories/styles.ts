import { StyleSheet } from 'react-native';

import { COLORS } from '../../../utils/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  searchInput: {
    padding: 14,
  },
  contentContainer: {
    gap: 5,
    paddingBottom: 14,
    paddingHorizontal: 14,
  },
  emptyListContainer: {
    padding: 20,
    alignItems: 'center',
  },
});
