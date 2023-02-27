import React from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"
import tw from 'twrnc';
/**
 * @param {string} email
 * @param {string} password
 */

const route = [{ name: 'login', id: 1 }]
export default function Login({ navigation }) {
    const [values, setValues] = React.useState({
        password: '',
        email: '',
    })

    const OnchangeText = (name, e) => {
        setValues({
            ...values,
            [name]: e
        })
    }

    const Login = () => {
        navigation.navigate("category")
    }
    return (
        <View>
            <FlatList
                data={route}
                renderItem={({ item }) =>
                    <View style={tw`flex flex-row justify-center h-[100]`}>
                        <View style={tw`flex flex-col p-2`}>
                            {/* email*/}
                            <View style={tw`flex flex-col mt-2`}>
                                <View>
                                    <Text style={tw`text-sm mb-1 text-gray-500 font-semibold`}>Email address</Text>
                                </View>
                                <TextInput
                                    style={tw`border-b w-full text-black`}
                                    onChangeText={e => OnchangeText('email', e)}
                                    value={values.fullname}
                                    placeholder="user@example.com"
                                />
                            </View>

                            {/* password */}
                            <View style={tw`flex flex-col mt-6`}>
                                <View>
                                    <Text style={tw`text-sm mb-1 text-gray-500 font-semibold`}>Password</Text>
                                </View>
                                <TextInput
                                    style={tw`border-b w-full text-black`}
                                    onChangeText={e => OnchangeText('password', e)}
                                    value={values.password}
                                    placeholder="Enter password"
                                    secureTextEntry={true}
                                />
                            </View>

                            <View style={tw`mt-2`}>
                                <View>
                                    <TouchableOpacity
                                        style={tw`bg-black w-90 p-3 rounded-4 mt-3 font-semibold`}
                                        onPress={Login}
                                    >
                                        <Text style={tw`text-center font-bold text-white`}>Log in</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={tw`mt-6 text-center underline`} onPress={() => navigation.navigate("register")}>Don't have an account click to Register</Text>
                            </View>
                        </View>
                    </View>
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}