import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function Home({ navigation }) {
  return (
    <ScrollView style={ styles.container }>
      <Card style={ { marginBottom: 10, backgroundColor: '#fff5db'} }>
        <Card.Content>
          <Title>Saldo Actual</Title>
          <Paragraph>S/ 5700</Paragraph>
        </Card.Content>
      </Card>
      <Card onPress={ () => navigation.navigate('Income') } style={ styles.card }>
        <Card.Content>
          <Title>Ingresos</Title>
          <Paragraph>Actualiza tus ingresos fijos del mes</Paragraph>
        </Card.Content>
      </Card>
      <Card onPress={() => console.log('holii')} style={ styles.card }>
        <Card.Content>
          <Title>Egresos fijos</Title>
          <Paragraph>Actualiza tus egresos fijos del mes</Paragraph>
        </Card.Content>
      </Card>

      <Card onPress={() => console.log('holii')} style={ styles.card }>
        <Card.Content>
          <Title>Pagos del mes</Title>
          <Paragraph>Actualiza tus pagos realizados</Paragraph>
        </Card.Content>
      </Card>

      <Card onPress={() => console.log('holii')} style={ styles.card }>
        <Card.Content>
          <Title>Categorías</Title>
          <Paragraph>Categoriza tus gastos</Paragraph>
        </Card.Content>
      </Card>

      <Card onPress={() => console.log('holii')} style={ styles.card }>
        <Card.Content>
          <Title>Resumen</Title>
          <Paragraph>Visualiza tu resumen de gastos</Paragraph>
        </Card.Content>
      </Card>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ecf0f1',
    marginBottom: 20,
  },
  card: {
    marginBottom: 10
  },
});