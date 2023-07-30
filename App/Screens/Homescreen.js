import { StyleSheet,View,Text ,Button} from "react-native";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer"
import CarCardDescrption from "./CarCardDescrption";
import Whiishlist from "./Whiishlist";
import Navgationtab from "./Navgationtab";
import Scanner from "./Scanner";
import Cardd from "./Card";
import Ccamera from "./Camera";
import Pdfread from "./Pdfviewier";
import Loading from "./Loading";
import UpLoading from "./Uploading";
import UPdownload from "./updateddownloading"
import Dropdownselect from "./drropdownselectlist"
import Dropdownsmulti from "./dropdownmultipleselectlist"
import Accordioncollapse from "./accordiocollapse"
import Alerts from "./alerts"
import Hijrigeogedate from "./hijriandgegodate"
import Readwritefile from "./readwritefile"
import  FormikEmailForm from "./formvalidcustom"
import Trans from"./translation"
import Mappp from "./map";
import Savetoroll from "./savetocameraroll"
import AnimatedStyleUpdateExample from "./animtion"
import Contact from "./getconcts"
import Restapi from "./callingrestsoap"
import Sessiontimeout from "./sessiontimeoutapp"
import Datepickerr from "./datepicker"
import Pushnoti from "./pushnotifactionexpo"
import Otpp from "./otpp"
import Localauth from "./localauth"
import Roott from "./roott"
import FileUploader from "./uploadings"
import Chatbot from "../chatbot";
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function HomeScreen({ navigation }) {
  // to change from left to rigth just type name by عربي
// automatically will switch to 
  return (
    
    <Drawer.Navigator initialRouteName="Navgationtab"
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      
      drawerActiveBackgroundColor: '#aa18ea',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
      drawerLabelStyle: {
        marginLeft: -25,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
      },
    }}
>
      
      <Drawer.Screen name="Home"  component={Navgationtab}
      
      options={{
        
        

     
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'home' : 'ios-list'}></Icon>
    }}
      />
      
      <Drawer.Screen name="CarCardDescrption" component={CarCardDescrption}
       options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'clipboard' : 'ios-list'}></Icon>
    }}
      />
      <Drawer.Screen name="WhishList" component={Whiishlist}
      options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'heart-half' : 'ios-list'}></Icon>
    }}
      />
      <Drawer.Screen name="Scanner" component={Scanner} 

      options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'contract' : 'ios-list'}></Icon>
    }}
      />
      <Drawer.Screen name="Card" component={Cardd}
      options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'card' : 'ios-list'}></Icon>
    }}
      />
     
       <Drawer.Screen name="video record" component={Ccamera}
       options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'videocam' : 'ios-list'}></Icon>
    }}
       
       />  
      <Drawer.Screen name="pdfreader" component={Pdfread} 
       options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'book' : 'ios-list'}></Icon>
    }}
      />
      
      <Drawer.Screen name="Loading And Progres" component={Loading}
      options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'refresh' : 'ios-list'}></Icon>
    }}
      />
    
      <Drawer.Screen name="upLoading" component={UpLoading}
       options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'cloud-upload' : 'ios-list'}></Icon>
    }}
      />
     
      <Drawer.Screen name="downloading" component={UPdownload}
      options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'download' : 'ios-list'}></Icon>
    }}
      />
      
      <Drawer.Screen name="Dropdownselect" component={Dropdownselect} 
      
      options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'code-download' : 'ios-list'}></Icon>
    }}
      />
      <Drawer.Screen name="DropdownMultipleselectList" component={Dropdownsmulti}
      
      options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'code-download' : 'ios-list'}></Icon>
    }}
      />
      <Drawer.Screen name="AccordionCollapse" component={Accordioncollapse} 
      
      options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'list' : 'ios-list'}></Icon>
    }}
      />
      
      <Drawer.Screen name="Alerts" component={Alerts}
      options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'alert' : 'ios-list'}></Icon>
    }}
      />
     
      <Drawer.Screen name="Hijrigeogedate" component={Hijrigeogedate}
      options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'calendar' : 'ios-list'}></Icon>
    }}
      />
      
      <Drawer.Screen name="Readwritefile" component={Readwritefile}
       options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'document' : 'ios-list'}></Icon>
    }}
      />
      
      <Drawer.Screen name="validtionform" component={FormikEmailForm}
      options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'paper' : 'ios-list'}></Icon>
    }}
      />
     
      <Drawer.Screen name="Mapp" component={Mappp} 
        options={{
          drawerIcon: config => <Icon
              size={23}
              name={Platform.OS === 'android' ? 'map' : 'ios-list'}></Icon>
      }}/>
      <Drawer.Screen name="Savetocameraroll" component={Savetoroll}
       options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'image' : 'ios-list'}></Icon>
    }}
      />
      <Drawer.Screen name="Animtion" component={AnimatedStyleUpdateExample} 
      options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'happy' : 'ios-list'}></Icon>
    }}
      />
      <Drawer.Screen name="Contact" component={Contact} 
      options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'call' : 'ios-list'}></Icon>
    }}
      />
    
      <Drawer.Screen name="Restapi" component={Restapi} 
        options={{
          drawerIcon: config => <Icon
              size={23}
              name={Platform.OS === 'android' ? 'thunderstorm' : 'ios-list'}></Icon>
      }}/>
      
     <Drawer.Screen name="Sessiontimeout" component={Sessiontimeout} 
       options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'hourglass' : 'ios-list'}></Icon>
    }}
     />
     
     <Drawer.Screen name="Datepicker" component={Datepickerr} 
     options={{
      drawerIcon: config => <Icon
          size={23}
          name={Platform.OS === 'android' ? 'calendar' : 'ios-list'}></Icon>
  }}/>
 
     <Drawer.Screen name="Pushnoti" component={Pushnoti}
     options={{
      drawerIcon: config => <Icon
          size={23}
          name={Platform.OS === 'android' ? 'notifications-outline' : 'ios-list'}></Icon>
  }} />

     <Drawer.Screen name="Otpp" component={Otpp}
      options={{
        drawerIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'timer' : 'ios-list'}></Icon>
    }}
     />


     <Drawer.Screen name="translation" component={Trans}
     options={{
      drawerIcon: config => <Icon
          size={23}
          name={Platform.OS === 'android' ? 'logo-tumblr' : 'ios-list'}></Icon>
  }}
     />
    
     <Drawer.Screen name="Localauth" component={Localauth}
     options={{
      drawerIcon: config => <Icon
          size={23}
          name={Platform.OS === 'android' ? 'keypad' : 'ios-list'}></Icon>
  }} />
     <Drawer.Screen name="checkroot" component={Roott}
     
     options={{
      drawerIcon: config => <Icon
          size={23}
          name={Platform.OS === 'android' ? 'eye' : 'ios-list'}></Icon>
  }}
     />
    <Drawer.Screen name="Chat Bot  " component={Chatbot}
     
     options={{
      drawerIcon: config => <Icon
          size={23}
          name={Platform.OS === 'android' ? 'chatbubble-ellipses-outline' : 'ios-list'}></Icon>
  }}
     />
    <Drawer.Screen name="Mluti File Upload " component={FileUploader}
     
     
     options={{
      drawerIcon: config => <Icon
          size={23}
          name={Platform.OS === 'android' ? 'eye' : 'ios-list'}></Icon>
  }}
     />
     
    </Drawer.Navigator>
  
  );
}

const styles = StyleSheet.create({});
