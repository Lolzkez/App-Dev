import React from "react";
import { useState } from "react";
import { View, StyleSheet, Animated } from 'react-native'

const Splash = () => {
    const imageScale = new Animated.Value(0.5);
    const fade = new Animated.Value(0.5);

    Animated.timing(fade, {
        toValue:0,
        duration: 1000,
        useNativeDriver: true
    }).start()

    Animated.timing(imageScale, {
        toValue: 1.2,
        duration: 3000,
        useNativeDriver: true
    }).start();

    return (
        <View style = {styles.container}>
            <Animated.Image
                source={require('../assets/Logo.png')}
                style={[styles.image, { transform: [{ scale: imageScale }] }, { opacity: fade }]}
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
        width: 600,
        height: 600
    }
})

export default Splash