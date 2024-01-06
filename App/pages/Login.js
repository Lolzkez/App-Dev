import React, {useState} from 'react';
import { useFonts } from '@expo-google-fonts/montserrat';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard
} from 'react-native';
import AppLoading from 'expo-app-loading';
import {Montserrat_500Medium} from '@expo-google-fonts/montserrat'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import logo from '../assets/Logo.png';

const Login = ({navigation}) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('')
    const [fontsLoaded] = useFonts({
        Montserrat_500Medium
      });
      if (!fontsLoaded) {
        return <Text>Loading...</Text>;
      }

    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.bigContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <View style={styles.logoView}>
                <Image source={logo} resizeMode='contain' style={styles.logo} />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    value={email}
                    style={styles.inputText}
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    placeholder='Email'
                    placeholderTextColor={'#AFAFAF'}
                    onChangeText={email => setEmail(email)}
                />
                <TextInput
                    value={password}
                    style={styles.inputText}
                    secureTextEntry={true}
                    textContentType='password'
                    placeholder='Password'
                    placeholderTextColor={'#AFAFAF'}
                    onChangeText={password => setPassword(password)}
                    
                />
            </View>
            <TouchableOpacity style={styles.loginBtn}
            onPress={() => navigation.navigate('Home')}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.actions}>
                <TouchableOpacity style={{marginHorizontal: 15}}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.reg}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
    }

const styles = StyleSheet.create({
    bigContainer: {
      flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#FFFFFF',
        marginBottom: 40,
      },
      inputView: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
      },
      inputText: {
        height: 50,
        color: '#000000',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
      },
      reg: {
        color: '#000000',
        fontWeight: '500',
        fontFamily: "Montserrat_500Medium"
      },
      forgot: {
        color: '#000000',
        fontWeight: '500',
        fontFamily: "Montserrat_500Medium"
      },
      loginBtn: {
        width: '80%',
        backgroundColor: '#000000',
        borderRadius: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
        fontFamily: "Montserrat_500Medium"
      },
      loginText: {
        color: '#ffffff',
        fontWeight: '800',
        fontFamily: "Montserrat_500Medium"

      },
      actions: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
      logoView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,
        marginTop: 0,
      },
      logo: {
        marginBottom: 50,
        width: 300,
        height: 300,
      },
})


export default Login