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
import { Icon, Layout, Text, Input } from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';


export const LoginScreen = ({ navigation }) => {
  const [Evalue, setValueE] = React.useState('');
  const [Pvalue, setValueP] = React.useState('');
  //icons
  const LockIcon = (style) => (
    <Icon {...style} fill='#828282' name='lock-outline' />
  );
  const MailIcon = (style) => (
    <Icon {...style} fill='#828282' name='email-outline' />
  );
  const navigatePending = () => {
    navigation.navigate('Pending');
  };

  // const emailIcon = (style) => (
  //   <Image
  //     style={styles.icon}
  //     source={require('../assets/emailIcon.png')}
  //   />
  // );
  // const Lockk = (style) => (
  //   <Image
  //     style={styles.icon}
  //     // source={require('../assets/passWordIcon.png')}
  //     source={{ uri: '../assets/passWordIcon.png' }}
  //   />
  // );

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} />
      <LinearGradient colors={['#D86800', '#d97309', '#e77307', '#EA7D00', '#ed8304', '#ed8302', '#ed8200',]} style={styles.gradient}>
        <Text style={styles.loginText}>Login</Text>
        <Image source={require('../assets/loginVector.png')} style={styles.img} />
        <Layout style={styles.form}>
          <Input
            value={Evalue}
            placeholder='Email'
            style={styles.inputEmail}
            textStyle={styles.inputText}
            labelStyle={styles.inputLabel}
            captionTextStyle={styles.inputCaption}
            onChangeText={setValueE}
            icon={MailIcon}
            textStyle={styles.placeholder}
            placeholderTextColor={'#828282'}

          />
          <View style={styles.lineStyle} />
          <Input
            value={Pvalue}
            placeholder='Password'
            style={styles.inputPass}
            textStyle={styles.inputText}
            labelStyle={styles.inputLabel}
            captionTextStyle={styles.inputCaption}
            onChangeText={setValueP}
            icon={LockIcon}
            secureTextEntry={true}
            textStyle={styles.placeholder}
            placeholderTextColor={'#828282'}


          />
        </Layout>

        <TouchableOpacity style={styles.forgotBut}><Text style={styles.forgot}>Forget password?</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigatePending}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  gradient: {
    flex: 1,
  },
  loginText: {
    fontSize: 24,
    fontFamily: 'Muli',
    textAlign: 'center',
    marginTop: 87,
    color: '#ffffff',
    // backgroundColor: 'transparent',
    fontWeight: 'bold',
    padding: 2
  },
  loginTextBut: {
    fontSize: 18,
    fontFamily: 'Muli',
    textAlign: 'center',
    marginTop: 97,
    color: '#FD901C',
    backgroundColor: 'transparent',

  },
  placeholder: {
    fontSize: 13,
    fontFamily: 'Muli',
    fontWeight: 'bold',
  },
  img: {
    alignSelf: 'center',
    marginTop: 70,


  },
  inputEmail: { borderRadius: 12, margin: 2, borderColor: 'transparent', backgroundColor: '#fff', },
  inputPass: { borderRadius: 12, margin: 2, borderColor: 'transparent', backgroundColor: '#fff', },
  inputText: { color: '#3366FF' },
  inputLabel: { color: '#3366FF' },
  inputCaption: { color: '#3366FF' },
  icon: {
    // width: 50,
    // height: 20
    // alignSelf: 'center',
    // left: 30
    color: 'red',
    borderColor: 'transparent'

  },
  forgotBut: {
    padding: 2,
    top: 146,
    left: 25,
  },
  forgot: {
    fontSize: 13,
    fontFamily: 'Muli',
    // textAlign: 'center',

    color: '#ffffff',
    backgroundColor: 'transparent',
    // fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 30,
    alignSelf: 'center',
    // bottom: 15,
    borderRadius: 15,
    padding: 12,
    top: 250

  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Muli',
    alignSelf: 'center',
    color: '#FD901C',
    fontWeight: 'bold'
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: Dimensions.get('window').width - 40,
    height: 105,
    alignSelf: 'center',
    top: 130,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 10,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#FD901C',
    // margin: -1,
  }
});