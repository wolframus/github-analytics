import { StyleSheet } from 'react-native';

import { COLORS } from '../../utils/constants';

export default StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    padding: 10,
  },
  body: {
    flex: 1,
    gap: 20,
  },
  profileHeader: {
    gap: 10,
    flexDirection: 'row',
  },
  profileNameContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    color: COLORS.white,
  },
  emailContainer: {
    gap: 8,
  },
});
