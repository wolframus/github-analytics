import { forwardRef } from 'react';
import { View } from 'react-native';
import { Portal } from 'react-native-portalize';
import FastImage from 'react-native-fast-image';
import { Modalize } from 'react-native-modalize';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { Modalize as ModalizeRef } from 'react-native-modalize';

import Text from '../Text';
import styles from './styles';
import Button from '../Button';
import { ComingSoonFeatureProps } from './types';
import ComingSoonPicture from '../../../assets/coming-soon.png';

const ComingSoonFeatureModalize = forwardRef<
  ModalizeRef,
  ComingSoonFeatureProps
>(({ title, text, onClose, ...props }, ref) => {
  return (
    <Portal>
      <Modalize
        ref={ref}
        withHandle={false}
        adjustToContentHeight
        rootStyle={styles.containerWrapper}
        {...props}
      >
        <SafeAreaView edges={['bottom']} style={styles.container}>
          <View style={styles.body}>
            <Text size="large" weight="bold">
              {title}
            </Text>
            <Text>{text}</Text>
          </View>

          <FastImage
            resizeMode="contain"
            style={styles.image}
            source={ComingSoonPicture}
          />

          <Button onPress={onClose}>Got it!</Button>
        </SafeAreaView>
      </Modalize>
    </Portal>
  );
});

export default ComingSoonFeatureModalize;
