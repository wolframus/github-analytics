import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    gap: 12,
    flexDirection: 'row',
  },
  chart: {
    width: 160,
    height: 160,
  },
  legend: {
    flex: 1,
    gap: 12,
    justifyContent: 'center',
  },
  legendItemContainer: {
    gap: 8,
    flexDirection: 'row',
  },
  legendItemSquare: {
    width: 16,
    height: 16,
    borderRadius: 1.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
