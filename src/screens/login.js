import SplashScreen from 'react-native-splash-screen';
import React, { useEffect } from 'react'
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Layout, Text, Input } from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
//icons
const LockIcon = (tintColor) => (
  <View>
    <Icon style={[{ color: '#828282' }]} size={18} name={'lock'} />
  </View>
);
const MailIcon = (tintColor) => (
  <View>
    <Icon style={[{ color: '#828282' }]} size={18} name={'envelope'} />
  </View>
);

export const LoginScreen = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  const navigatePending = () => {
    requestAnimationFrame(() => {
      navigation.navigate('Pending');
    })

  };
  const [Evalue, setValueE] = React.useState('');
  const [Pvalue, setValueP] = React.useState('');


  return (

    <SafeAreaView style={styles.container}>

      <LinearGradient colors={['#D86800', '#d97309', '#e77307', '#EA7D00', '#ed8304', '#ed8302', '#ed8200',]} style={styles.gradient}>

        <Text style={styles.loginText}>Login</Text>
        <Image source={require('../assets/loginVector.png')} style={styles.img} />
        {/* <KeyboardAvoidingView style={styles.form} behavior="padding" keyboardVerticalOffset="200" enabled></KeyboardAvoidingView> */}

        <Layout style={styles.form}>
          {/* <KeyboardAwareScrollView extraHeight={200}> */}
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
          {/* </KeyboardAwareScrollView> */}
        </Layout>

        <TouchableOpacity style={styles.forgotBut}><Text style={styles.forgot}>Forgot password?</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigatePending}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
      </LinearGradient>

    </SafeAreaView >

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
    fontWeight: 'bold',
    padding: 4
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
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 30,
    alignSelf: 'center',
    borderRadius: 15,
    padding: 12,
    top: Dimensions.get('window').height - 500
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
    elevation: 5,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#FD901C',
  }
});