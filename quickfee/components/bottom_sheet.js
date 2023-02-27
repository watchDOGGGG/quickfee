import { BottomSheet } from 'react-native-btr';
import { View, Text, Pressable, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const list = [{
    id: 1,
    name: 'form'
}]
export default function BottomDrawer() {
    const [visible, setVisible] = React.useState(false);

    const toggleBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        setVisible(!visible);
    };
    return (
        <View>
            <Pressable
                style={tw`bg-[#2374e1] p-3 w-full rounded-5`}
                onPress={toggleBottomNavigationView}>
                <Text style={tw`text-center text-white font-semibold`}>Click to pay</Text>
            </Pressable>
            <BottomSheet
                visible={visible}
                //setting the visibility state of the bottom shee
                onBackButtonPress={toggleBottomNavigationView}
                //Toggling the visibility state on the click of the back botton
                onBackdropPress={toggleBottomNavigationView}
            //Toggling the visibility state on the clicking out side of the sheet
            >
                {/*Bottom Sheet inner View*/}
                <View style={tw`bg-white h-3/4 rounded-t-10`}>
                    <View>
                        <Text
                            style={tw`text-center p-[20] text-lg`}>
                            Fill in student details to pay fees
                        </Text>
                        <FlatList
                            data={list}
                            renderItem={({ item }) =>
                                <View style={tw`flex flex-row justify-center `}>
                                    <View style={tw`w-[80%]`}>
                                        <View style={tw``}>
                                            <Text style={tw``}>Student name</Text>
                                            <TextInput placeholder="Enter student name" style={tw`border rounded-4 text-black border-black mt-1 p-2`} />
                                        </View>
                                        <View style={tw`mt-4 `}>
                                            <Text style={tw``}>Student id / class number</Text>
                                            <TextInput placeholder="Enter student name" style={tw`border rounded-4 text-black border-black mt-1 p-2`} />
                                        </View>
                                        <View style={tw`mt-4`}>
                                            <Text style={tw``}>Class</Text>
                                            <TextInput placeholder="Enter student name" style={tw`border rounded-4 text-black border-black mt-1 p-2`} />
                                        </View>
                                        <View style={tw`mt-4`}>
                                            <Text style={tw``}>Term</Text>
                                            <TextInput placeholder="Enter student name" style={tw`border rounded-4 text-black border-black mt-1 p-2`} />
                                        </View>
                                        <View style={tw`mt-5 flex flex-row justify-center`}>
                                            <TouchableOpacity style={tw`bg-black p-3 w-full rounded-4`}>
                                                <Text style={tw`text-center text-white font-bold`}>Done</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            }
                            keyExtractor={item => item.id}
                        />

                    </View>
                </View>
            </BottomSheet>
        </View>
    )
} 