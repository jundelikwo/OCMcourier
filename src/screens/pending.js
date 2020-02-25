import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon, Layout, Text, Input, TopNavigationAction, TopNavigation, Divider } from '@ui-kitten/components';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);


export const PendingScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  return (
    <SafeAreaView>
      <TopNavigation title='CRUTECH Map' leftControl={BackAction()} />
      <Divider />
    </SafeAreaView>
  )

};
