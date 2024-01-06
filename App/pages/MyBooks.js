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


const MyBooks = ({navigation}) => {
    return (
        <View style={styles.eh}>
            <Text>My Books</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    eh: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red'
    }
})

export default MyBooks