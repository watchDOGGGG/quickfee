import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, TouchableOpacity} from 'react-native';
import tw from 'twrnc'

const PayModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={tw`w-full p-3`}>
            <AntDesign name="closecircle" size={24} color="black" onPress={e=>setModalVisible(!modalVisible)}/>
            </View>
            <View style={tw`flex flex-row justify-center`}>
                <View style={tw`w-[90%]`}>
                    <View style={tw``}>
                        <Text>Student name:</Text>
                        <TextInput placeholder="Enter student name" style={tw`border border-black mt-1 p-1`}/>
                    </View>
                    <View style={tw`mt-2`}>
                        <Text>Student id / class number:</Text>
                        <TextInput placeholder="Enter student name" style={tw`border border-black mt-1 p-1`}/>
                    </View>
                    <View style={tw`mt-2`}>
                        <Text>Class:</Text>
                        <TextInput placeholder="Enter student name" style={tw`border border-black mt-1 p-1`}/>
                    </View>
                    <View style={tw`mt-2`}>
                        <Text>Term:</Text>
                        <TextInput placeholder="Enter student name" style={tw`border border-black mt-1 p-1`}/>
                    </View>
                    <View style={tw`mt-5 flex flex-row justify-center`}>
                        <TouchableOpacity style={tw`bg-black p-3 w-2/4`}>
                            <Text style={tw`text-center text-white font-bold`}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Click to pay</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width:400,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:150
  },
  buttonOpen: {
    backgroundColor: '#2374e1',
   
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default PayModal;