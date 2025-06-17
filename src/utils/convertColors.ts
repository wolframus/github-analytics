import { TextStyle } from 'react-native';

import { COLORS } from './constants';

export function convertColors(input: typeof COLORS) {
  const result: Record<string, TextStyle> = {};

  Object.entries(input).forEach(([key, value]) => {
    result[key] = { color: value };
  });

  return result;
}
