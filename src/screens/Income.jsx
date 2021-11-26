import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { FAB, Provider, List } from 'react-native-paper';

export default function Income( { navigation }) {
  return (
    <Provider>
      <ScrollView style={styles.container}>
        <List.Section>
          <List.Item 
            title="Remuneración mensual" 
            description="S/ 7500"  
            left={() => <List.Icon icon="arrow-up" />} 
            right={() => <List.Icon icon="minus" />} 
            onPress={() => navigation.navigate('CreateIncome')} 
          />
          <List.Item 
            title="Alquiler lurin" 
            description="S/ 2499" 
            left={() => <List.Icon icon="arrow-up" />} 
            right={() => <List.Icon icon="minus" />}
          />
        </List.Section>
      </ScrollView>
      <FAB
        style={styles.fab}
        small={false}
        color='white'
        icon="plus"
        onPress={() => navigation.navigate('CreateIncome')}
      />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#008E97',
  },
});