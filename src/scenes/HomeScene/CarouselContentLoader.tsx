import React from 'react';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';
import {Rect} from 'react-native-svg';
import {useTheme} from '../../utils/theme';
import color from 'color';

interface ICarouselContentLoader {
  width: number;
  posterWidth: number;
  padding: number;
}

export function CarouselContentLoader({
  width,
  posterWidth,
  padding,
}: ICarouselContentLoader) {
  const theme = useTheme();
  return (
    <SvgAnimatedLinearGradient
      height={posterWidth * 1.5}
      width={width}
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
        rx="4"
        ry="4"
        width={posterWidth}
        height={`${posterWidth * 1.5}`}
      />
      <Rect
        x={posterWidth + padding}
        y="0"
        rx="4"
        ry="4"
        width={posterWidth}
        height={`${posterWidth * 1.5}`}
      />
    </SvgAnimatedLinearGradient>
  );
}
