import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text } from 'react-native';

import Inicio from './screen/Inicio';
import Prin from './screen/Prin';
import Registro from './screen/Registro';
import Principal from './screen/Principal';
import Login from './screen/Login';


const Stack = createStackNavigator();

function MyStack() {
    return (
    <Stack.Navigator
      initialRouteName="Registro"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>    
      <Stack.Screen 
        name="Login" 
        component={Login} 
      /> 
      <Stack.Screen 
        name="Registro" 
        component={Registro} 
      />
      <Stack.Screen 
       name="Inicio" 
       component={Inicio} 
       options={
         { title: 'BRECERLT' }

       }
      />
      <Stack.Screen 
       name="Prin" 
       component={Prin} 
       options={
         { title: 'Star Wars' }
       }
      />
      <Stack.Screen 
       name="Principal" 
       component={Principal} 
       options={
         { title: 'Movies' } 
       }
      />
  </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}