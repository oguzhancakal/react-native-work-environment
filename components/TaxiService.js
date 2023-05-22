import { View, Text,StyleSheet,Image} from 'react-native'
import React from 'react'

const TaxiService = () => {
  return (
    <View style={taxiService.container}>
      <Text style={taxiService.title}>Taxi Service </Text>
      <Image
        style={taxiService.logo}
        source={require("../assets/İcon/taxiservice.png")}
      />
    </View>
  )
}
const taxiService = StyleSheet.create({
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

export default TaxiService