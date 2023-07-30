import * as React from "react";


import Checkbox from './checkbox';
import { FlatList, Text, View, StyleSheet } from "react-native";
import { Card, Button, Avatar } from "react-native-paper";
import Counter from './Counter';
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
export default function Cardd({ navigation,route }) {
  
  const daat= route.params.arr2;
  const dat=daat.sort(function(a,b){
    return a.id - b.id;
  })
  const buied=[];
  return (
    <View>
      <FlatList
        data={dat}
        renderItem={({ item }) => (
          <Card
          style={{
                
            backgroundColor: 'white',
           
            
            }}>
            <Card.Title
              title={item.CardTitle}
              subtitle={item.descrpition}
              right={LeftContent}
            />
            <Card.Cover source={{ uri: item.srcimg }} />
            <Card.Content>
              <Text style={styles.item} variant="bodyMedium">
                {item.subtitle}
              </Text>
            </Card.Content>
            <Card.Actions>
            <Button>Deleted from card </Button>
            
            <Counter/>
           <Checkbox></Checkbox>
            
              
            
            </Card.Actions>
            {item.id==dat.length ? (  <Button   onPress={()=>{
                
                navigation.navigate("WhishList",{
                                                    arr: data1,
   })}}>
             Proceed To Buy
            </Button>):null}
          </Card>
        )}
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
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  checkbox: {
    left:20,
  },
});
