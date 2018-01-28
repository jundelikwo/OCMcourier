import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
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
    text: "Available"
  });
  const { checked, text } = available;

  const onCheckedChangeCourier = (isChecked) => {
    // requestAnimationFrame(() => {
    // console.warn("isChecked", isChecked)
    setAvailable({ ...available, text: text == 'Available' ? "Not Available" : "Available", checked: isChecked })
    // })
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
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ height: Dimensions.get('window').height - 155 }}>
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
  },
  dot: {
    fontSize: 30,
    color: '#747D8C',
  },
  stops: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
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
    color: '#747D8C',
    justifyContent: 'flex-end',
    flex: 1,
    alignSelf: 'flex-start',
    marginTop: 9,
    left: 16
  },
  toggleText: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#828282',
    fontWeight: 'bold',
    right: 50,
    position: 'absolute',
  },
  statusIcon: {
    bottom: 19.5,
    left: 123
  },

});
