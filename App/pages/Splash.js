import React from "react";
import { useState } from "react";
import { View, Image, StyleSheet, Animated } from 'react-native'

const Splash = () => {
    const imageScale = new Animated.Value(0.1);

    Animated.timing(imageScale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
    }).start();

    return (
        <View style = {styles.container}>
            <Animated.Image
            source={require('../assets/Logo.png')}
            style={[styles.Image, { transform: [{ scale: imageScale }] }]}
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
        width: 200,
        height: 200
    }
})

export default Splash