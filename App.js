import { View, Text } from 'react-native';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./assets/src/Home";
import SecondPage from "./assets/src/SecondPage";

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      screenOptions={{headerShown:false}}>
        <Stack.Screen name= "Home" component={Home}/>
        <Stack.Screen name= "SecondPage" component={SecondPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App