import * as React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { Card, Button, Avatar } from "react-native-paper";
import { useState } from 'react';
import Counter from './Counter';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function Whiishlist({ route,navigation }) {
    var c = false ;
    const [count, setCount] = useState(0);
   
    deleteItemById = id => {
        const filteredData = this.state.data.filter(item => item.id !== id);
        this.setState({ data: filteredData });
      }
    // nice idea
    if(count<0){
        setCount(0);
    }
   const daat= route.params.arr;
   const dat11=daat.sort(function(a,b){
    return a.id - b.id;
  })
 console.log(dat11);
  var [dat, setdat] = useState(dat11);
 // refresh
 
  
  console.log('//');
  console.log(dat);
   var dat1=[];
    return (

        <View>
            <FlatList
             
                data={dat}
               
                renderItem={({ item }) => (
                   
                      
                    <Card 
                    
                    style={{
                
                        backgroundColor: 'white',
                       
                        
                        }}
                    >
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
                            <Button 
                            onPress={()=>{
                               var dat23= dat.filter(function(value, index, arr){ 
                                    return value.id !== item.id;
                                })
                               for(i=0;i<dat23.length;i++){
                                dat23[i].id=i+1;
                              }
                             // if(dat23.length==0){
                                c=true;
                            //  }
                              setdat(dat23);
                           //  this.deleteItemById(item.id);
                            }}
                            
                            
                            >Deleted from Wishlist </Button>
                            <Counter />
                            <Button  onPress={()=>{
                if(!dat1.find(e=>e.id==item.id)){
                  dat1.push(item);
                };
                
               
      }}>Add to Card  </Button>
                         
                        </Card.Actions>
                        {item.id==dat.length ? (  <Button   onPress={()=>{
                
                navigation.navigate("Card",{
                                                    arr2: dat1,
   })}}>
              Save To Card 
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
        fontSize: 10,
        height: 44,
    },
    image: {
        
        height: 150,
      },
});
