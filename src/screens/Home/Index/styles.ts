import { StyleSheet } from 'react-native';

import { COLORS } from '../../../utils/constants';

export default StyleSheet.create({
  container: {
    gap: 25,
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.white,
  },
  body: {
    gap: 10,
    paddingTop: 15,
    borderRadius: 4,
    paddingBottom: 5,
    backgroundColor: COLORS.accent,
  },
  chart: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
