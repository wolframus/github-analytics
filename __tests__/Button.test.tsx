import React from 'react';
import { render } from '@testing-library/react-native';

import Button from '../src/components/Button';
import { COLORS } from '../src/utils/constants';

describe('Button component', () => {
  it('renders the button with text', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('renders the button with loading spinner', () => {
    const { getByTestId } = render(<Button isLoading>Loading</Button>);
    expect(getByTestId('activity-indicator')).toBeTruthy();
  });

  it('applies primary background by default', () => {
    const { getByRole } = render(<Button>Primary</Button>);
    const button = getByRole('button');
    const styles = flatten(button.props.style);
    expect(styles.backgroundColor).toBe(COLORS.accent);
  });

  it('applies danger background when type is danger', () => {
    const { getByRole } = render(<Button type="danger">Danger</Button>);
    const button = getByRole('button');
    const styles = flatten(button.props.style);
    expect(styles.backgroundColor).toBe(COLORS.red);
  });

  it('merges custom styles', () => {
    const { getByRole } = render(
      <Button style={{ borderWidth: 1 }} type="danger">
        Styled
      </Button>,
    );
    const button = getByRole('button');
    const styles = flatten(button.props.style);
    expect(styles.borderWidth).toBe(1);
  });
});

function flatten(styleArray: any) {
  if (!Array.isArray(styleArray)) return styleArray;
  return Object.assign({}, ...styleArray);
}
