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
import { Iconify } from 'react-native-iconify'


const Home = ({ navigation }) => {
    return (
        <View style={styles.top}>
            <Text style={styles.hometext}>Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.cartIcon}>
                <Iconify icon={"clarity:shopping-cart-line"} size={40} color={"black"} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        marginTop: 50
    },
    hometext: {
        display: 'flex',
        flex: 1,
        fontSize: 40,
        paddingLeft: 10,
        fontFamily: "Montserrat_500Medium",
        letterSpacing: -3
    },
    cartIcon: {
        flex: 2,
        alignItems: 'flex-end',
        padding: 5
    }
})

export default Home