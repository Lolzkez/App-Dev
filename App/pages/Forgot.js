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

const Forgot = ({navigation}) => {
    const [ email, setEmail ] = useState('');
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
            <View style={styles.forgot}>
                <Text style={styles.title}>Forgot Password?</Text>
            </View>
            <Text fontFamily={Montserrat_500Medium} marginBottom={25}>Enter Email here to reset your password:</Text>
            <View style={styles.inputView}>
                <TextInput
                    value={email}
                    style={styles.inputText}
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    placeholder='Enter Email Here'
                    placeholderTextColor={'#AFAFAF'}
                    onChangeText={email => setEmail(email)}
                    
                />
            </View>
            <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.submitText}>Submit</Text>
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
        marginTop: 20
      },
      inputText: {
        height: 50,
        color: '#000000',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
      },
      submitBtn: {
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
      submitText: {
        color: '#ffffff',
        fontWeight: '800',
        fontFamily: "Montserrat_500Medium"
      },
      actions: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
      forgot: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,
        marginTop: 0,
      },
      title: {
        color: '#000000',
        fontSize: 40,
        fontWeight: '900',
        fontFamily: "Montserrat_500Medium",
        margin: 7
      }

})

export default Forgot