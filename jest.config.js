module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest-setup.tsx'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-navigation|' +
      'react-native|' +
      '@react-native|' +
      '@react-native-community|' +
      '@react-native-picker|' +
      '@react-native-vector-icons|' +
      '@react-navigation/elements)',
  ],
};
