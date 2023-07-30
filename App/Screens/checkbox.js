import React, { useState } from 'react';
import { View ,StyleSheet} from 'react-native';

import Checkbox from 'expo-checkbox';

const checkbox = () => {
    const [isChecked, setChecked] = useState(false);;
   return (
    <View>
     <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
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

export default checkbox;