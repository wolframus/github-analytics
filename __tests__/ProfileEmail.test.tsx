import React from 'react';
import { render } from '@testing-library/react-native';

import { COLORS } from '../src/utils/constants';
import ProfileEmail from '../src/components/ProfileEmail';

describe('ProfileEmail', () => {
  it('renders the email label', () => {
    const { getByText } = render(
      <ProfileEmail label="test@example.com" isVerified={true} />,
    );

    expect(getByText('test@example.com')).toBeTruthy();
  });

  it('shows the check-circle-fill icon when verified', () => {
    const { getByTestId } = render(
      <ProfileEmail label="verified@example.com" isVerified={true} />,
    );

    const icon = getByTestId('profile-email-icon');
    expect(icon).toHaveTextContent(`check-circle-fill-20-${COLORS.green}`);
  });

  it('shows the x-circle-fill icon when not verified', () => {
    const { getByTestId } = render(
      <ProfileEmail label="unverified@example.com" isVerified={false} />,
    );

    const icon = getByTestId('profile-email-icon');
    expect(icon).toHaveTextContent(`x-circle-fill-20-${COLORS.red}`);
  });
});
