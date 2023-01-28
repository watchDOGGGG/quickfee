import React from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"
import tw from 'twrnc';
/**
 * @param {string} email
 * @param {string} password
 * @param {string} fullname
 * @param {string} phone
 */

const route = [{ name: 'login', id: 1 }]

export default function Register({ navigation }) {
    const [values, setValues] = React.useState({
        fullname: '',
        email: '',
        phone: '',
        password: ''
    })

    const OnchangeText = (name, e) => {
        setValues({
            ...values,
            [name]: e
        })
    }
    return (
        <View>
            <FlatList
                data={route}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View style={tw`flex flex-row justify-center`}>
                        <View style={tw`flex flex-col p-2`}>
                            {/* full name */}
                            <View style={tw`flex flex-col mt-2`}>
                                <View>
                                    <Text style={tw`text-sm mb-1 text-gray-500 font-semibold`}>Full name</Text>
                                </View>
                                <TextInput
                                    style={tw`border-b w-90 p-2 font-bold text-black text-lg`}
                                    onChangeText={e => OnchangeText('fullname', e)}
                                    value={values.fullname}
                                    placeholder="Enter fullname"
                                />
                            </View>

                            {/* email */}
                            <View style={tw`flex flex-col mt-2`}>
                                <View>
                                    <Text style={tw`text-sm mb-1 text-gray-500 font-semibold`}>Email</Text>
                                </View>
                                <TextInput
                                    style={tw`border-b w-90 p-2 font-bold text-black text-lg`}
                                    onChangeText={e => OnchangeText('email', e)}
                                    value={values.email}
                                    placeholder="Enter email"
                                />
                            </View>

                            {/* phone */}
                            <View style={tw`flex flex-col mt-2`}>
                                <View>
                                    <Text style={tw`text-sm mb-1 text-gray-500 font-semibold`}>Phone</Text>
                                </View>
                                <TextInput
                                    style={tw`border-b w-90 p-2 font-bold text-black text-lg`}
                                    onChangeText={e => OnchangeText('phone', e)}
                                    value={values.phone}
                                    placeholder="Enter phone number"
                                />
                            </View>
                            {/* password */}
                            <View style={tw`flex flex-col mt-2`}>
                                <View>
                                    <Text style={tw`text-sm mb-1 text-gray-500 font-semibold`}>Password</Text>
                                </View>
                                <TextInput
                                    style={tw`border-b w-90 p-2 font-bold text-black text-lg`}
                                    onChangeText={e => OnchangeText('password', e)}
                                    value={values.password}
                                    placeholder="Enter password"
                                    secureTextEntry={true}
                                />
                            </View>

                            <View style={tw`mt-2`}>
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate("login")}
                                        style={tw`bg-black w-90 p-4 mt-3 font-semibold`}
                                    >
                                        <Text style={tw`text-center font-bold text-white text-xl`}>Register</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={tw`text-center mt-5`}>OR</Text>
                                <Text style={tw`text-center underline`} onPress={() => navigation.navigate("login")}>Already have an account click to login</Text>
                               
                            </View>
                        </View>
                    </View>
                 } />
        </View>
    )
}