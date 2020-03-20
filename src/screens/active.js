import React, { useState } from 'react'
import {
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
  SafeAreaView
} from 'react-native';
import {
  Divider,
} from '@ui-kitten/components';
import StepIndicator from 'react-native-step-indicator';
import TopNav from '../components/topNav';

export const ActiveScreen = ({ navigation }) => {

  const labels = ["Crunchies Restaurant", "The Spot", "Pepper Roni", "Buyer",];
  const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 0,
    stepStrokeCurrentColor: '#FD901C',
    stepStrokeWidth: 0,
    stepStrokeFinishedColor: '#FD901C',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#FD901C',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#FD901C',
    stepIndicatorUnFinishedColor: '#C1C1C1',
    stepIndicatorCurrentColor: '#FD901C',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 18,
    stepIndicatorLabelCurrentColor: '#fff',
    stepIndicatorLabelFinishedColor: '#fff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#515C6F',
    labelSize: 11,
    currentStepLabelColor: '#FD901C',
    labelAlign: 'center',
    labelFontFamily: 'Muli'
  }

  const [currentPosition, currentPositionValue] = useState(0);


  const onChangeCurrentPosition = (newPosition) => {
    currentPositionValue(newPosition)
  };



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNav title='Active Order' />
      <Divider />
      <ScrollView style={{ flex: 1 }}>
        <ImageBackground source={require('../assets/grid.png')} style={{ flex: 1 }}>
          <View style={{ height: Dimensions.get('window').height - 90, width: Dimensions.get('window').width + 114, alignItems: 'center' }}>
            <StepIndicator
              customStyles={customStyles}
              direction='vertical'
              currentPosition={currentPosition}
              labels={labels}
              stepCount={4}
              onPress={onChangeCurrentPosition}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView >
  )
};

