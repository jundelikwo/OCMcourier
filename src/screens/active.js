import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  ImageBackground
} from 'react-native';
import {
  TopNavigation, Divider,
} from '@ui-kitten/components';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ToggleSwitch from 'toggle-switch-react-native';
//  icons
const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline' />
);

export const ActiveScreen = ({ navigation }) => {
  //driver status
  const [available, setAvailable] = useState({
    checked: true,
    text: "Available"
  });
  const { checked, text } = available;

  const onCheckedChangeCourier = (isChecked) => {
    // requestAnimationFrame(() => {
    // console.warn("isChecked", isChecked)
    setAvailable({ ...available, text: text == 'Available' ? "Not Available" : "Available", checked: isChecked })
    // })
  };
  const availableToggle = () => (
    <View style={{ marginRight: 18 }}>
      <ToggleSwitch
        isOn={checked}
        onColor='#FD901C'
        offColor="#747D8C"
        label={available.text}
        labelStyle={styles.toggleText}
        size='meduim'
        onToggle={onCheckedChangeCourier}
      />
    </View>
  );
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

  const [currentPosition, currentPositionValue] = React.useState(0);


  const onChangeCurrentPosition = (newPosition) => {
    currentPositionValue(newPosition)
  };



  return (
    <View style={{}}>
      <TopNavigation title='Active Order' style={styles.topNavigation}
        titleStyle={styles.title} rightControls={availableToggle()} />
      <Divider />
      <ScrollView>
        <ImageBackground source={require('../assets/grid.png')} style={{ width: Dimensions.get('window').widths, height: Dimensions.get('window').height }}>
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
    </View >
  )
};


const styles = StyleSheet.create({
  topNavigation: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.58,
    shadowRadius: 1,
    elevation: 3,
    paddingVertical: 5,
    width: Dimensions.get('window').width + 8.8,
    flex: 1,
    flexDirection: 'row',

  },
  title: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#FD901C',
    fontWeight: 'bold',
    marginLeft: 18
  },
  toggleText: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#828282',
    fontWeight: 'bold',
    right: 50,
    position: 'absolute',
  },
});
