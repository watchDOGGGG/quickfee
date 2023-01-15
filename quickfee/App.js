import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './screens/register';
import Login from './screens/login';
import CategoryPage from './screens/catepage';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="category"
        options={{
          title:"",
          headerShown:false
        }} component={CategoryPage} 
        />
        {/* <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} /> */}
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




