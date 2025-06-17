import {
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import styles from './styles';
import { InputProps } from './types';
import { COLORS } from '../utils/constants';

export default function Input({
  style,
  withClear,
  isLoading,
  onChangeText,
  containerStyle,
  ...props
}: InputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={onChangeText}
          style={[styles.input, style]}
          placeholderTextColor={COLORS.gray}
          {...props}
        />
        {isLoading && (
          <ActivityIndicator
            size={20}
            color={COLORS.white}
            style={styles.activityIndicator}
          />
        )}
      </View>

      {withClear && (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.clearButton}
          onPress={() => onChangeText?.('')}
        >
          <Icon name="x" size={20} color={COLORS.white} />
        </TouchableOpacity>
      )}
    </View>
  );
}
