import {createTheming} from '@callstack/react-theme-provider';
import {DarkTheme} from 'react-native-paper';
const {ThemeProvider, useTheme} = createTheming(DarkTheme);
export {ThemeProvider, useTheme};
