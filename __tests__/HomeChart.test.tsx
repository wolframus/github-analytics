import React from 'react';
import { render } from '@testing-library/react-native';

import HomeChart from '../src/components/HomeChart';

const sampleData = [
  { label: 'One', value: 50 },
  { label: 'Two', value: 30 },
  { label: 'Three', value: 20 },
];

describe('HomeChart', () => {
  it('renders pie chart with labels', () => {
    const { getByText } = render(<HomeChart data={sampleData} withLabels />);
    expect(getByText('One')).toBeTruthy();
    expect(getByText('Two')).toBeTruthy();
    expect(getByText('Three')).toBeTruthy();
  });

  it('renders values in legend squares', () => {
    const { getByText } = render(<HomeChart data={sampleData} />);
    expect(getByText('50')).toBeTruthy();
    expect(getByText('30')).toBeTruthy();
    expect(getByText('20')).toBeTruthy();
  });

  it('renders without crashing even with empty data', () => {
    const { toJSON } = render(<HomeChart data={[]} />);
    expect(toJSON()).toBeTruthy();
  });
});
