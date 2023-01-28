import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './screens/register';
import Login from './screens/login';
import CategoryPage from './screens/catepage';
import Schools from './screens/schools';
import SingleSchool from './screens/single_School';
import Splash from './screens/splash';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="splash" component={Splash}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="login" component={Login}
          options={{
            title: "Log in",
            headerShown: true
          }}
        />
        <Stack.Screen name="schools" component={Schools}
          options={{
            title: "",
            headerShown: false
          }}
        />
        <Stack.Screen name="single" component={SingleSchool}
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




