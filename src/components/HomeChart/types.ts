import { ViewStyle } from 'react-native';
import { PathProps } from 'react-native-svg';

interface ArcProps {
  cornerRadius?: number;
  padAngle?: number;
  startAngle?: number;
  endAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
}

export type PieDataItem = {
  label: string;
  value: number;
  arc?: ArcProps;
  svg?: PathProps;
  key?: number | string;
};

export type HomeChartProps = {
  withLabels?: boolean;
  data: Array<PieDataItem>;
  containerStyle?: ViewStyle;
};
