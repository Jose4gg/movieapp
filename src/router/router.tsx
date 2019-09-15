import {createStackNavigator} from 'react-navigation-stack';
import {HomeScene, MovieScene} from '../scenes';
import {createAppContainer} from 'react-navigation';
import {CustomBack} from './CustomBackButton';

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
    defaultNavigationOptions: {
      headerTransparent: true,
      headerBackImage: CustomBack,
      headerTruncatedBackTitle: '',
      headerStyle: {
        height: 80,
        backgroundColor: 'transparent',
      },
    },
  },
);

export const AppContainer = createAppContainer(MainNavigator);
