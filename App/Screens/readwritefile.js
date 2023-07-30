import React, { useState } from 'react';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

import { SafeAreaView, StyleSheet, View,Alert, TouchableOpacity } from 'react-native'
import ButtonText from './buttoncomp';
import AppText from './textcomp'
const { StorageAccessFramework } = FileSystem;
export default function Readwritefile() {

// write
const saveFile = async () => {
    const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
    if (permissions.granted ) {
        let fileUri = FileSystem.documentDirectory + "text.txt";
        await FileSystem.writeAsStringAsync(fileUri, "Hello World", { encoding: FileSystem.EncodingType.UTF8 });
       const infoo= await FileSystem.getInfoAsync(fileUri,{ encoding: FileSystem.EncodingType.UTF8 });
        console.log('info of file:',infoo);
        const info =await FileSystem.readAsStringAsync(fileUri,{ encoding: FileSystem.EncodingType.UTF8 });
       Alert.alert('File content:', JSON.stringify(info), [{ text: 'OK', onPress: () => {} }]);
        console.log("wrtien !!!")
    }
}

    return (
        <SafeAreaView style={{ flex: 1 }}>
         <View style={styles.container}>
          <TouchableOpacity onPress={saveFile} style={styles.buttonStyle}>
            <ButtonText name="WRITE AND Read" />
          </TouchableOpacity>
        </View>
       </SafeAreaView>
       )
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     padding: 10,
     backgroundColor: '#98DBC6',
   },
    buttonStyle: {
     backgroundColor: '#F18D9E',
     padding: 10,
     marginTop: 32,
     minWidth: 250,
     borderRadius: 5
   },
  })