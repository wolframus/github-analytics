import { ActivityIndicator, FlatList, View } from 'react-native';

import styles from './styles';
import Text from '../../../components/Text';
import { COLORS } from '../../../utils/constants';
import { useOrganizations } from '../../../hooks/useOrganizations';
import OrganizationCard from '../../../components/OrganizationCard';

export default function HomeRepositories() {
  const { data, isLoading } = useOrganizations();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        ListFooterComponent={
          isLoading && data.length ? (
            <ActivityIndicator size={20} color={COLORS.accent} />
          ) : null
        }
        ListEmptyComponent={
          isLoading ? (
            <ActivityIndicator size={20} color={COLORS.accent} />
          ) : (
            <View style={styles.emptyListContainer}>
              <Text weight="light">No repositories match your search.</Text>
            </View>
          )
        }
        renderItem={({ item }) => <OrganizationCard data={item} />}
      />
    </View>
  );
}
