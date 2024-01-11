import {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, useColorScheme, BackHandler, Button, TouchableOpacity } from 'react-native';
import { Iconify } from 'react-native-iconify'
import { Montserrat_500Medium } from '@expo-google-fonts/montserrat';


const Cart = ({navigation: { goBack } }) => {
    return(
        <View style={styles.topBar}>
            <TouchableOpacity onPress={() => goBack()}>
                <Iconify icon='clarity:undo-line' size={40} color={'black'} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.title}>Cart</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
        marginTop: 76,
        marginLeft: 15,
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 35,
        flex: 1,
        paddingLeft: 10
    },
    backIcon: {
        alignItems: 'center'
    }
})

export default Cart 