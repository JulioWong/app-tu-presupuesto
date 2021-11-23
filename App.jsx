import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import Login from './src/screens/Login';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();
export default class App extends React.Component{
    render(){
        return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} options={{ headerShown:false }} />
              <Stack.Screen name="Inicio" component={Home} options={{ headerBackVisible: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
