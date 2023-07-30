
import React from 'react';
import{StyleSheet ,Platform,View} from "react-native";

import PDFReader from '@hashiprobr/expo-pdf-reader';
const Reader = props => {
  console.log(Platform.OS)
    return( <PDFReader  source={{ uri: props.ur }} /> );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
     backgroundColor:'#000000',
     
    },
    checkbox: {
      left:20,
    },
  });
export default Reader;