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

const SECTIONS = [
    {
        header: "Account Settings",
        items: [
            {label: "Details"},
            {label: "Change Username"},
            {label: "Change Password"},
            {label: "Payments"},
            {label: "Disable Account"}
        ]
    },
    {
        header: "App Settings",
        items: [
            {label: "Change Font", value: "Montserrat"},
            {label: "Zoom", value: "100"},
        ]
    },
    {
        header: "Legal",
        items: [
            {label: "Legal"},
        ]
    },
        {
        header: "Contact",
        items: [
            {label: "Contact Us", type: "link"},
        ]
    },
        {
        header: "Logout",
        items: [
            {label: "Logout"},
        ]
    },
]

const Settings = ({navigation}) => {
    return (
        <View style={styles.eh}>
            <View style={styles.header}>
            <Text style={styles.titles}>Settings</Text>
            </View>
        {SECTIONS.map(({header, items}) => (
            <View>
                <View>
                    <Text>{header}</Text>
                </View>
                {items.map(({label, index}) => (
                    <View>
                        <Text>{label}</Text>
                    </View>
                ))}
            </View>
            )
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    eh: {
        paddingVertical: 48
    },
    header: {
        marginBottom: 12,
        paddingHorizontal: 24,
    },
    titles: { 
        fontSize: 32,
        fontWeight: 500,
    }
})

export default Settings