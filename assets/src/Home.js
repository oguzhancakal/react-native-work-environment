import { View,Text,Pressable,TextInput} from "react-native";
import React,{useState} from "react";
  
  const Home = ({navigation}) => {
    const [firstNumber,setFirstNumber,] = useState(1654654);
    const [secondNumber,setSecondNumber,] = useState(5415413);
    const [result,setResult,] = useState(0);
  
    const Sum = () =>{
      const total = parseInt(firstNumber) + parseInt(secondNumber)
      setResult(total);
      navigation.navigate("SecondPage", {resultNumber: total});
    };
    return (
          <View
          style={{
            width:"100%",
            height:"100%",
            alignItems:"center",
            justifyContent:"center",
          }}>
            <TextInput
            style={{
              width:200,
              height:70,
              borderRadius:15,
              borderWidth:1,
              backgroundColor:"#D8D8D8",
              marginBottom:50,
              textAlign:"center"
            }}
            keyboardType="number-pad"
            onChangeText={setFirstNumber}
            />
            <TextInput
            style={{
              width:200,
              height:70,
              borderWidth:1,
              borderRadius:15,
              backgroundColor:"#D8D8D8",
              marginBottom:50,
              textAlign:"center"
            }}
            keyboardType="number-pad"
            onChangeText={setSecondNumber}
            />
            <Pressable
             style={({pressed}) =>[
              {
                width:200,
                height:70,
                backgroundColor:"#FFAC41",
                alignItems:"center",
                justifyContent:"center",
                borderRadius: 15,
                borderWidth: 1,
                marginBottom: 30,
                transform:[pressed ? {translateY:10} : {translateY:0}],
                shadowRadius: pressed ? 0.1 : 0.25,
                shadowOffset: pressed ? {width: 0, height:1} : {width:0,height:3}
              },
          ]}
          onPress={Sum}>
              <Text>Submit</Text>
            </Pressable> 
            <Text>Ilk numara:{firstNumber}</Text>
            <Text>Ikinci Numara: {secondNumber}</Text>
            <Text>Sonuç: {result}</Text>
          </View>
    );
  };  
  
  export default Home;