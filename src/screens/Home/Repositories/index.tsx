import { ActivityIndicator, FlatList, View } from 'react-native';

import styles from './styles';
import Input from '../../../Input';
import Text from '../../../components/Text';
import { COLORS } from '../../../utils/constants';
import { useRepos } from '../../../hooks/useRepos';
import RepoCard from '../../../components/RepoCard';

export default function HomeRepositories() {
  const { data, loadMore, query, setQuery, isLoading } = useRepos();

  return (
    <View style={styles.container}>
      <Input
        withClear
        value={query}
        isLoading={isLoading}
        onChangeText={setQuery}
        containerStyle={styles.searchInput}
        placeholder="Search repositories by name"
      />

      <FlatList
        data={data}
        windowSize={10}
        removeClippedSubviews // i don't think it's needed or critical in our case
        initialNumToRender={20}
        maxToRenderPerBatch={10}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
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
        renderItem={({ item }) => <RepoCard data={item} />}
      />
    </View>
  );
}
