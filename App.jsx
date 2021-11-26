import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Income from './src/screens/Income';
import CreateIncome from './src/screens/CreateIncome';

const Stack = createNativeStackNavigator();
export default class App extends React.Component{
    render(){
        return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} options={
                { 
                  headerShown:false 
                }
              } />
              <Stack.Screen name="Home" component={Home} options={
                { 
                  title:"Mi presupuesto",
                  headerBackVisible: false, headerStyle: {
                    backgroundColor: '#008E97',
                  },
                  headerTintColor: '#fff',
                }
              } />
              <Stack.Screen name="Income" component={Income} options={
                { 
                  title:"Ingresos",
                  headerStyle: {
                    backgroundColor: '#008E97',
                  },
                  headerTintColor: '#fff',
                }
              } />
              <Stack.Screen name="CreateIncome" component={CreateIncome} options={
                { 
                  title:"Registrar ingreso",
                  headerStyle: {
                    backgroundColor: '#008E97',
                  },
                  headerTintColor: '#fff',
                }
              } />
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
