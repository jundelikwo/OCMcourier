import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  Text, Avatar, TopNavigationAction,
  TopNavigation, Divider, Card,
} from '@ui-kitten/components';
import IconI from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ToggleSwitch from 'toggle-switch-react-native';
//  icons
const BackIcon = (style) => (
  <IconI style={[{ color: '#515C6F' }]} name='ios-arrow-back' size={25} />
);


export const SingleOrderScreen = ({ navigation }) => {
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

  //nav
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );


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
    <View style={{ backgroundColor: '#f2f3f4' }}>

      <TopNavigation title='Order History' style={styles.topNavigation}
        titleStyle={styles.title} leftControl={BackAction()} rightControls={availableToggle()} />
      <Divider />
      <Card style={styles.orderHeadCard}>
        <View style={styles.orderHead}>
          <View style={styles.avatar} >
            <Avatar style={{}} size='large' source={require('../assets/person.png')} />
          </View>
          <View style={styles.orderHeadContent}>
            <View style={{ flex: 2 }}>
              <Text style={styles.clientName}>Brown Samson Dappa</Text>
              <Text style={styles.orderNumKilo}>Order No. 38392 <Text style={styles.dot}>.</Text> 2.6km</Text>
              <Text style={styles.stops}>Stops: <Text style={styles.stopsCountNum}>3 <Text style={styles.dot}>.</Text></Text> Delivered</Text>
              <Icon style={[styles.statusIcon]} name='ello' size={10} color={'#5AC966'} />
            </View>
            <View style={{ flex: 1, }}>
              <Text style={styles.time}>02/2019 </Text>
            </View>
          </View>
        </View>
      </Card>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ height: Dimensions.get('window').height - 155 }}>
        <Card style={styles.card} >
          <Text style={styles.stopsCountText}>
            Stop 1
          </Text>
          <Text style={styles.restaurantName}>
            Crunchies Restaurant
          </Text>
          <Text style={styles.orderNumKilo}>10mins<Text style={styles.dot}> .</Text> 1.3km <Text style={styles.orderItemStatus}>
            <Text style={styles.dot}>.</Text> Picked Up</Text>
          </Text>
          <Icon style={[styles.statusPickupIcon]} name='ello' size={10} color={'#5AC966'} />
          <Divider style={styles.divider} />
          <View style={styles.addrPhone}>
            <Text style={styles.address}>Address:</Text>
            <Text style={styles.addressContent}>
              6A, Housing Estate Road (Beside Hennyplan winery), opposite First Bank, Off Marian Road, Calabar.
            </Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.addrPhone}>
            <Text style={styles.address}>Phone:</Text>
            <Text style={styles.addressContent}>
              +234 817 496 9237
            </Text>
          </View>
        </Card>
        <Card style={styles.card} >
          <Text style={styles.stopsCountText}>
            Stop 2
          </Text>
          <Text style={styles.restaurantName}>
            The Spot
          </Text>
          <Text style={styles.orderNumKilo}>10mins<Text style={styles.dot}> .</Text> 1.3km <Text style={styles.orderItemStatus}>
            <Text style={styles.dot}>.</Text> Picked Up </Text>
          </Text>
          <Icon style={[styles.statusPickupIcon]} name='ello' size={10} color={'#5AC966'} />
          <Divider style={styles.divider} />
          <View style={styles.addrPhone}>
            <Text style={styles.address}>Address:</Text>
            <Text style={styles.addressContent}>
              6A, Housing Estate Road (Beside Hennyplan winery), opposite First Bank, Off Marian Road, Calabar.
            </Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.addrPhone}>
            <Text style={styles.address}>Phone:</Text>
            <Text style={styles.addressContent}>
              +234 817 496 9237
            </Text>
          </View>
        </Card>
        <Card style={styles.card} >
          <Text style={styles.stopsCountText}>
            Stop 3
          </Text>
          <Text style={styles.restaurantName}>
            Pepper Roni
          </Text>
          <Text style={styles.orderNumKilo}>10mins<Text style={styles.dot}> .</Text> 1.3km <Text style={styles.orderItemStatus}>
            <Text style={styles.dot}>.</Text> Picked Up </Text>
          </Text>
          <Icon style={[styles.statusPickupIcon]} name='ello' size={10} color={'#5AC966'} />
          <Divider style={styles.divider} />
          <View style={styles.addrPhone}>
            <Text style={styles.address}>Address:</Text>
            <Text style={styles.addressContent}>
              6A, Housing Estate Road (Beside Hennyplan winery), opposite First Bank, Off Marian Road, Calabar.
            </Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.addrPhone}>
            <Text style={styles.address}>Phone:</Text>
            <Text style={styles.addressContent}>
              +234 817 496 9237
            </Text>
          </View>
        </Card>
        <Card style={styles.card} >
          <Text style={styles.stopsCountText}>
            Delivered to
          </Text>
          <Text style={styles.restaurantName}>
            Brown Samson Dappa
          </Text>
          <Text style={styles.orderNumKilo}>1.3km</Text>
          <Divider style={styles.divider} />
          <View style={styles.addrPhone}>
            <Text style={styles.address}>Address:</Text>
            <Text style={styles.addressContent}>
              6A, Housing Estate Road (Beside Hennyplan winery), opposite First Bank, Off Marian Road, Calabar.
            </Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.addrPhone}>
            <Text style={styles.address}>Phone:</Text>
            <Text style={styles.addressContent}>
              +234 817 496 9237
            </Text>
          </View>
        </Card>
      </ScrollView>
    </View>
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

  },
  orderHeadCard: {
    margin: 1, padding: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 2.49,
    elevation: 1,

  },
  orderHead: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    paddingVertical: 32,
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
    color: '#FD901C',
    fontWeight: 'bold',
  },
  orderNumKilo: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    fontWeight: 'bold',
    marginTop: 2
  },
  dot: {
    fontSize: 30,
    color: '#747D8C',
  },
  stops: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    marginTop: -2,
  },
  stopsCountNum: {
    fontSize: 12,
    fontFamily: 'Muli',
    color: '#747D8C',
    marginTop: -2,
    fontWeight: 'bold'
  },
  time: {
    fontSize: 10,
    fontFamily: 'Muli',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#747D8C',
    fontSize: 10,
    marginLeft: 33,

  },
  toggleText: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#828282',
    fontWeight: 'bold',
    right: 50,
    position: 'absolute',
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
    color: '#515C6F',
    fontWeight: 'bold',
    fontStyle: 'normal'
  },
  statusIcon: {
    bottom: 17.6,
    left: 115
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
  statusPickupIcon: {
    bottom: 17.5,
    marginLeft: 167,
    marginBottom: -7
  }
});
