/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {AppContainer} from './src/router/router';
import {ThemeProvider} from './src/utils/theme';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar barStyle="light-content" />
      <AppContainer />
    </ThemeProvider>
  );
}
