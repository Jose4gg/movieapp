import {createStackNavigator} from 'react-navigation-stack';
import {HomeScene} from '../scenes';
import {createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator(
  {
    HomeScene: {
      screen: HomeScene,
    },
  },
  {
    initialRouteName: 'HomeScene',
    headerMode: 'none',
  },
);

export const AppContainer = createAppContainer(MainNavigator);
