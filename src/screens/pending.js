import React, { Component, useState } from 'react'
import {
  Image,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon, Layout, Text, Input, TopNavigationAction, TopNavigation, Divider, Toggle, Card } from '@ui-kitten/components';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline' />
);


export const PendingScreen = ({ navigation }) => {
  const [available, setAvailable] = useState({
    checked: false,
    text: "Not Available"
  });


  const { checked, text } = available;

  const navigateBack = () => {
    navigation.goBack();
  };
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );


  const onCheckedChange = (isChecked) => {
    // console.warn("isChecked", isChecked)
    setAvailable({ ...available, text: text == 'Available' ? "Not Available" : "Available", checked: isChecked })
  };

  const availableToggle = () => (
    <Toggle
      style={styles.toggle}
      text={available.text}
      textStyle={styles.toggleText}
      onChange={onCheckedChange}
      checked={checked}
      size="tiny"
    // onPress={this.ToggleAvailability}
    />
  );

  return (
    <SafeAreaView>
      <TopNavigation title='Pending Orders' style={styles.topNavigation} titleStyle={styles.title} rightControls={availableToggle()} leftControl={BackAction()} />
      <Divider />
      <Card>
        <Text>
          The Maldives, officially the Republic of Maldives, is a small country in South Asia,
          located in the Arabian Sea of the Indian Ocean.
          It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
    </Text>
      </Card>
    </SafeAreaView>
  )

};

const styles = StyleSheet.create({
  topNavigation: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    top: 16,
    right: 9,
    marginBottom: 9,
    marginTop: 15
  },
  title: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#FD901C',
    fontWeight: 'bold',
    // top:
  },
  toggle: {
    margin: 8,
    // left: 70
  },
  toggleText: {
    fontSize: 12,
    fontFamily: 'Muli',
    // alignSelf: 'center',
    color: '#828282',
    fontWeight: 'bold',
    // right: 120
  }
});
