import Icon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';

export const ChevronBack = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.chevronBack}
      onPress={() => navigation.goBack()}
    >
      <Icon name="chevron-left" size={24} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chevronBack: {
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});
