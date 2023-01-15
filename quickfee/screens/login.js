import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import tw from 'twrnc';
/**
 * @param {string} email
 * @param {string} password
 */
export default function Login({navigation}) {
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

    const Login = () =>{
        navigation.navigate("category")
    }
    return (
        <View>
            <Text style={tw`text-center mt-3 font-bold text-xl`}>Login here</Text>
            <View style={tw`flex flex-row justify-center`}>
                <View style={tw`flex flex-col p-2`}>
                    {/* email*/}
                    <View style={tw`flex flex-col mt-2`}>
                        <View>
                            <Text style={tw`text-sm mb-1`}>Email</Text>
                        </View>
                        <TextInput
                            style={tw`border w-80 p-2`}
                            onChangeText={e => OnchangeText('email', e)}
                            value={values.fullname}
                            placeholder="Enter fullname"
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
                            <TouchableOpacity
                            style={tw`bg-blue-400 w-80 p-2 mt-3`}
                            onPress={Login}
                            >
                               <Text style={tw`text-center font-bold`}>Login</Text> 
                            </TouchableOpacity>
                        </View>
                        <Text style={tw`mt-3`} onPress={()=>navigation.navigate("register")}>Don't have an account click to Register</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}