import React, { useState } from 'react'
import {
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Text
} from 'react-native';
import {
  Divider,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TopNav from '../components/topNav';
import StepIndicatorRight from '../components/stepIndicatorRight';
import StepIndicatorLeft from '../components/stepIndicatorLeft';
import UserLeft from '../components/stepUserLeft';
import UserRight from '../components/stepUserRight';

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

  // const [currentPosition, currentPositionValue] = useState(0);

  const [orders, setOrders] = useState([
    {
      'title': 'MAMA A',
      'status': 'Picked Up',
      'distance': '0.3km'
    },
    {
      'title': 'MAMA B',
      'status': 'Picked Up',
      'distance': '0.3km'
    },
    {
      'title': 'MAMA C',
      'status': 'Picked Up',
      'distance': '0.3km'
    },
    {
      'title': 'MAMA D',
      'status': 'Picked Up',
      'distance': '0.3km'
    }
  ]);


  const lastIndexOfOrder = orders.length - 1;


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNav title='Active Order' />
      <Divider />
      <ScrollView style={{ flex: 1 }}>
        <ImageBackground source={require('../assets/grid.png')} style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 50, }}>
            {/* <View style={{
              // // // paddingLeft: 10,
              // height: 300,
              // // // marginBottom: 10,
              // // borderStyle: 'dotted',
              // // borderRadius: -1,
              // borderWidth: 2,
              // borderColor: 'red',
              // // borderTopColor: 'red',
              // // borderEndColor: 'green'
              // borderStyle: 'dotted',
              // borderRadius: 1,
              margin: 30,
              borderStyle: 'dotted',
              borderWidth: 1,
              borderRadius: 1,
              borderColor: 'red',
              width: 1, height: 50,
            }}>
            </View> */}

            {/* <View style={{ height: 0.9, width: '100%', borderRadius: 1, borderWidth: 1, borderColor: 'red', borderStyle: 'dotted', zIndex: 0, }}>
              <View style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 1, backgroundColor: 'white', zIndex: 1 }} />
            </View> */}
            {/* {display} */}

            {/* {orders.map(key => {
              return (
                <Text key={key.title}>Helflo</Text>

              )
            })} */}
            {
              orders.map((order, i) => {
                return (
                  <StepIndicatorLeft distance='0.3km 2min' title='Crunchies Restaurant' status='Picked Up' order={order} index={i} key={i} />
                )
              })
            }

            {/* <StepIndicatorLeft distance='0.3km 2min' title='The Spot' status='Processed' /> */}
            {lastIndexOfOrder % 2 == 0 ? (<UserLeft title='Buyer' status='Waiting' />) : (<UserRight title='Buyer' status='Waiting' />)}




          </View>


        </ImageBackground>
      </ScrollView>
    </SafeAreaView >
  )
};

