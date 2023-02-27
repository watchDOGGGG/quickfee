import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import BottomDrawer from '../components/bottom_sheet'

const route = [
    {
        name: 'school',
        id: 1
    }
]
export default function SingleSchool() {
    return (
        <View style={tw`flex flex-col`}>
            <FlatList
                data={route}
                renderItem={({ item }) => <SchoolComponent />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const SchoolComponent = () => {
    return (
        <View style={tw`flex flex-col w-full p-5`}>
            
            <View style={tw`mt-2`}>
                <View style={tw`flex flex-col`}>
                    <View style={tw`flex flex-col`}>
                        <Text style={tw`flex flex-col text-left font-bold text-black`}>Accout Number</Text>
                        <Text style={tw`flex flex-col text-left text-gray-500`}>223456670</Text>
                    </View>

                    <View style={tw`flex flex-col mt-2`}>
                        <Text style={tw`flex flex-col text-left  font-bold text-black`}>Accout Name </Text>
                        <Text style={tw`flex flex-col text-left text-gray-500`}>Hope waddle international school</Text>
                    </View>


                    <View style={tw`flex flex-col mt-2`}>
                        <Text style={tw`flex flex-col text-left  font-bold text-black`}>Bank Name</Text>
                        <Text style={tw`flex flex-col text-left text-gray-500`}>First bank </Text>
                    </View>

                    <View style={tw`flex flex-col mt-2`}>
                        <Text style={tw`flex flex-col text-left  font-bold text-black`}>School Number</Text>
                        <Text style={tw`flex flex-col text-left text-gray-500`}>+234908743673</Text>
                    </View>
                </View>
            </View>
            <View style={tw`flex flex-row w-full justify-center`}>
                <View style={tw`w-[60%] mt-3`}>
                    <BottomDrawer />
                </View>
            </View>

            <View style={tw`flex flex-col mt-2`}>
                <Text style={tw`flex flex-col text-left  font-bold text-black`}>Term</Text>
                <Text style={tw`flex flex-col text-left text-gray-500`}>1st term</Text>
            </View>
            <View style={tw`flex flex-col mt-2`}>
                <Text style={tw`flex flex-col text-left  font-bold text-black`}>In session</Text>
                <Text style={tw`flex flex-col text-left text-gray-500`}>Active</Text>
            </View>


            <View style={tw` mt-2`}>
                <Text style={tw`font-bold leading-6`}>Information: <Text style={tw`font-normal`}>A React Component that will be used to render sticky headers, should be used together with stickyHeaderIndices. You may need to set this component if </Text></Text>
            </View>

            <View style={tw` mt-2`}>
                <Text style={tw`font-bold leading-6`}>Note: <Text style={tw`font-normal`}>Please always confirm the payment Information from the school or the bank before making payment. </Text></Text>
            </View>
        </View>
    )
}

