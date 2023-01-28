import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PayModal from '../components/modal'

const route = [
    {
        name:'school',
        id:1
    }
]
export default function SingleSchool() {
    return (
        <SafeAreaView>
            <View style={tw`flex flex-col`}>
                <FlatList
                data={route}
                renderItem={({item}) => <SchoolComponent/>}
                keyExtractor={item=>item.id}
                />
            </View>
        </SafeAreaView>
    )
}

const SchoolComponent = () =>{
    return (
        <View style={tw`flex flex-col w-full ml-2 mr-2`}>
            <Text style={tw`text-black text-xl font-bold text-center`}>Hope waddle international school</Text>
            <View style={tw`mt-2`}>
                <View style={tw`flex flex-col `}>
                    <Text style={tw`flex flex-col text-left p-3`}>Accout Number: 223456670</Text>
                    <Text style={tw`flex flex-col text-left p-3`}>Accout Name: Hope waddle international school</Text>
                    <Text style={tw`flex flex-col text-left p-3`}>Bank Name: First bank</Text>
                    <Text style={tw`flex flex-col text-left p-3`}>School Number: +234908743673</Text>
                </View>
            </View>
            <View style={tw`flex flex-row w-full justify-center`}>
            <View style={tw`w-[60%] mt-3`}>
            <PayModal/>
            </View>
            </View>

            <View style={tw`p-3`}>
                <View>
                    <Text>Term: <Text>1st term</Text></Text>
                </View>
                <View style={tw`mt-2`}>
                    <Text>In session: <Text>Active</Text></Text>
                </View>
            </View>

            <View  style={tw`p-3 mt-2`}>
                <Text style={tw`font-bold leading-6`}>Information: <Text style={tw`font-normal`}>A React Component that will be used to render sticky headers, should be used together with stickyHeaderIndices. You may need to set this component if </Text></Text>
            </View>

            <View  style={tw`p-3 mt-2`}>
                <Text style={tw`font-bold leading-6`}>Note: <Text style={tw`font-normal`}>Please always confirm the payment Information from the school or the bank before making payment. </Text></Text>
            </View>
        </View>
    )
}

