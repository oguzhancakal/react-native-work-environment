import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'

const CarService = () => {
  return (
    <View style ={carsService.container}>
      <Text style={carsService.title}>Car Service</Text>
      <Image
      style={carsService.logo}
      source={require("../assets/İcon/bluecar.png")}/>
    </View>
  )
}
const carsService = StyleSheet.create({
    container:{
         width: "100%",
        alignItems:"center",

     justifyContent:"center",
     padding:24,
     borderColor:"#ddd",
     borderWidth:1
    },
    logo:{
        height: 128,
        width: 128
    },
    title:{
        margin:24,
        fontWeight:"bold",
        textAlign:"center"
    }
});

export default CarService