import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const logo = require('./../assets/logo.png')

export default function Login({ navigation }) {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={{alignContent:'center', alignItems:'center', padding:40}}>
        <Image source={logo}></Image>
      </View>
      <View style={styles.box}>
        <TextInput
          label="Email"
          value={username}
          onChangeText={username => setUsername(username)}
          keyboardType="email-address"
          activeUnderlineColor="#ffa154"
          left={<TextInput.Icon name="account" />}
        />
      </View>
      <View style={styles.box}>
        <TextInput
          label="Contraseña"
          value={password}
          onChangeText={password => setPassword(password)}
          secureTextEntry={true}
          activeUnderlineColor="#ffa154"
          left={<TextInput.Icon name="form-textbox-password" />}
        />
      </View>

      <View style={{ marginBottom: 50}}>
        <Button icon="login" mode="contained" onPress={() => {
          navigation.navigate('Inicio')
        }} color="#008E97" style={{ height:40, alignContent:'center', alignItems:'center' }}>
          Ingresar
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding:20,
    backgroundColor: '#FFFF'
  },
  box: {
    marginBottom:20
  }
});
