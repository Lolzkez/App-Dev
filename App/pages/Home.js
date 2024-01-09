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
    <View style={styles.homeview}>
        <View style={styles.top}>
            <Text style={styles.hometext}>Home</Text>
            <View style={styles.topButtons}>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={[styles.cartIcon, {paddingRight: 10}]}>
                <Iconify icon={"clarity:shopping-cart-line"} size={40} color={"black"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cartIcon}>
                <Iconify icon={"clarity:search-line"} size={40} color={"black"} />
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.select}>
            <TouchableOpacity style={styles.box}>
                <Text style={styles.boxText}>Recommended</Text>
                <Iconify icon={"clarity:check-circle-line"} size={40} color={"black"} style={styles.boxIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Text style={styles.boxText}>New</Text>
                <Iconify icon={"clarity:star-line"} size={40} color={"black"} style={styles.boxIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('My Books')}>
                <Text style={styles.boxText}>My Books</Text>
                <Iconify icon={"clarity:bookmark-line"} size={40} color={"black"} style={styles.boxIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("Settings")}>
                <Text style={styles.boxText}>Settings</Text>
                <Iconify icon={"clarity:settings-line"} size={40} color={"black"} style={styles.boxIcon} />
            </TouchableOpacity>
        </View>
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
    topIcons: {
        padding: 5,
    },
    topButtons: {
        flex: 1,
        flexDirection: 'row-reverse'
    },
    box: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 3,
        padding: 30,
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        position: 'relative'
    },
    select: {
        marginTop: 50
    },
    boxText: {
        fontSize: 30,
        fontFamily: "Montserrat_500Medium",
        letterSpacing: -1,
        flex: 1
    },
    boxIcon: {
        flex: 1,
        alignItems:'flex-end'
    },
    homeview: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 25
    }
})

export default Home