import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import HomeNavItem from '../src/components/HomeNavItem';

describe('HomeNavItem', () => {
  it('calls onPress when pressed', () => {
    const mockOnPress = jest.fn();

    const { getByTestId } = render(
      <HomeNavItem
        icon="organization"
        label="Organizations"
        onPress={mockOnPress}
      />,
    );

    const touchable = getByTestId('home-nav-item');
    fireEvent.press(touchable);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('renders without border when hideBorder is true', () => {
    const { getByTestId } = render(
      <HomeNavItem
        icon="gear"
        label="Settings"
        onPress={() => {}}
        hideBorder
      />,
    );

    const touchable = getByTestId('home-nav-item');

    const styleArray = Array.isArray(touchable.props.style)
      ? touchable.props.style
      : [touchable.props.style];

    const hasTransparentBorder = styleArray.some(
      s => s?.borderBottomColor === '#ffffff00',
    );

    expect(hasTransparentBorder).toBe(true);
  });
});
