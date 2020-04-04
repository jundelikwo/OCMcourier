import React, { useState } from 'react'
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';
import LeftBox from './leftBox';
import RightBox from './rightBox';


export default StepIndicator = ({ order, index }) => {
  return (

    <View key={index} style={{ height: 200, width: Dimensions.get('window').width - 40, alignSelf: 'center', justifyContent: 'center', flexDirection: 'row' }}>

      <TouchableOpacity style={{
        position: 'absolute',
        height: 30,
        width: 30,
        backgroundColor: '#C1C1C1',
        zIndex: 10,
        borderRadius: 100,
      }}>
        {index % 2 == 0 ? (<RightBox title={order.title} status={order.status} />) : (<LeftBox title={order.title} status={order.status} />)}
      </TouchableOpacity>
      <View style={{
        height: 200, width: 80, alignSelf: 'center'
      }}>

      </View>
      <View style={{
        height: 200, width: 80, alignSelf: 'center', borderLeftWidth: 2, borderLeftColor: '#C1C1C1',
        borderStyle: 'dotted', borderRadius: 1,
      }}>
        <Text style={{
          color: '#717A89', fontSize: 12, position: 'absolute', top: 100, left: index % 2 == 0 ? 10 : -45,
          width: 40
        }}>{order.distance}</Text>

      </View>

    </View>

  )
};
