import { StyleSheet } from 'react-native';

import { COLORS } from '../utils/constants';

const INPUT_SIZE = 40;

export default StyleSheet.create({
  container: {
    gap: 5,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    padding: 5,
    borderRadius: 4,
    height: INPUT_SIZE,
    color: COLORS.white,
    backgroundColor: COLORS.accent,
  },
  clearButton: {
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 4,
    width: INPUT_SIZE,
    height: INPUT_SIZE,
    backgroundColor: COLORS.accent,
  },
  activityIndicator: {
    top: 10,
    right: 10,
    position: 'absolute',
  },
  inputContainer: {
    flex: 1,
  },
});
