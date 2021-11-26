import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native';
import { FAB, Provider, List, Switch, Checkbox, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function CreateIncome() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [checked, setChecked] = React.useState(false);

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [selectedValue, setSelectedValue] = useState("java");
  const [text, onChangeText] = React.useState("Remuneración mensual");

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const showDatepicker = (state) => {
    console.log('click ' + show)
    setShow(state);
    setMode('date');
  };

  return (
    <ScrollView style={ styles.container }>
      <View style={ styles.view }>
        <Text>Pago recurrente</Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>

      <View style={ styles.view }>
        <Text style={{alignSelf: 'center'}}>Categoría</Text>
        <Picker
          selectedValue={ selectedValue }
          style={ styles.picker }
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
            <Picker.Item label="Saldo inicial" value="Saldo inicial" />
            <Picker.Item label="Sueldo" value="Sueldo" />
            <Picker.Item label="Alquiler" value="Alquiler" />
        </Picker>
      </View>

      <View style={ styles.viewLine }>
        <Text>Descripción</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>

      <View style={ styles.view2 }>
        <Text style={{alignSelf: 'center'}}>Indeterminado</Text>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </View>

      <View style={ styles.viewLine }>
        <Text>Hasta</Text>
        <Text
          style={styles.input}
          onPress={ () => showDatepicker(true) }
        >____/____/____</Text>
      </View>

      <View style={ styles.viewLine }>
        <Text>Monto</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={'5000'}
        />
      </View>

      <View style={{ marginBottom: 50, marginTop: 15}}>
        <Button mode="contained" onPress={() => {
          navigation.navigate('Home')
        }} color="#008E97" style={{ height:40, alignContent:'center', alignItems:'center' }}>
          Aceptar
        </Button>
      </View>

      {
        show && 
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={({nativeEvent}) => {
            showDatepicker(false);
          }}
        />
      
      }

    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#FFFF',
      marginBottom: 20,
    },
    view: {
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-between',
      marginBottom: 10
    },
    view2: {
      flex: 1,
      flexDirection: 'row',
      justifyContent:'flex-start',
      marginBottom: 10
    },
    viewLine: {
      marginBottom: 15
    },
    picker: {
      height: 35,
      width: 200,
      borderWidth: 1,
      padding: 5,
    },
    input: {
      height: 35,
      width: '100%',
      borderWidth: 1,
      borderColor: '#686868',
      padding: 5,
      marginTop: 5
    },
  });