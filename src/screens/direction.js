import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView
} from 'react-native';
import {
  TopNavigation, Divider,
} from '@ui-kitten/components';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import GetLocation from 'react-native-get-location';
import ToggleSwitch from 'toggle-switch-react-native';



const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
let LATITUDE;
let LONGITUDE;
let TIME;
let BEARING;
let SPEED;
let ACCURACY;
const LATITUDE_DELTA = 0.046;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

GetLocation.getCurrentPosition({
  enableHighAccuracy: true,
  timeout: 15000,
})
  .then(coords => {
    LATITUDE = coords.latitude;
    LONGITUDE = coords.longitude;
    TIME = coords.time;
    BEARING = coords.bearing;
    SPEED = coords.speed;
    ACCURACY = coords.accuracy;

  })
  .catch(error => {
    const { code, message } = error;
    //  console.warn(code, message);
  })


export const DirectionScreen = ({ navigation }) => {
  console.log('map');
  //driver status
  const [available, setAvailable] = useState({
    checked: true,
    text: "Available"
  });
  const { checked, text } = available;
  const onCheckedChangeCourier = (isChecked) => {
    setAvailable({ ...available, text: text == 'Available' ? "Not Available" : "Available", checked: isChecked })
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Get Direction' style={styles.topNavigation}
        titleStyle={styles.title} />
      <Divider />
      <View style={{ flex: 1 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ height: Dimensions.get('window').height - 100, width: Dimensions.get('window').width }}
          region={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
            time: TIME,
            bearing: BEARING,
            speed: SPEED,
            accuracy: ACCURACY
          }}
          mapType={'hybrid'}
          showsUserLocation={true}
          userLocationPriority={'high'}
          userLocationFastestInterval={4000}
          userLocationUpdateInterval={5000}
          showsIndoorLevelPicker={true}
          loadingEnabled={true}
          loadingIndicatorColor={'#606060'}
          loadingBackgroundColor={'#FFF'}
          isAccessibilityElement={true}
        />
      </View>
    </SafeAreaView >
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
