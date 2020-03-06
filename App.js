import React from 'react';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './src/navigate/bottomTab';
import 'react-native-gesture-handler';
import { default as appTheme } from './custom-theme.json';

const theme = { ...lightTheme, ...appTheme };

import SplashScreen from 'react-native-splash-screen';
SplashScreen.hide();


const App = () => (


  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={theme}>
      <AppNavigator />

    </ApplicationProvider>
  </React.Fragment>
);

export default App;

