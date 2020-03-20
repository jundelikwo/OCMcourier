import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { LoginScreen } from '../screens/login';
import { AppNavigator } from './bottomTab'
import { SingleOrderScreen } from '../screens/singleOrder';
import { PasswordScreen } from '../screens/password';
import { ProfileScreen } from '../screens/presonal';
// import { HistoryCardsScreen } from '../components/historyCards';

const HomeNavigator = createStackNavigator({
  Login: LoginScreen,
  Tab: AppNavigator,
  SingleOrder: SingleOrderScreen,
  Password: PasswordScreen,
  Profile: ProfileScreen,
  // HistoryCards: HistoryCardsScreen
}, {
  headerMode: 'none',
});
export const AppNavigatorScreens = createAppContainer(HomeNavigator);


