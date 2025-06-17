import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

jest.mock('../src/services/api', () => ({
  Services: {
    github: {
      getUser: jest.fn(() => Promise.resolve({ login: 'mock-user' })),
      getEmails: jest.fn(() =>
        Promise.resolve([{ email: 'mock@example.com' }]),
      ),
      getOrganizations: jest.fn(() => Promise.resolve([])),
      getRepos: jest.fn(() => Promise.resolve([])),
    },
  },
}));

jest.mock('../src/services/KeychainStorage', () => ({
  __esModule: true,
  default: {
    get: jest.fn(() =>
      Promise.resolve({ accessToken: 'mock-token', tokenType: 'bearer' }),
    ),
  },
}));

import App from '../App';

test('renders App root component', async () => {
  const screen = render(<App />);
  await waitFor(() => {
    expect(screen.toJSON()).toBeTruthy();
  });
});
