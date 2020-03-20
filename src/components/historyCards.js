import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import {
  Text, Avatar, Card,
} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import IconI from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';



export default HistoryCardsScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  const navigateSingleOrder = () => {
    requestAnimationFrame(() => {
      console.log(navigation);

      // navigation.navigate('SingleOrder');
    })
  };

  return (
    <View style={{}}>

      <Card style={styles.orderHeadCard}>
        <TouchableOpacity style={styles.orderHead} onPress={navigateSingleOrder}>
          <View style={styles.avatar} >
            <Avatar source={require('../assets/person.png')} />
          </View>
          <View style={styles.orderHeadContent}>
            <View style={{ flex: 2, }}>
              <Text style={styles.clientName}>Brown Samson Dappa</Text>

              <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Processed</Text>
              <Icon style={[styles.statusIcon]} name='ello' size={10} color={'#5AC966'} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <Text style={styles.date}>1 week ago</Text>
              <IconI style={[{ color: '#747D8C', }]} name='ios-arrow-forward' size={25} />
            </View>
          </View>
        </TouchableOpacity>
      </Card>
      <Card style={styles.orderHeadCard}>
        <TouchableOpacity style={styles.orderHead} onPress={navigateSingleOrder}>
          <View style={styles.avatar} >
            <Avatar source={require('../assets/person.png')} />
          </View>
          <View style={styles.orderHeadContent}>
            <View style={{ flex: 2, }}>
              <Text style={styles.clientName}>Brown Samson Dappa</Text>

              <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Processed</Text>
              <Icon style={[styles.statusIcon]} name='ello' size={10} color={'#5AC966'} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <Text style={styles.date}>1 week ago</Text>
              <IconI style={[{ color: '#747D8C', }]} name='ios-arrow-forward' size={25} />
            </View>
          </View>
        </TouchableOpacity>
      </Card>
      <Card style={styles.orderHeadCard}>
        <TouchableOpacity style={styles.orderHead} onPress={navigateSingleOrder}>
          <View style={styles.avatar} >
            <Avatar source={require('../assets/person.png')} />
          </View>
          <View style={styles.orderHeadContent}>
            <View style={{ flex: 2, }}>
              <Text style={styles.clientName}>Brown Samson Dappa</Text>

              <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Processed</Text>
              <Icon style={[styles.statusIcon]} name='ello' size={10} color={'#5AC966'} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <Text style={styles.date}>1 week ago</Text>
              <IconI style={[{ color: '#747D8C', }]} name='ios-arrow-forward' size={25} />
            </View>
          </View>
        </TouchableOpacity>
      </Card>
      <Card style={styles.orderHeadCard}>
        <TouchableOpacity style={styles.orderHead} onPress={navigateSingleOrder}>
          <View style={styles.avatar} >
            <Avatar source={require('../assets/person.png')} />
          </View>
          <View style={styles.orderHeadContent}>
            <View style={{ flex: 2, }}>
              <Text style={styles.clientName}>Brown Samson Dappa</Text>

              <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Processed</Text>
              <Icon style={[styles.statusIcon]} name='ello' size={10} color={'#5AC966'} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <Text style={styles.date}>1 week ago</Text>
              <IconI style={[{ color: '#747D8C', }]} name='ios-arrow-forward' size={25} />
            </View>
          </View>
        </TouchableOpacity>
      </Card>
      <Card style={styles.orderHeadCard}>
        <TouchableOpacity style={styles.orderHead} onPress={navigateSingleOrder}>
          <View style={styles.avatar} >
            <Avatar source={require('../assets/person.png')} />
          </View>
          <View style={styles.orderHeadContent}>
            <View style={{ flex: 2, }}>
              <Text style={styles.clientName}>Brown Samson Dappa</Text>

              <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Processed</Text>
              <Icon style={[styles.statusIcon]} name='ello' size={10} color={'#5AC966'} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <Text style={styles.date}>1 week ago</Text>
              <IconI style={[{ color: '#747D8C', }]} name='ios-arrow-forward' size={25} />
            </View>
          </View>
        </TouchableOpacity>
      </Card>
      <Card style={styles.orderHeadCard}>
        <TouchableOpacity style={styles.orderHead} onPress={navigateSingleOrder}>
          <View style={styles.avatar} >
            <Avatar source={require('../assets/person.png')} />
          </View>
          <View style={styles.orderHeadContent}>
            <View style={{ flex: 2, }}>
              <Text style={styles.clientName}>Brown Samson Dappa</Text>

              <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Processed</Text>
              <Icon style={[styles.statusIcon]} name='ello' size={10} color={'#5AC966'} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <Text style={styles.date}>1 week ago</Text>
              <IconI style={[{ color: '#747D8C', }]} name='ios-arrow-forward' size={25} />
            </View>
          </View>
        </TouchableOpacity>
      </Card>
      <Card style={styles.orderHeadCard}>
        <TouchableOpacity style={styles.orderHead} onPress={navigateSingleOrder}>
          <View style={styles.avatar} >
            <Avatar source={require('../assets/person.png')} />
          </View>
          <View style={styles.orderHeadContent}>
            <View style={{ flex: 2, }}>
              <Text style={styles.clientName}>Brown Samson Dappa</Text>

              <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Processed</Text>
              <Icon style={[styles.statusIcon]} name='ello' size={10} color={'#5AC966'} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <Text style={styles.date}>1 week ago</Text>
              <IconI style={[{ color: '#747D8C', }]} name='ios-arrow-forward' size={25} />
            </View>
          </View>
        </TouchableOpacity>
      </Card>
      <Card style={styles.orderHeadCard}>
        <TouchableOpacity style={styles.orderHead} onPress={navigateSingleOrder}>
          <View style={styles.avatar} >
            <Avatar source={require('../assets/person.png')} />
          </View>
          <View style={styles.orderHeadContent}>
            <View style={{ flex: 2, }}>
              <Text style={styles.clientName}>Brown Samson Dappa</Text>

              <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Processed</Text>
              <Icon style={[styles.statusIcon]} name='ello' size={10} color={'#5AC966'} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <Text style={styles.date}>1 week ago</Text>
              <IconI style={[{ color: '#747D8C', }]} name='ios-arrow-forward' size={25} />
            </View>
          </View>
        </TouchableOpacity>
      </Card>
      <Card style={styles.orderHeadCard}>
        <TouchableOpacity style={styles.orderHead} onPress={navigateSingleOrder}>
          <View style={styles.avatar} >
            <Avatar source={require('../assets/person.png')} />
          </View>
          <View style={styles.orderHeadContent}>
            <View style={{ flex: 2, }}>
              <Text style={styles.clientName}>Brown Samson Dappa</Text>

              <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Processed</Text>
              <Icon style={[styles.statusIcon]} name='ello' size={10} color={'#5AC966'} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <Text style={styles.date}>1 week ago</Text>
              <IconI style={[{ color: '#747D8C', }]} name='ios-arrow-forward' size={25} />
            </View>
          </View>
        </TouchableOpacity>
      </Card>
      <Card style={styles.orderHeadCard}>
        <TouchableOpacity style={styles.orderHead} onPress={navigateSingleOrder}>
          <View style={styles.avatar} >
            <Avatar source={require('../assets/person.png')} />
          </View>
          <View style={styles.orderHeadContent}>
            <View style={{ flex: 2, }}>
              <Text style={styles.clientName}>Brown Samson Dappa</Text>

              <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Processed</Text>
              <Icon style={[styles.statusIcon]} name='ello' size={10} color={'#5AC966'} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <Text style={styles.date}>1 week ago</Text>
              <IconI style={[{ color: '#747D8C', }]} name='ios-arrow-forward' size={25} />
            </View>
          </View>
        </TouchableOpacity>
      </Card>

    </View>
  )

};

const styles = StyleSheet.create({
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
    // backgroundColor: 'yellow',
    flex: 1,
    marginBottom: -10
    // alignItems: 'center'

  },
  orderHead: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: "center",
    // backgroundColor: 'green'
  },
  avatar: {
    flex: 1,
    alignItems: 'flex-start'
  },
  orderHeadContent: {
    flex: 4,
    flexDirection: "row",
    alignItems: 'center',
    // backgroundColor: 'red',

  },
  clientName: {
    fontSize: 16,
    fontFamily: 'Muli',
    color: '#747D8C',
    fontWeight: 'bold',
    marginTop: 2
    // marginVertical: 2
  },
  dot: {
    fontSize: 30,
    color: '#747D8C',
  },
  stops: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    // marginVertical: 2
  },
  stopsCountNum: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    // marginTop: -2,
    fontWeight: 'bold'
  },
  date: {
    fontSize: 9,
    fontFamily: 'Muli',
    color: '#747D8C',
    justifyContent: 'flex-end',
    flex: 1,
    alignSelf: 'flex-start',
    // marginTop: 9,
    // left: 16
  },
  statusIcon: {
    bottom: 17,
    left: 121
  },
})