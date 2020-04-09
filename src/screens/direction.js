import React from 'react'
import {
  View,
  Dimensions,
  SafeAreaView,
  Text
} from 'react-native';
import {
  Divider,
} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import GetLocation from 'react-native-get-location';

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

let initLATITUDE = 4.975715;
let initLONGITUDE = 8.3417;
let initLATITUDE_DELTA = 0.046;
let initLONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

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
  })

export const DirectionScreen = ({ navigation }) => {

  var mapStyle = [{ "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#212a37" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9ca5b3" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#746855" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f3d19c" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#17263c" }] }];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNav title='Get Direction' />
      <Divider />
      <View style={{ flex: 1 }}>
        {LATITUDE ?
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{ height: Dimensions.get('window').height - 100, width: Dimensions.get('window').width }}
            initialRegion={{
              latitude: initLATITUDE,
              longitude: initLONGITUDE,
              latitudeDelta: initLATITUDE_DELTA,
              longitudeDelta: initLONGITUDE_DELTA,
            }}
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
            customMapStyle={mapStyle}
            showsUserLocation={true}
            userLocationPriority={'high'}
            userLocationFastestInterval={4000}
            userLocationUpdateInterval={5000}
            showsIndoorLevelPicker={true}
            loadingEnabled={true}
            loadingIndicatorColor={'#606060'}
            loadingBackgroundColor={'#FFF'}
            isAccessibilityElement={true}
            showsBuildings={true}
            loadingEnabled={true}
            loadingIndicatorColor={'#FD901C'}
          />
          : <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'center', fontSize: 30, textAlign: 'center', margin: 10 }}>
              Can't get device location. Please check your network or location settings!
            </Text>
          </View>}
      </View>
    </SafeAreaView >
  )
};