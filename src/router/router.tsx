import {createStackNavigator} from 'react-navigation-stack';
import * as scenes from '../scenes';
import {createAppContainer} from 'react-navigation';

const _scenes = {};

Object.keys(scenes).map(sceneName => {
  _scenes[sceneName] = {
    screen: scenes[sceneName],
  };
});

const MainNavigator = createStackNavigator(_scenes, {
  initialRouteName: 'HomeScene',
});

export const AppContainer = createAppContainer(MainNavigator);
