import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
  ImageBackground
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  TopNavigation, Divider, Toggle,
} from '@ui-kitten/components';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/FontAwesome5';
//  icons
const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline' />
);


export const ActiveScreen = ({ navigation }) => {
  //driver status
  const [available, setAvailable] = useState({
    checked: true,
    text: "Not Available"
  });
  const { checked, text } = available;

  const onCheckedChangeCourier = (isChecked) => {
    // console.warn("isChecked", isChecked)
    setAvailable({ ...available, text: text == 'Available' ? "Not Available" : "Available", checked: isChecked })
  };



  const availableToggle = () => (
    <Toggle
      style={styles.toggle}
      text={available.text}
      text={'Availablity'}
      textStyle={styles.toggleText}
      onChange={onCheckedChangeCourier}
      checked={checked}
    // onPress={this.ToggleAvailability}
    />
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
    // paddingTop: StatusBar.currentHeight / 1.5,
    // right: 9,
    // marginBottom: 10,
    paddingVertical: 5,
    // marginTop: 22,
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
    // top: 3
  },
  toggle: {
    margin: 5,
    flex: 1,
    justifyContent: 'flex-end',
    transform: [{
      scaleX: moderateScale(0.8, 0.1)
    }, {
      scaleY: moderateScale(0.8, 0.2)
    }]
  },
  inputEmail: {
    borderRadius: 7,
    // borderColor: 'blue',
    margin: 10,
    borderColor: '#BDBDBD',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 20,
    alignSelf: "center",
    // height: 50
    // borderWidth: 2
  },
  inputPass: {
    borderRadius: 7,
    borderColor: 'black',
    margin: 10,
    borderColor: '#BDBDBD',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 20,
    alignSelf: "center"
  },
  placeholder: {
    fontSize: 18,
    fontFamily: 'Muli',
    margin: 4
  },
  button: {
    backgroundColor: '#FD901C',
    width: Dimensions.get('window').width - 30,
    alignSelf: 'center',
    // bottom: 15,
    borderRadius: 7,
    padding: 12,
    top: Dimensions.get('window').height - 420

  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
});
