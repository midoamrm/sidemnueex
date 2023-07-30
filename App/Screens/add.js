
import React, { useState, useEffect } from 'react';
import { StyleSheet ,Text, View, Button,ScrollView, Image} from 'react-native';


export default function Aadd() {
const colors = ['#F5CECE', '#FFE3D5', '#FFF5D1', '#F0FAEA', '#D4E9C6'];
const labels = ['Horrible', 'Not Good', 'OK!', 'Good', 'Excellent'];
//const faces  = [crying, sad, straight, laughing, smiling];
const rate=2;
return(

<View style={{
...feedbackStyles.container,
backgroundColor: colors[rate] 
}}>

<Text>{labels[rate]}</Text> 

</View>
    
);

    
}
const feedbackStyles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontWeight: 'bold', 
        marginVertical: 10
    },
    smiley:{
        width: 100, 
        height: 100, 
        margin: 100
    },
    slider:{
        width: '80%'
    },
    sliderThumb:{
        borderRadius: 5, 
        borderWidth: 1, 
        borderColor: '#666'
    },
    buttonContainer:{
        position: 'absolute',
         width: '100%', 
         padding: 15, 
         bottom: 0, 
         backgroundColor: 'black', 
         alignItems: 'center', 
         justifyContent: 'center'
    },
    buttonLabel:{
        color: 'white', 
        fontWeight: 'bold'
    }
});