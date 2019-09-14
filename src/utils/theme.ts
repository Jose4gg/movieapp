import color from 'color';
import {createTheming} from '@callstack/react-theme-provider';
import {DarkTheme, Colors} from 'react-native-paper';
const {ThemeProvider, useTheme} = createTheming({
  ...DarkTheme,
  fonts: {
    regular: 'Montserrat',
    medium: 'Montserrat',
    light: 'Montserrat Light',
    thin: 'Montserrat Light',
  },
  colors: {
    ...DarkTheme.colors,
    placeholder: color(Colors.white)
      .alpha(0.65)
      .rgb()
      .string(),
    text: color(Colors.white)
      .alpha(0.85)
      .rgb()
      .string(),
  },
});
export {ThemeProvider, useTheme};
