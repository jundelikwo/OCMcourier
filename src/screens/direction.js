import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
} from 'react-native';
import {
  TopNavigation, Divider,
} from '@ui-kitten/components';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import GetLocation from 'react-native-get-location';

GetLocation.getCurrentPosition({
  enableHighAccuracy: true,
  timeout: 15000,
})
  .then(location => {
    // console.log(location);


  })
  .catch(error => {
    const { code, message } = error;
    //  console.warn(code, message);
  })
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 4.926956;
const LONGITUDE = 8.330295;
const LATITUDE_DELTA = 0.0201 / 2;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;



export const DirectionScreen = ({ navigation }) => {
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
    <View style={{ backgroundColor: '#f2f3f4', }}>
      <TopNavigation title='Get Direction' style={styles.topNavigation}
        titleStyle={styles.title} rightControls={availableToggle()} />
      <Divider />
      <View style={{}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ height: Dimensions.get('window').height - 90, }}
          region={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
          showsUserLocation={true}
        />
      </View>
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
  toggleText: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#828282',
    fontWeight: 'bold',
    right: 50,
    position: 'absolute',
  },

});
