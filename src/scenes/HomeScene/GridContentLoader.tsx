import React from 'react';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';
import {Rect} from 'react-native-svg';
import color from 'color';
import {useTheme} from '../../utils/theme';

interface IGridContentLoader {
  smallPosterWidth: number;
  width: number;
  PADDING_HORIZONTAL: number;
  NUM_COLUMNS: number;
  loading: boolean;
}

export function GridContentLoader({
  PADDING_HORIZONTAL,
  width,
  smallPosterWidth,
  NUM_COLUMNS,
  loading,
}: IGridContentLoader) {
  const theme = useTheme();
  if (!loading) return null;
  return (
    <SvgAnimatedLinearGradient
      height={smallPosterWidth * 1.5 * 3}
      width={width - PADDING_HORIZONTAL}
      duration={1000}
      primaryColor={color(theme.colors.surface)
        .darken(0.8)
        .rgb()
        .string()}
      secondaryColor={color(theme.colors.surface)
        .darken(0.5)
        .rgb()
        .string()}>
      <Rect
        x="0"
        y="0"
        rx={smallPosterWidth * 0.08}
        ry={smallPosterWidth * 0.08}
        width={smallPosterWidth}
        height={smallPosterWidth * 1.5}
      />
      <Rect
        x={smallPosterWidth + PADDING_HORIZONTAL / (NUM_COLUMNS - 1)}
        y="0"
        rx={smallPosterWidth * 0.08}
        ry={smallPosterWidth * 0.08}
        width={smallPosterWidth}
        height={smallPosterWidth * 1.5}
      />
      <Rect
        x={smallPosterWidth * 2 + (PADDING_HORIZONTAL / (NUM_COLUMNS - 1)) * 2}
        y="0"
        rx={smallPosterWidth * 0.08}
        ry={smallPosterWidth * 0.08}
        width={smallPosterWidth}
        height={smallPosterWidth * 1.5}
      />
      <Rect
        x="0"
        y={smallPosterWidth * 1.5 + 5}
        rx={smallPosterWidth * 0.08}
        ry={smallPosterWidth * 0.08}
        width={smallPosterWidth}
        height={smallPosterWidth * 1.5}
      />
      <Rect
        x={smallPosterWidth + PADDING_HORIZONTAL / (NUM_COLUMNS - 1)}
        y={smallPosterWidth * 1.5 + 5}
        rx={smallPosterWidth * 0.08}
        ry={smallPosterWidth * 0.08}
        width={smallPosterWidth}
        height={smallPosterWidth * 1.5}
      />
      <Rect
        x={smallPosterWidth * 2 + (PADDING_HORIZONTAL / (NUM_COLUMNS - 1)) * 2}
        y={smallPosterWidth * 1.5 + 5}
        rx={smallPosterWidth * 0.08}
        ry={smallPosterWidth * 0.08}
        width={smallPosterWidth}
        height={smallPosterWidth * 1.5}
      />
    </SvgAnimatedLinearGradient>
  );
}
