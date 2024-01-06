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
import signup from '../assets/Signup.png';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Register = ({navigation}) => {
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
                <Image source={signup} resizeMode='contain' style={styles.logo} />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    value={email}
                    style={styles.inputText}
                    placeholder='Enter Email Here'
                    placeholderTextColor={'#AFAFAF'}
                    onChangeText={email => setEmail(email)}
                    
                />
                <TextInput
                    value={password}
                    style={styles.inputText}
                    placeholder='Enter Password Here'
                    placeholderTextColor={'#AFAFAF'}
                    onChangeText={password => setPassword(password)}
                />
            </View>
            <TouchableOpacity style={styles.regBtn} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.regText}>Sign Up</Text>
            </TouchableOpacity>
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
      regBtn: {
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
      regText: {
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


export default Register