import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import React from "react";


export default function Welcomscreen({ navigation }) {
  return (
    
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeL9vD1jJ_8gWYrtpr_vZCZN3ZoqZ1s-enYQ&usqp=CAU",
      }}
    >
        
      <View style={styles.container}>
        <Image
          source={require("../assets/logred.png")}
          style={styles.logo}
        ></Image>
      </View>
      <Text style={styles.label}>Your Email</Text>
      <View style={{ width: "100%" }}>
        <TextInput style={styles.textinput} placeholder="Ex:Test@gmail.com" />
        <Text style={{ fontSize: 42 }}></Text>
      </View>
      <Text style={styles.label}>Your Password</Text>
      <View style={{ width: "100%" }}>
        <TextInput style={styles.textinput} placeholder="******" />
        <Text style={{ fontSize: 42 }}></Text>
      </View>
      <View
        style={styles.loginbutton}
        onTouchStart={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.T1}>Log In </Text>
      </View>
      <View style={styles.Sginupbutton}>
        <Text style={styles.T1}>Sign UP </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    top: 0,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginbutton: {
    width: "100%",
    height: 30,
    backgroundColor: "#fc5c65",
    borderRadius: 30,
  },
  textinput: {
    width: "100%",
    borderRadius: 30,
    height: 30,
    backgroundColor: "white",
    fontSize: 20,
    fontStyle: "italic",
  },
  label: {
    fontSize: 20,
    fontStyle: "italic",
    color: "#fc5c65",
  },
  T1: {
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
  },
  T2: {
    fontSize: 40,
    fontStyle: "italic",
  },
  container: {
    position: "absolute",
    top: 85,
    alignItems: "center",
  },

  logo: {
    height: 70,
    width: 70,
  },
  Sginupbutton: {
    width: "100%",
    height: 30,
    backgroundColor: "#4ecdc4",
    borderRadius: 30,
  },
});
