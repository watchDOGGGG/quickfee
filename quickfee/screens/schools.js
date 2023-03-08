import { AntDesign, Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'


const Schools = ({ navigation }) => {
  const [value, setValue] = React.useState('')
  const [list_schools, setListSchools] = React.useState([])

  React.useEffect(() => {
    getAllschools()
  }, [list_schools])

  async function getAllschools() {
    fetch("http://192.168.215.3:1200/v1/api/getschools").then((res) => res.json()
      .then((response) => {
        setListSchools(response)
      }).catch((error) => {
        console.error(error)
      })
    ).catch((err) => {
      console.error(err)
    })
  }
  return (
    <View style={tw`flex flex-row justify-center`}>
      <View style={tw`flex flex-col mt-4 w-[90%]`}>
        <View style={tw`flex flex-row justify-center w-full`}>
          <View style={tw`flex flex-row justify-start border border-gray-300 rounded-xl bg-gray-300`}>
            <View style={tw`flex flex-col justify-center ml-2`}>
              <FontAwesome5 name="search" size={15} />
            </View>
            <TextInput placeholder="Search school..." onChange={e => setValue(e)} value={value} style={tw`w-[90%] text-left p-1 text-black font-semibold `} />
            <View style={tw`flex flex-col justify-center`}>
              <AntDesign name="closecircle" size={15} color="black" />
            </View>
          </View>
        </View>
        <View style={tw` mt-2 h-4/4`}>
          <FlatList
            data={list_schools}
            renderItem={
              ({ item, index }) => <SchoolComponent item={item} navigate={navigation} key={item.id} />
            }
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};


const SchoolComponent = ({ item, navigate }) => {
  return (
    <TouchableOpacity style={tw`flex flex-row justify-start border-b border-gray-300 mt-5 pb-3`}
      onPress={() => navigate.navigate("single", { name: "single_school", school: item.schoolname })}
    >
      <View style={tw`flex-row justify-center border rounded-30 h-9 w-9`}>
        <View style={tw`flex flex-col justify-center`}>
          <Ionicons name="md-school-sharp" size={24} color="black" />
        </View>
      </View>
      <View style={tw`ml-3 `}>
        <Text style={tw`text-black text-center font-semibold text-sm`}>{item.schoolname}</Text>
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