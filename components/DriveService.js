import { View, Text, StyleSheet,Image } from "react-native";
import React from "react";
import CarService from "./CarService";

const DriveService = () => {
  return (
    <View style={driveService.container}>
      <Text style={driveService.title}>Drive Service </Text>
      <Image
        style={driveService.logo}
        source={require("../assets/İcon/driveservice.png")}
      />
    </View>
  );
};
const driveService = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",

    justifyContent: "center",
    padding: 24,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  logo: {
    height: 128,
    width: 128,
  },
  title: {
    margin: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default DriveService;
