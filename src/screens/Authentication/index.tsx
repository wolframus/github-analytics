import { View, StyleSheet } from 'react-native';

import Text from '../../components/Text';
import Button from '../../components/Button';
import { COLORS } from '../../utils/constants';
import { useAuthStore } from '../../store/authentication';

export default function AuthenticationScreen() {
  const { logIn, requestStatus } = useAuthStore();

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text size="large" weight="bold" center>
          Welcome to GitHub Analytics App
        </Text>

        <Text center>
          Track your GitHub repositories, contributions, and insights—all in one
          place
        </Text>
      </View>

      <Button isLoading={requestStatus === 'loading'} onPress={logIn}>
        Authenticate with GitHub
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'space-evenly',
  },
  body: {
    flex: 1,
    gap: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
