import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";

export default function Viewimagescreen({ navigation }) {
  return (
    <View style={styles.continar}>
      <View onTouchStart={() => console.log("loloo")}>
        <Image style={styles.closee} source={require("../assets/271203.png")} />
      </View>

      <Image
        style={styles.delete}
        source={require("../assets/dell.jpg")}
      ></Image>
      <Image
        resizeMode="contain"
        style={styles.background}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/2012_BMW_318d_Sport_Automatic_2.0.jpg/280px-2012_BMW_318d_Sport_Automatic_2.0.jpg",
        }}
      ></Image>
      <View style={styles.add}>
        <Text style={styles.T1}>Add TO Chart</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  closee: {
    width: 50,
    height: 50,
    backgroundColor: "dodgerblue",
    borderRadius: 30,
    position: "absolute",
    top: 110,
    right: 100,
  },
  delete: {
    width: 50,
    height: 50,
    backgroundColor: "dodgerblue",
    borderRadius: 30,
    position: "absolute",
    top: 70,
    right: 30,
  },

  background: {
    width: "100%",
    height: "100%",
  },
  add: {
    width: "100%",
    height: 40,
    backgroundColor: "dodgerblue",
    borderRadius: 30,
  },
  T1: {
    fontSize: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  continar: {
    // top:20,
    bottom: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
