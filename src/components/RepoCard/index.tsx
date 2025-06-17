import { memo } from 'react';
import { View } from 'react-native';

import Text from '../Text';
import styles from './styles';
import Avatar from '../Avatar';
import IconStats from '../IconStats';
import { RepoCardProps } from './types';

function RepoCard({ data }: RepoCardProps) {
  const {
    name,
    forks,
    default_branch,
    stargazers_count,
    private: isPrivate,
    owner: { login, avatar_url },
  } = data;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar size="small" source={{ uri: avatar_url }} />
        <Text size="small" weight="bold" color="white">
          {login}
        </Text>
      </View>

      <Text color="white">{name}</Text>

      <IconStats
        withColor={false}
        data={[
          { label: forks, icon: 'repo-forked' },
          { label: stargazers_count, icon: 'star' },
          {
            icon: isPrivate ? 'lock' : 'eye',
            label: isPrivate ? 'Private' : 'Public',
          },
          { label: default_branch, icon: 'git-branch' },
        ]}
      />
    </View>
  );
}

export default memo(RepoCard);
