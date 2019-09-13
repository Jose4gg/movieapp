/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {AppContainer} from './src/router/router';
import {DarkTheme} from 'react-native-paper';
import {ThemeProvider} from './src/utils/theme';

export default function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <AppContainer />
    </ThemeProvider>
  );
}
