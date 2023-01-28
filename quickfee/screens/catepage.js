import { View, Text, Touchable } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

export default function CategoryPage({navigation}) {
    return (
        <View style={tw`bg-blue-400 h-full`}>
            <View style={tw`flex flex-col justify-center h-2/4 bg-blue-500`}>
                <View style={tw`flex-col justify-center h-full`}>
                    <Text style={tw`text-center text-white text-4xl font-bold`}>Quickfee</Text>
                    <Text style={tw`text-center text-white text-lg font-normal`}>fastest way to pay fees</Text>
                </View>
            </View>
            <View style={tw`flex flex-col h-2/4 bg-blue-300`}>
                <View style={tw`mt-2 mt-4`}>
                    <View style={tw`flex flex-row justify-around flex-wrap w-full`}>
                        <View style={tw`flex flex-row justify-around flex-wrap w-full`}>
                        <TouchableOpacity style={tw`flex flex-col justify-center bg-white w-30 h-30 rounded-xl`} 
                        onPress={()=>navigation.navigate("schools")}
                        >
                            <View style={tw`flex-row justify-center`}>
                            <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                            </View>
                            <Text style={tw`text-black text-center font-bold mt-2`}>Pay fees</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`flex flex-col justify-center bg-white w-30 h-30 rounded-xl`}>
                            <View style={tw`flex-row justify-center`}>
                            <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                            </View>
                            <Text style={tw`text-black text-center font-bold mt-2`}>Pay fees</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`flex flex-col justify-center bg-white w-30 h-30 rounded-xl`}>
                            <View style={tw`flex-row justify-center`}>
                            <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                            </View>
                            <Text style={tw`text-black text-center font-bold mt-2`}>Pay fees</Text>
                        </TouchableOpacity>
                        </View>
                       <View style={tw`flex flex-row justify-around flex-wrap w-full mt-3`}>
                       <TouchableOpacity style={tw`flex flex-col justify-center bg-white w-30 h-30 rounded-xl`}>
                            <View style={tw`flex-row justify-center`}>
                            <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                            </View>
                            <Text style={tw`text-black text-center font-bold mt-2`}>Pay fees</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`flex flex-col justify-center bg-white w-30 h-30 rounded-xl`}>
                            <View style={tw`flex-row justify-center`}>
                            <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                            </View>
                            <Text style={tw`text-black text-center font-bold mt-2`}>Pay fees</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`flex flex-col justify-center bg-white w-30 h-30 rounded-xl`}>
                            <View style={tw`flex-row justify-center`}>
                            <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                            </View>
                            <Text style={tw`text-black text-center font-bold mt-2`}>Pay fees</Text>
                        </TouchableOpacity>
                       </View>
                    </View>
                </View>
            </View>
        </View>
    )
}