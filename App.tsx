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
import {Provider} from 'react-redux';
import {initStore} from './src/store';

export default function App() {
  const store = initStore();
  return (
    <Provider store={store}>
      <ThemeProvider>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <AppContainer />
      </ThemeProvider>
    </Provider>
  );
}
