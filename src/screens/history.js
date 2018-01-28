import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  Text, Avatar,
  TopNavigation, Divider, Card,
} from '@ui-kitten/components';
import IconI from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ToggleSwitch from 'toggle-switch-react-native';

export const HistoryScreen = ({ navigation }) => {
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


  const navigateSingleOrder = () => {
    requestAnimationFrame(() => {
      navigation.navigate('SingleOrder');
    })
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

      <TopNavigation title='Order History' style={styles.topNavigation}
        titleStyle={styles.title} rightControls={availableToggle()} />
      <Divider />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ height: Dimensions.get('window').height - 60 }}>
        <View style={{}}>
          <Card style={styles.orderHeadCard}>
            <TouchableOpacity style={styles.orderHead} onPress={navigateSingleOrder}>
              <View style={styles.avatar} >
                <Avatar style={{}} size='large' source={require('../assets/person.png')} />
              </View>
              <View style={styles.orderHeadContent}>
                <View style={{ flex: 2, alignSelf: 'flex-start', }}>
                  <Text style={styles.clientName}>Brown Samson Dappa</Text>

                  <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Processing</Text>
                  <Icon style={[styles.statusIcon]} name='ello' size={10} color={'#DB463B'} />
                </View>
                <View style={{ flex: 1.1, flexDirection: 'row', alignSelf: 'center', }}>
                  <Text style={styles.date}>1 week ago</Text>
                  <IconI style={[{ color: '#747D8C', right: 7, top: 6 }]} name='ios-arrow-forward' size={25} />

                </View>
              </View>
            </TouchableOpacity>
          </Card>
          <Card style={styles.orderHeadCard}>
            <TouchableOpacity style={styles.orderHead} onPress={navigateSingleOrder}>
              <View style={styles.avatar} >
                <Avatar style={{}} size='large' source={require('../assets/person.png')} />
              </View>
              <View style={styles.orderHeadContent}>
                <View style={{ flex: 2, alignSelf: 'flex-start', }}>
                  <Text style={styles.clientName}>Brown Samson Dappa</Text>

                  <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Processed</Text>
                  <Icon style={[styles.statusIcon]} name='ello' size={10} color={'#5AC966'} />
                </View>
                <View style={{ flex: 1.1, flexDirection: 'row', alignSelf: 'center', }}>
                  <Text style={styles.date}>1 week ago</Text>
                  <IconI style={[{ color: '#747D8C', right: 7, top: 6 }]} name='ios-arrow-forward' size={25} />

                </View>
              </View>
            </TouchableOpacity>
          </Card>
          <Card style={styles.orderHeadCard}>
            <TouchableOpacity style={styles.orderHead} onPress={navigateSingleOrder}>
              <View style={styles.avatar} >
                <Avatar style={{}} size='large' source={require('../assets/person.png')} />
              </View>
              <View style={styles.orderHeadContent}>
                <View style={{ flex: 2, alignSelf: 'flex-start', }}>
                  <Text style={styles.clientName}>Brown Samson Dappa</Text>

                  <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Processed</Text>
                  <Icon style={[styles.statusIcon]} name='ello' size={10} color={'#5AC966'} />
                </View>
                <View style={{ flex: 1.1, flexDirection: 'row', alignSelf: 'center', }}>
                  <Text style={styles.date}>1 week ago</Text>
                  <IconI style={[{ color: '#747D8C', right: 7, top: 6 }]} name='ios-arrow-forward' size={25} />

                </View>
              </View>
            </TouchableOpacity>
          </Card>
          <Card style={styles.orderHeadCard}>
            <TouchableOpacity style={styles.orderHead} onPress={navigateSingleOrder}>
              <View style={styles.avatar} >
                <Avatar style={{}} size='large' source={require('../assets/person.png')} />
              </View>
              <View style={styles.orderHeadContent}>
                <View style={{ flex: 2, alignSelf: 'flex-start', }}>
                  <Text style={styles.clientName}>Brown Samson Dappa</Text>

                  <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Processed</Text>
                  <Icon style={[styles.statusIcon]} name='ello' size={10} color={'#5AC966'} />
                </View>
                <View style={{ flex: 1.1, flexDirection: 'row', alignSelf: 'center', }}>
                  <Text style={styles.date}>1 week ago</Text>
                  <IconI style={[{ color: '#747D8C', right: 7, top: 6 }]} name='ios-arrow-forward' size={25} />

                </View>
              </View>
            </TouchableOpacity>
          </Card>
          <Card style={styles.orderHeadCard}>
            <TouchableOpacity style={styles.orderHead} onPress={navigateSingleOrder}>
              <View style={styles.avatar} >
                <Avatar style={{}} size='large' source={require('../assets/person.png')} />
              </View>
              <View style={styles.orderHeadContent}>
                <View style={{ flex: 2, alignSelf: 'flex-start', }}>
                  <Text style={styles.clientName}>Brown Samson Dappa</Text>

                  <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Processed</Text>
                  <Icon style={[styles.statusIcon]} name='ello' size={10} color={'#5AC966'} />
                </View>
                <View style={{ flex: 1.1, flexDirection: 'row', alignSelf: 'center', }}>
                  <Text style={styles.date}>1 week ago</Text>
                  <IconI style={[{ color: '#747D8C', right: 7, top: 6 }]} name='ios-arrow-forward' size={25} />

                </View>
              </View>
            </TouchableOpacity>
          </Card>
        </View>
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
  orderHeadCard: {
    margin: 0, padding: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 2.49,
    elevation: 3,

  },
  orderHead: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    // paddingVertical: 32,
    // backgroundColor: 'green'
  },
  avatar: {
    flex: 1,
    alignItems: 'flex-start'
  },
  orderHeadContent: {
    flex: 4,
    flexDirection: "row",
    alignItems: 'center'
  },
  clientName: {
    fontSize: 16,
    fontFamily: 'Muli',
    color: '#747D8C',
    fontWeight: 'bold',
    marginVertical: 2
    // justifyContent: 'space-between'
  },
  dot: {
    fontSize: 30,
    color: '#747D8C',
  },
  stops: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    // marginTop: -2,
    marginVertical: 2
  },
  stopsCountNum: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    marginTop: -2,
    fontWeight: 'bold'
  },
  date: {
    fontSize: 9,
    fontFamily: 'Muli',
    // alignSelf: 'center',
    color: '#747D8C',
    // marginLeft: 9,
    justifyContent: 'flex-end',

    flex: 1,
    alignSelf: 'flex-start',
    // alignContent: 'center',
    // top: 8
    marginTop: 9,
    left: 16
    // marginBottom: 40
  },
  toggleStatus: {
    marginLeft: 13,
    marginTop: -33,
    transform: [{
      scaleX: moderateScale(0.7, 0.1)
    }, {
      scaleY: moderateScale(0.7, 0.2)
    }]
  },
  toggleStatusText: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#828282',
    fontWeight: 'bold',
    marginLeft: -99
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
  card: {
    marginVertical: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 0.5,

    elevation: 0.5,
  },
  stopsCountText: {
    fontSize: 12.5,
    fontFamily: 'Muli',
    color: '#828282',
    fontWeight: 'normal',
  },
  restaurantName: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#747D8C',
    fontWeight: 'bold',
    fontStyle: 'normal'
  },
  statusIcon: {
    bottom: 19.5,
    left: 123
  },
  orderItemStatus: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',

  },
  divider: {
    padding: 0.5,
    backgroundColor: '#b8bcc4'
  },
  addrPhone: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6
  },
  address: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    fontWeight: 'bold',
    fontStyle: 'normal',
    flex: 1,
  },
  addressContent: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    fontStyle: 'normal',
    flex: 1.4,
    textAlign: 'left',
    lineHeight: 16

  },
  statusStopIcon: {
    bottom: 17.5, marginLeft: 170, marginBottom: -7
  }

});
