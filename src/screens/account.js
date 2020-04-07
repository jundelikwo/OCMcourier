import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import {
  Text,
  Divider, Card,
} from '@ui-kitten/components';
import TopNav from '../components/topNav';
import Icon from 'react-native-vector-icons/FontAwesome5';


export const AccountScreen = ({ navigation }) => {

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



  return (
    <SafeAreaView style={{ flex: 1 }}>


      <TopNav title='Account Settings' />
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

    </SafeAreaView >

  )

};

const styles = StyleSheet.create({

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
