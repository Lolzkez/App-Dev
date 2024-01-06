import React from "react";
import { useState } from "react";
import { View, Image, StyleSheet, Animated } from 'react-native'

const Splash = () => {
    const imageScale = new Animated.Value(0.2);
    const fade = new Animated.Value(1);

    Animated.timing(fade, {
        toValue:0,
        duration: 1000,
        useNativeDriver: true
    }).start()

    Animated.timing(imageScale, {
        toValue: 0.8,
        duration: 3000,
        useNativeDriver: true
    }).start();

    return (
        <View style = {styles.container}>
            <Animated.Image
            source={require('../assets/Logo.png')}
            style={[styles.Image, { transform: [{ scale: imageScale }] }, { opacity: fade }]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    image: {
        width: 300,
        height: 300
    }
})

export default Splash