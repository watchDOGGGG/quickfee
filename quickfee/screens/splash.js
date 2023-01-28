import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export default function Splash({navigation}) {
  React.useEffect(() =>{
    setTimeout(() =>{
      navigation.navigate("login")
    },3000)
  },[])
  return (
    <View style={tw`h-full bg-black`}>
      <View style={tw`h-3/3 flex flex-col justify-center`}>
        <Text style={tw`text-white text-5xl font-bold text-center`}>Quick Fee.</Text>
      </View>
    </View>
  )
}