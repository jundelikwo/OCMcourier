import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//screens
import { SingleOrderScreen } from '../screens/singleOrder';
import { PasswordScreen } from '../screens/password';
import { ProfileScreen } from '../screens/presonal';
import { LoginScreen } from '../screens/login';
import { AppNavigator } from './bottomTab'


const HomeNavigator = createStackNavigator({
  Login: LoginScreen,
  SingleOrder: SingleOrderScreen,
  Password: PasswordScreen,
  Profile: ProfileScreen,
  Tab: AppNavigator
}, {
  headerMode: 'none',
});

export const AppNavigatorScreens = createAppContainer(HomeNavigator);


