import { StyleSheet } from 'react-native';

import { COLORS } from '../../utils/constants';

export default StyleSheet.create({
  container: {
    gap: 15,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
    borderBottomColor: `${COLORS.gray}50`,
  },
  noBorderContainer: {
    borderBottomColor: COLORS.transparent,
  },
  icon: {
    width: 20,
    height: 20,
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
