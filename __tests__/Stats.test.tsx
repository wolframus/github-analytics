import React from 'react';
import { render } from '@testing-library/react-native';

import Stats from '../src/components/Stats';
import { COLORS } from '../src/utils/constants';

const sampleData = [
  { label: 'Followers', value: 100 },
  { label: 'Following', value: 50 },
  { label: 'Repos', value: 20 },
];

describe('Stats component', () => {
  it('renders all stats items', () => {
    const { getByText } = render(<Stats data={sampleData} />);

    sampleData.forEach(({ label, value }) => {
      expect(getByText(label)).toBeTruthy();
      expect(getByText(String(value))).toBeTruthy();
    });
  });

  it('renders separator only for items after the first', () => {
    const { getByTestId } = render(<Stats data={sampleData} />);

    sampleData.forEach(({ label }, idx) => {
      const item = getByTestId(`stats-item-${label}`);
      const itemStyle = Array.isArray(item.props.style)
        ? Object.assign({}, ...item.props.style)
        : item.props.style;

      if (idx === 0) {
        expect(itemStyle.borderLeftWidth).toBeUndefined();
      } else {
        expect(itemStyle.borderLeftWidth).toBe(1);
        expect(itemStyle.borderLeftColor).toBe(`${COLORS.gray}50`);
      }
    });
  });
});
