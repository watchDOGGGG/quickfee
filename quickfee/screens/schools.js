import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
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

const Schools = ({ navigation }) => {
  const [value, setValue] = React.useState('')
  return (
    <SafeAreaView>
      <View style={tw`flex flex-col mt-4`}>
        <View style={tw`flex flex-row justify-center w-full`}>
          <View style={tw`flex flex-row justify-start w-95 border border-gray-300 rounded-xl bg-gray-300`}>
            <View style={tw`flex flex-col justify-center ml-2`}>
              <FontAwesome5 name="search" size={15} />
            </View>
            <TextInput placeholder="Search school..." onChange={e => setValue(e)} value={value} style={tw` w-80 text-left p-1 text-black font-semibold `} />
            <View style={tw`flex flex-col justify-center`}>
              <AntDesign name="closecircle" size={15} color="black" />
            </View>
          </View>
        </View>
        <View style={tw` mt-2 h-4/4`}>
          <FlatList
            data={DATA}
            renderItem={
              ({ item }) => <SchoolComponent item={item} navigate={navigation} />
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
      <View style={tw`flex-row justify-center border rounded-30 h-9 w-9`}>
        <View style={tw`flex flex-col justify-center`}>
        <FontAwesome5 name="school" size={20} color="black" />
        </View>
      </View>
      <View style={tw`ml-3 `}>
        <Text style={tw`text-black text-center font-semibold text-sm`}>{item.title}</Text>
        <View style={tw`flex flex-row`}>
          <Text style={tw`text-green-500 font-semibold text-xs `}>Active</Text>
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