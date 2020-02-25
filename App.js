import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, light as theme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './src/navigate/index'
import 'react-native-gesture-handler'

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