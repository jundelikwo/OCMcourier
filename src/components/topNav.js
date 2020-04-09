import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  TopNavigation,
} from '@ui-kitten/components';
import ToggleSwitch from 'toggle-switch-react-native';

export default TopNav = ({ title, leftControl }) => {
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

  const [available, setAvailable] = useState({
    checked: true,
    text: "Available"
  });
  const { checked, text } = available;

  const onCheckedChangeCourier = (isChecked) => {
    requestAnimationFrame(() => {
      setAvailable({ ...available, text: text == 'Available' ? "Not Available" : "Available", checked: isChecked })
    })
  };

  return (
    <TopNavigation title={title} style={styles.topNavigation}
      titleStyle={styles.title} leftControl={leftControl} rightControls={availableToggle()} />
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
    width: Dimensions.get('window').width + 5,
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
  toggleText: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#828282',
    fontWeight: 'bold',
    marginRight: 5
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
})