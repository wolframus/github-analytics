import { AuthConfiguration } from 'react-native-app-auth';

export const githubAuthConfig: AuthConfiguration = {
  clientId: '<CLIENT_ID>',
  clientSecret: '<CLIENT_SECRET>',
  redirectUrl: 'com.githubanalytics://oauthredirect',
  additionalHeaders: { Accept: 'application/json' },
  scopes: [
    'read:user',
    'user:email',
    'repo',
    'read:org',
    'read:discussion',
    'read:packages',
    'admin:repo_hook',
    'write:discussion',
    'workflow',
  ],
  serviceConfiguration: {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
  },
};
