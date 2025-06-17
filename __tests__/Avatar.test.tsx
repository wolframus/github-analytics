import React from 'react';
import { render } from '@testing-library/react-native';

import Avatar from '../src/components/Avatar';
import { COLORS } from '../src/utils/constants';

describe('Avatar component', () => {
  it('renders with default size and shadow', () => {
    const { getByTestId } = render(
      <Avatar
        testID="avatar"
        source={{ uri: 'https://test.com/avatar.png' }}
      />,
    );
    const avatar = getByTestId('avatar');

    const style = flatten(avatar.props.style);

    expect(style.width).toBe(80);
    expect(style.height).toBe(80);
    expect(style.shadowColor).toBe(COLORS.black);
    expect(style.elevation).toBe(5);
  });

  it('renders with small size', () => {
    const { getByTestId } = render(
      <Avatar
        testID="avatar"
        size="small"
        source={{ uri: 'https://test.com/avatar.png' }}
      />,
    );
    const avatar = getByTestId('avatar');

    const style = flatten(avatar.props.style);

    expect(style.width).toBe(40);
    expect(style.height).toBe(40);
  });

  it('does not apply shadow when withShadow is false', () => {
    const { getByTestId } = render(
      <Avatar
        testID="avatar"
        withShadow={false}
        source={{ uri: 'https://test.com/avatar.png' }}
      />,
    );
    const avatar = getByTestId('avatar');

    const style = flatten(avatar.props.style);

    expect(style.shadowColor).toBeUndefined();
    expect(style.elevation).toBeUndefined();
  });

  it('merges custom styles', () => {
    const { getByTestId } = render(
      <Avatar
        testID="avatar"
        source={{ uri: 'https://test.com/avatar.png' }}
        style={{ borderWidth: 2, borderColor: 'red' }}
      />,
    );
    const avatar = getByTestId('avatar');
    const style = flatten(avatar.props.style);

    expect(style.borderWidth).toBe(2);
    expect(style.borderColor).toBe('red');
  });
});

function flatten(styleArray: any) {
  if (!Array.isArray(styleArray)) return styleArray;
  return Object.assign({}, ...styleArray);
}
