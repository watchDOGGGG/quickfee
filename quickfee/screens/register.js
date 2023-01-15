import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import tw from 'twrnc';
/**
 * @param {string} email
 * @param {string} password
 * @param {string} fullname
 * @param {string} phone
 */
export default function Register({navigation}) {
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
            <Text style={tw`text-center mt-3 font-bold text-xl`}>Welcome to register</Text>
            <View style={tw`flex flex-row justify-center`}>
                <View style={tw`flex flex-col p-2`}>
                    {/* full name */}
                    <View style={tw`flex flex-col mt-2`}>
                        <View>
                            <Text style={tw`text-sm mb-1`}>Full name</Text>
                        </View>
                        <TextInput
                            style={tw`border w-80 p-2`}
                            onChangeText={e => OnchangeText('fullname', e)}
                            value={values.fullname}
                            placeholder="Enter fullname"
                        />
                    </View>

                    {/* email */}
                    <View style={tw`flex flex-col mt-2`}>
                        <View>
                            <Text style={tw`text-sm mb-1`}>Email</Text>
                        </View>
                        <TextInput
                            style={tw`border w-80 p-2`}
                            onChangeText={e => OnchangeText('email', e)}
                            value={values.email}
                            placeholder="Enter email"
                        />
                    </View>

                    {/* phone */}
                    <View style={tw`flex flex-col mt-2`}>
                        <View>
                            <Text style={tw`text-sm mb-1`}>Phone</Text>
                        </View>
                        <TextInput
                            style={tw`border w-80 p-2`}
                            onChangeText={e => OnchangeText('phone', e)}
                            value={values.phone}
                            placeholder="Enter phone number"
                        />
                    </View>
                    {/* password */}
                    <View style={tw`flex flex-col mt-2`}>
                        <View>
                            <Text style={tw`text-sm mb-1`}>Password</Text>
                        </View>
                        <TextInput
                            style={tw`border w-80 p-2`}
                            onChangeText={e => OnchangeText('password', e)}
                            value={values.password}
                            placeholder="Enter password"
                        />
                    </View>

                    <View style={tw`mt-2`}>
                    <View>
                            <TouchableOpacity onPress={()=>navigation.navigate("login")}
                            style={tw`bg-blue-400 w-80 p-2 mt-3`}
                            >
                               <Text style={tw`text-center font-bold`}>Register</Text> 
                            </TouchableOpacity>
                        </View>
                        <Text style={tw`text-center`}>OR</Text>
                        <Text>Already have an account click to login</Text>
                        <View>
                            <TouchableOpacity onPress={()=>navigation.navigate("login")}
                            style={tw`bg-blue-400 w-80 p-2 mt-3`}
                            >
                               <Text style={tw`text-center font-bold`}>Login</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}