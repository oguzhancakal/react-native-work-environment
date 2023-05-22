import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

const FindService = () => {
  return (
    <View style={findService.container}>
      <Text style={findService.title}>Find Service </Text>
      <Image
        style={findService.logo}
        source={require("../assets/İcon/findservice.png")}
      />
    </View>
  )
}
const findService = StyleSheet.create({
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

export default FindService