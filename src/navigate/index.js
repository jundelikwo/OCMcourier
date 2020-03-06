import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//screens
import { SingleOrderScreen } from '../screens/singleOrder';
import { PasswordScreen } from '../screens/password';
import { ProfileScreen } from '../screens/presonal';
import { LoginScreen } from '../screens/login';


const HomeNavigator = createStackNavigator({
  Login: LoginScreen,
  SingleOrder: SingleOrderScreen,
  Password: PasswordScreen,
  Profile: ProfileScreen,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);


