import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SingleSchool from './screens/single_School';

const Stack = createStackNavigator();

export default function InApp({route}) {

  const {name, school} = route.params

  return (
      <Stack.Navigator>
        <Stack.Screen name="single_school" component={SingleSchool}
          options={{
            title: school,
            headerShown: true,
          }}
        />
      </Stack.Navigator>
  );
}






