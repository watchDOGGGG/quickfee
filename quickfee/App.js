import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './screens/register';
import Login from './screens/login';
import CategoryPage from './screens/catepage';
import Schools from './screens/schools';
import Splash from './screens/splash';
import InApp from './inapp';
import React from 'react'

const Stack = createStackNavigator();

export default function App({}) {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="splash" component={Splash}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="register" component={Register} 
        options={{
          title: "Register",
          headerShown: true
        }}
        />
        <Stack.Screen name="login" component={Login}
          options={{
            title: "Log in",
            headerShown: true
          }}
        />
        <Stack.Screen name="schools" component={Schools}
          options={{
            title: "Available schools",
            headerShown: true,
            headerShadowVisible:false,
            headerStyle:{
              elevation:false,
              shadowOpacity:0
            }
          }}
        />
        <Stack.Screen name="single" component={InApp}
          options={{
            title: "",
            headerShown: false
          }}
        />
        <Stack.Screen name="category"
          options={{
            title: "",
            headerShown: false
          }} component={CategoryPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




