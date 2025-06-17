export type IconStatsIconSize = 'small' | 'default';

export type IconStatsItem = {
  icon: string;
  label: string | number;
  value?: string | number;
};

export type IconStatsProp = {
  withColor?: boolean;
  data: Array<IconStatsItem>;
  iconSize?: IconStatsIconSize;
};
