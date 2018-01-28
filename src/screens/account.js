import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  TopNavigation, Divider, Card,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ToggleSwitch from 'toggle-switch-react-native';

export const AccountScreen = ({ navigation }) => {
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
  const navigatePassword = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Password');
    })
  };
  const navigateProfile = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Profile');
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
    <View style={{ flex: 1 }}>

      <TopNavigation title='Account Settings' style={styles.topNavigation}
        titleStyle={styles.title} rightControls={availableToggle()} />
      <Divider />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ flex: 1 }}>
        <View style={{ marginTop: 5 }}>
          <Card style={styles.headCard}>
            <TouchableOpacity style={styles.cardHead} onPressIn={navigatePassword}>

              <View style={styles.orderHeadContent}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Text style={styles.cardTitle}>Change Password </Text>

                </View>
                <View style={{ flex: 1, }}>
                  <Icon
                    name='chevron-right'
                    width={40}
                    height={40}
                    fill='#747D8C'
                    style={{ alignSelf: 'flex-end' }}
                  />

                </View>
              </View>
            </TouchableOpacity>
          </Card>
          <Card style={styles.headCard}>
            <TouchableOpacity style={styles.cardHead} onPressIn={navigateProfile}>

              <View style={styles.orderHeadContent}>
                <View style={{ flex: 1, }}>
                  <Text style={styles.cardTitle}>Personal Settings </Text>

                </View>
                <View style={{ flex: 1, }}>
                  <Icon
                    name='chevron-right'
                    width={40}
                    height={40}
                    fill='#747D8C'
                    style={{ alignSelf: 'flex-end' }}
                  />

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
  headCard: {
    margin: 0, padding: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.49,
    elevation: 0,
    marginVertical: 5
  },
  cardHead: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
  },
  orderHeadContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#515C6F',
    marginVertical: 2,
    alignSelf: 'flex-start'
  },
  toggleText: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#828282',
    fontWeight: 'bold',
    right: 50,
    position: 'absolute',
  },
  divider: {
    padding: 0.5,
    backgroundColor: '#b8bcc4'
  },
});
