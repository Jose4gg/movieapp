import {createTheming} from '@callstack/react-theme-provider';
import {DarkTheme} from 'react-native-paper';
const {ThemeProvider, useTheme} = createTheming({
  ...DarkTheme,
  fonts: {
    regular: 'Montserrat',
    medium: 'Montserrat',
    light: 'Montserrat Light',
    thin: 'Montserrat Light',
  },
});
export {ThemeProvider, useTheme};
