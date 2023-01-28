import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Schools = ({navigation}) => {
  const [value, setValue] = React.useState('')
  return (
    <SafeAreaView>
      <View style={tw`flex flex-col mt-4`}>
        <View style={tw`flex flex-row justify-center w-full`}>
          <View style={tw`flex flex-row justify-start w-90 border border-gray-300 rounded-xl bg-gray-300`}>
            <View style={tw`flex flex-col justify-center ml-2`}>
            <FontAwesome5 name="search" size={15}/>
            </View>
            <TextInput placeholder="Search school..." onChange={e => setValue(e)} value={value} style={tw`w-full border text-left p-1 text-black font-semibold `} />
          </View>
        </View>
        <View style={tw` mt-2 h-4/4`}>
          <FlatList
            data={DATA}
            renderItem={
              ({ item }) => <SchoolComponent item={item} navigate={navigation}/>
            }
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};


const SchoolComponent = ({ item, navigate }) => {
  return (
    <TouchableOpacity style={tw`flex flex-row justify-start border-b border-gray-300 p-4`}
    onPress={() => navigate.navigate("single")}
    >
      <View style={tw`flex-row justify-center`}>
        <FontAwesome5 name="school" size={24} color="black" />
      </View>
      <View style={tw`ml-3 `}>
        <Text style={tw`text-black text-center font-semibold text-lg`}>{item.title}</Text>
        <View style={tw`flex flex-row`}>
          <Entypo name="dot-single" size={30} color="green" />
          <Text style={tw`text-gray-500 font-semibold text-sm p-1`}>Active</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default Schools;