import React, { useState } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import {  Button,  } from "react-native-paper";
const Counter = () => {
    const [count, setCount] = useState(0);
   return (
    <View>
    <Button onPress={() => setCount(count + 1)}>
                                +
                            </Button>
                           
                            <Text style={styles.item}  >
                                
                                
                                    {count}
                                
                            </Text>
                            <Button onPress={() => setCount(count - 1)}>
                                -
                            </Button>
</View>
   );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 25,
        fontSize: 18,
        height: 20,
    },
});

export default Counter;