import { memo } from 'react';
import { View } from 'react-native';

import Text from '../Text';
import styles from './styles';
import Avatar from '../Avatar';
import { OrganizationCardProps } from './types';

function OrganizationCard({ data }: OrganizationCardProps) {
  const { avatar_url, login, description } = data;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar size="small" source={{ uri: avatar_url }} />
        <Text size="small" weight="bold" color="white">
          {login}
        </Text>
      </View>

      <Text size="small" color="white">
        {description || 'Missing description'}
      </Text>
    </View>
  );
}

export default memo(OrganizationCard);
