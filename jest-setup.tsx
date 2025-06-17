jest.mock('react-native-bootsplash', () => ({
  hide: jest.fn(),
  show: jest.fn(),
  init: jest.fn(),
}));

jest.mock('react-native-gesture-handler', () => {
  return {
    GestureHandlerRootView: ({ children }: any) => children,
    TouchableOpacity: 'TouchableOpacity',
    ScrollView: 'ScrollView',
  };
});

jest.mock('react-native-vector-icons/Octicons', () => {
  return ({ name, size, color, testID }: any) => {
    const React = require('react');
    const { Text } = require('react-native');
    return <Text testID={testID}>{`${name}-${size}-${color}`}</Text>;
  };
});

jest.mock('react-native-fast-image', () => {
  const React = require('react');
  const { View } = require('react-native');

  const FastImageMock = React.forwardRef(
    ({ testID, style, ...rest }: any, ref: any) => {
      return <View testID={testID} style={style} ref={ref} {...rest} />;
    },
  );

  FastImageMock.resizeMode = {
    contain: 'contain',
    cover: 'cover',
    stretch: 'stretch',
    center: 'center',
  };

  return FastImageMock;
});

jest.mock('react-native-modalize', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    Modalize: React.forwardRef(({ children, ...props }: any, ref: any) => (
      <View ref={ref} testID="modalize" {...props}>
        {children}
      </View>
    )),
  };
});

jest.mock('react-native-safe-area-context', () => {
  return {
    SafeAreaProvider: ({ children }: any) => children,
    SafeAreaView: ({ children }: any) => children,
    useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  };
});

jest.mock('react-native-portalize', () => {
  return {
    Host: ({ children }: any) => children,
    Portal: ({ children }: any) => children,
  };
});

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
    useRoute: () => ({
      params: {},
    }),
  };
});

jest.mock('@react-navigation/elements', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    ...jest.requireActual('@react-navigation/elements'),
    SafeAreaProviderCompat: ({ children }: any) => <View>{children}</View>,
  };
});

jest.mock('@react-navigation/native-stack', () => {
  const React = require('react');
  const { View } = require('react-native');

  return {
    createNativeStackNavigator: () => {
      return {
        Navigator: ({ children }: any) => (
          <View testID="mock-stack-navigator">{children}</View>
        ),
        Screen: ({ children }: any) => (
          <View testID="mock-stack-screen">{children}</View>
        ),
      };
    },
  };
});

jest.mock('react-native-keychain', () => ({
  getGenericPassword: jest.fn(() =>
    Promise.resolve({ username: 'mockUser', password: 'mockPassword' }),
  ),
  setGenericPassword: jest.fn(() => Promise.resolve(true)),
  resetGenericPassword: jest.fn(() => Promise.resolve(true)),
}));

jest.mock('./src/services/api/Base', () => ({
  GitHubService: {
    getInstance: jest.fn(() => ({
      getUser: jest.fn(() => Promise.resolve({ login: 'mock-user' })),
      getEmails: jest.fn(() =>
        Promise.resolve([{ email: 'test@example.com' }]),
      ),
      getOrganizations: jest.fn(() => Promise.resolve([])),
      getRepos: jest.fn(() => Promise.resolve([])),
    })),
  },
}));

jest.mock('@react-navigation/bottom-tabs', () => {
  const React = require('react');
  const { View, Text } = require('react-native');

  return {
    createBottomTabNavigator: () => ({
      Navigator: ({ children }: any) => (
        <View testID="mock-tab-navigator">{children}</View>
      ),
      Screen: ({ name }: any) => (
        <View testID={`mock-tab-screen-${name}`}>
          <Text>{name}</Text>
        </View>
      ),
    }),
  };
});

jest.mock('./src/utils/getRandomColor', () => ({
  getRandomColor: jest.fn(() => 'mocked-color'),
}));
