import { useRef } from 'react';
import { View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styles from './styles';
import Text from '../../../components/Text';
import { useUser } from '../../../hooks/useUser';
import HomeChart from '../../../components/HomeChart';
import HomeNavItem from '../../../components/HomeNavItem';
import { useAuthStore } from '../../../store/authentication';
import { HomeStackParamList } from '../../../navigation/types';
import { PieDataItem } from '../../../components/HomeChart/types';
import ComingSoonFeatureModalize from '../../../components/ComingSoonFeatureModalize';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeIndex() {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const { data: user } = useUser();
  const { githubLogin } = useAuthStore();

  const comingSoonFeatureModalize = useRef<Modalize>(null);

  const NAV_BUTTONS: Array<{
    onPress: () => void;
    icon: string;
    label: string;
  }> = [
    {
      icon: 'repo',
      label: 'Repositories',
      onPress: () => navigation.navigate('HomeRepositories'),
    },
    {
      icon: 'organization',
      label: 'Organizations',
      onPress: () => navigation.navigate('HomeOrganizations'),
    },
    {
      icon: 'issue-opened',
      label: 'Issues',
      onPress: () => comingSoonFeatureModalize.current?.open(),
    },
  ];

  const PIE_DATA: Array<PieDataItem> = user
    ? [
        { label: 'Private repos', value: user.total_private_repos },
        { label: 'Public gists', value: user.public_gists },
        { label: 'Public repos', value: user.public_repos },
        { label: 'Private gists', value: user.private_gists },
        { label: 'Owned private repos', value: user.owned_private_repos },
      ]
    : [];

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Text size="large">
        Welcome back,{' '}
        <Text size="large" weight="bold">
          {githubLogin}
        </Text>
      </Text>

      <View style={styles.body}>
        {NAV_BUTTONS.map((navButton, idx) => (
          <HomeNavItem
            key={navButton.label}
            hideBorder={idx === NAV_BUTTONS.length - 1}
            {...navButton}
          />
        ))}
      </View>

      <HomeChart containerStyle={styles.chart} data={PIE_DATA} />

      <ComingSoonFeatureModalize
        ref={comingSoonFeatureModalize}
        title="Issues"
        text="This feature is coming soon"
        onClose={() => comingSoonFeatureModalize.current?.close()}
      />
    </SafeAreaView>
  );
}
