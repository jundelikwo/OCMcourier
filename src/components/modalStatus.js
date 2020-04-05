import React, { useState } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';


export default ModalStatus = ({ isChecked }) => {


  const [transitStatus, setTransitStatus] = useState({
    transit: false,
    status: "In-Transit"
  });
  const { transit, status } = transitStatus;
  const onCheckedChangeOrder = (isChecked) => {
    setTransitStatus({ ...transitStatus, status: status == 'Picked Up' ? "In-Transit" : "Picked Up", transit: isChecked })
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20, }}>
      <ToggleSwitch
        isOn={transit}
        onColor='#FD901C'
        offColor="#747D8C"
        label={transitStatus.status}
        labelStyle={styles.toggleStatusText}
        size='small'
        onToggle={onCheckedChangeOrder}
      />

    </View>
  )

};

const styles = StyleSheet.create({
  toggleStatusText: {
    fontSize: 14,
    fontFamily: 'Muli',
    color: '#747D8C',
    fontWeight: 'bold',
  },
})