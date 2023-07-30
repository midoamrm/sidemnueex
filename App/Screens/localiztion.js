import React from 'react';
import {IMLocalized, init} from './IMLocalized';
import { View, StyleSheet, Text } from 'react-native';
export default function  Localizationn() {
    init();
    return(
        <View style={styles.container} >
            <Text style={styles.welcomeText} >
                {IMLocalized('welcome')}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    welcomeText: {
        fontSize: 16,
    }
})