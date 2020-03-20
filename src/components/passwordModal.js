import React from 'react'
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {
  Text, Layout,
} from '@ui-kitten/components';

export default PasswordModal = () => {
  return (
    <Layout
      style={styles.modalContainer}>
      <Image style={{
        width: 50,
        height: 50,
      }} source={require('../assets/success.png')} />
      <Text style={{
        fontSize: 18,
        fontFamily: 'Muli',
        alignSelf: 'center',
        color: '#FD901C',
        fontWeight: 'bold',
        lineHeight: 23,
        textAlign: 'center',
        margin: 20
      }}>Password Changed Successfully</Text>
      <TouchableOpacity style={{ width: Dimensions.get('window').width - 130, borderRadius: 7, backgroundColor: '#FD901C', padding: 14, alignSelf: 'center', marginTop: 30 }} onPress={toggleModal}>
        <Text style={{
          fontSize: 18,
          fontFamily: 'Muli',
          alignSelf: 'center',
          color: '#fff',
          fontWeight: 'bold',
          lineHeight: 23,
          textAlign: 'center',
        }}>
          Cancel
        </Text>
      </TouchableOpacity>
    </Layout>
  )

};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 90,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 3,
    flexDirection: 'column',
    flex: 1,
    borderRadius: 16
  },
})