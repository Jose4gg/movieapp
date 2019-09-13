import {createStackNavigator} from 'react-navigation-stack';
import {HomeScene} from '../scenes';
import {createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator(
  {
    HomeScene: {
      screen: HomeScene,
      navigationOptions: {
        title: 'The Movies',
        headerTitleStyle: {
          fontFamily: 'Movie Star',
          fontWeight: 'bold',
          color: '#E53628',
        },
      },
    },
  },
  {
    initialRouteName: 'HomeScene',
  },
);

export const AppContainer = createAppContainer(MainNavigator);
