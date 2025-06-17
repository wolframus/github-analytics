import React from 'react';
import { View } from 'react-native';
import { G, Text as SVGText } from 'react-native-svg';
import { PieChart, PieChartData } from 'react-native-svg-charts';

import Text from '../Text';
import styles from './styles';
import { PieDataItem, HomeChartProps } from './types';
import { COLORS } from '../../utils/constants';

const COLOR_PALETTE: Array<string> = [
  '#C9C8C8',
  '#9F9F9F',
  '#646464',
  '#3C3C3C',
  '#141414',
];

const Labels = ({ slices }: any) => {
  return (
    <G>
      {slices.map((slice: any, index: number) => {
        const { pieCentroid, data } = slice;
        return (
          <SVGText
            key={`label-${index}`}
            x={pieCentroid[0]}
            y={pieCentroid[1]}
            fill={COLORS.white}
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize={12}
            fontWeight="bold"
          >
            {data.value}
          </SVGText>
        );
      })}
    </G>
  );
};

const HomeChart = ({
  data,
  containerStyle,
  withLabels = false,
}: HomeChartProps) => {
  const parsedData: Array<PieDataItem> = data.map((item, idx) => ({
    ...item,
    key: item.key || item.label,
    svg: {
      ...item.svg,
      fill: COLOR_PALETTE[idx],
    },
  }));

  return (
    <View style={[styles.container, containerStyle]}>
      <PieChart
        padAngle={0.03}
        innerRadius={0}
        outerRadius="100%"
        style={styles.chart}
        data={parsedData as Array<PieChartData>}
      >
        {withLabels && <Labels />}
      </PieChart>

      <View style={styles.legend}>
        {parsedData.map(({ label, key, value }, idx) => (
          <View key={key + label + idx} style={styles.legendItemContainer}>
            <View
              style={[
                styles.legendItemSquare,
                { backgroundColor: COLOR_PALETTE[idx] },
              ]}
            >
              <Text color="white" weight="bold" size="xsmall">
                {value}
              </Text>
            </View>
            <Text size="small">{label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HomeChart;
