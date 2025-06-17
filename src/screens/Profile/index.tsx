import {
  View,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { useCallback, useState } from 'react';

import styles from './styles';
import Text from '../../components/Text';
import Stats from '../../components/Stats';
import Button from '../../components/Button';
import Avatar from '../../components/Avatar';
import { useUser } from '../../hooks/useUser';
import { COLORS } from '../../utils/constants';
import { useEmails } from '../../hooks/useEmails';
import IconStats from '../../components/IconStats';
import ProfileEmail from '../../components/ProfileEmail';
import { StatsItem } from '../../components/Stats/types';
import { useAuthStore } from '../../store/authentication';
import ProfileSection from '../../components/ProfileSection';
import { IconStatsItem } from '../../components/IconStats/types';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const { logOut } = useAuthStore();

  const { data: user, refetch: refetchUser } = useUser();
  const { data: emails, refetch: refetchEmails } = useEmails();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    try {
      setRefreshing(true);
      await Promise.all([refetchUser(), refetchEmails()]);
    } finally {
      setRefreshing(false);
    }
  }, []);

  if (!user) return <ActivityIndicator size={20} color={COLORS.black} />;

  const {
    name,
    login,
    location,
    followers,
    following,
    avatar_url,
    public_gists,
    private_gists,
    public_repos,
    owned_private_repos,
    total_private_repos,
  } = user;

  const followStats: Array<StatsItem> = [
    { label: 'Following', value: following },
    { label: 'Followers', value: followers },
  ];

  const otherStats: Array<IconStatsItem> = [
    {
      label: 'Total private repos',
      value: total_private_repos,
      icon: 'lock',
    },
    { label: 'Public gists', value: public_gists, icon: 'file-code' },
    { label: 'Public repos', value: public_repos, icon: 'repo' },
    { label: 'Private gists', value: private_gists, icon: 'lock' },
    {
      label: 'Owned private repos',
      value: owned_private_repos,
      icon: 'lock',
    },
  ];

  return (
    <SafeAreaView edges={['top']} style={styles.containerWrapper}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.body}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ProfileSection>
          <View style={styles.profileHeader}>
            <Avatar source={{ uri: avatar_url }} />

            <View style={styles.profileNameContainer}>
              <Text color="white">{name}</Text>
              <Text size="small" weight="bold" color="white">
                {login}
              </Text>
              {!!location && <Text>{location}</Text>}
            </View>
          </View>

          <Stats data={followStats} />
          <IconStats data={otherStats} />
        </ProfileSection>

        {emails?.length && (
          <ProfileSection>
            <View style={styles.emailContainer}>
              {emails.map(({ email, verified }) => (
                <ProfileEmail key={email} isVerified={verified} label={email} />
              ))}
            </View>
          </ProfileSection>
        )}

        <Button type="danger" onPress={logOut}>
          Log Out
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
