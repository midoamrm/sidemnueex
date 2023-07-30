import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homescroll from './homescroll';
import Settings from './Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import Trans from"./translation"
import Ssearch from"./search"

import Chatbot from "../chatbot";
import Aadd  from "./add"
const Tab = createBottomTabNavigator();
export default function Navgationtab() {
    return (
   
        <Tab.Navigator>
            <Tab.Screen name=" " component={homescroll}  options={{ headerShown: false,
            
            tabBarIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'home' : 'ios-list'}></Icon>
 
            }} />

            <Tab.Screen name="add car" component={Aadd}  options={{ headerShown: false,
            
            tabBarIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'add-circle-outline' : 'ios-list'}></Icon>
 
            }} />

<Tab.Screen name="search" component={Ssearch}  options={{ headerShown: false,
            
            tabBarIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'search-outline' : 'ios-list'}></Icon>
 
            }} />


            <Tab.Screen name="settings" component={Trans}  options={{ headerShown: false
            
            ,tabBarIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'hammer' : 'ios-list'}></Icon>
 
            }} />
            
            <Tab.Screen name="Quick Chat" component={Chatbot}  options={{ headerShown: false
            
            ,tabBarIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'chatbubble-ellipses-outline' : 'ios-list'}></Icon>
 
            }} />
           
          </Tab.Navigator>
      
      
      );
}

const styles = StyleSheet.create({})