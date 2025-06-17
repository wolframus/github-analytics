import React, { createRef } from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import ComingSoonFeatureModalize from '../src/components/ComingSoonFeatureModalize';

describe('ComingSoonFeatureModalize', () => {
  const title = 'Feature Coming Soon';
  const description = 'This feature is under development';
  const onClose = jest.fn();

  it('renders title, text and image correctly', () => {
    const ref = createRef();
    const { getByText, getByTestId } = render(
      <ComingSoonFeatureModalize
        title={title}
        ref={ref as any}
        onClose={onClose}
        text={description}
      />,
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByText(description)).toBeTruthy();
    expect(getByTestId('modalize')).toBeTruthy();
    expect(getByTestId('modalize').props.adjustToContentHeight).toBe(true);
    expect(getByTestId('modalize').props.withHandle).toBe(false);
  });

  it('calls onClose when button is pressed', () => {
    const { getByText } = render(
      <ComingSoonFeatureModalize
        ref={createRef()}
        title={title}
        text={description}
        onClose={onClose}
      />,
    );

    fireEvent.press(getByText('Got it!'));
    expect(onClose).toHaveBeenCalled();
  });
});
