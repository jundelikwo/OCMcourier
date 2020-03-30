import React, { useState } from 'react'
import {
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Text

} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import RightBox from './rightBox';

export default StepIndicatorRight = ({ distance, title, status }) => {
  return (

    <View style={{ height: 200, width: Dimensions.get('window').width - 40, alignSelf: 'center', justifyContent: 'center', flexDirection: 'row' }}>
      <TouchableOpacity style={{
        position: 'absolute',
        height: 45,
        width: 45,
        backgroundColor: '#FD901C',
        zIndex: 10,
        borderRadius: 100,
        // top: -55
      }}>
        <RightBox title={title} status={status} />
      </TouchableOpacity>


      <View style={{
        // backgroundColor: 'green',
        height: 200, width: 80, alignSelf: 'center'
      }}>

      </View>
      <View style={{
        // backgroundColor: 'red',
        height: 200, width: 80, alignSelf: 'center', borderLeftWidth: 2, borderLeftColor: '#FD901C',
        borderStyle: 'dotted', borderRadius: 1,
      }}>
        <Text style={{
          color: '#717A89', fontSize: 12, position: 'absolute', top: 100, left: 10,
          // backgroundColor: 'red',
          width: 40
        }}>0.3km 2min</Text>

      </View>

    </View>
  )
};
