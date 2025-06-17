import { ModalizeProps } from 'react-native-modalize';

export type ComingSoonFeatureProps = {
  text: string;
  title: string;
  onClose: () => void;
} & ModalizeProps;
