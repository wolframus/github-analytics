import React from 'react';
import { render } from '@testing-library/react-native';

import IconStats from '../src/components/IconStats';

jest.mock('../src/utils/getRandomColor', () => ({
  getRandomColor: jest.fn(() => '#FF0000'),
}));

describe('IconStats', () => {
  const mockData = [
    { icon: 'repo', label: 'Repos', value: 10 },
    { icon: 'star', label: 'Stars', value: 0 },
    { icon: 'issue-opened', label: 'Issues', value: 42 },
  ];

  it('renders all items with label and value', () => {
    const { getByText } = render(<IconStats data={mockData} />);

    expect(getByText('Repos:')).toBeTruthy();
    expect(getByText('10')).toBeTruthy();

    expect(getByText('Stars:')).toBeTruthy();
    expect(getByText('0')).toBeTruthy();

    expect(getByText('Issues:')).toBeTruthy();
    expect(getByText('42')).toBeTruthy();
  });

  it('renders withColor backgroundColor when enabled', () => {
    const { getAllByTestId } = render(
      <IconStats data={mockData} withColor={true} />,
    );

    const coloredViews = getAllByTestId('icon-wrapper');

    coloredViews.forEach(view => {
      const styleArray = Array.isArray(view.props.style)
        ? view.props.style
        : [view.props.style];

      const hasBg = styleArray.some(
        style =>
          typeof style === 'object' && style?.backgroundColor === '#FF0000',
      );

      expect(hasBg).toBe(true);
    });
  });

  it('does not apply backgroundColor when withColor is false', () => {
    const { getAllByTestId } = render(
      <IconStats data={mockData} withColor={false} />,
    );

    const iconWrappers = getAllByTestId('icon-wrapper');

    iconWrappers.forEach(view => {
      const styleArray = Array.isArray(view.props.style)
        ? view.props.style
        : [view.props.style];

      const hasBg = styleArray.some(
        style => style?.backgroundColor === '#FF0000',
      );

      expect(hasBg).toBe(false);
    });
  });
});
