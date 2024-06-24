import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';

// You can import supported modules from npm
//import { Button } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Ola react native meu nome eh miguel.
      </Text>
      <Button title="Clique Aqui" onPress={() => {alert('Você apertou o botão!')}}> Clique Aqui </Button>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
