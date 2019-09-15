import {createStackNavigator} from 'react-navigation-stack';
import {HomeScene, MovieScene} from '../scenes';
import {createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator(
  {
    HomeScene: {
      screen: HomeScene,
    },
    MovieScene: {
      screen: MovieScene,
    },
  },
  {
    initialRouteName: 'HomeScene',
    // headerMode: 'none',
  },
);

export const AppContainer = createAppContainer(MainNavigator);
