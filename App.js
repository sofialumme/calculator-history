import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [no1, setNo1] = useState(0);
  const [no2, setNo2] = useState(0);
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  const buttonPressed = (title) => {
    if (title == '+') {
      setResult(parseInt(no1) + parseInt(no2));
      setHistory([...history,
      { text: `${no1} + ${no2} = ${parseInt(no1) + parseInt(no2)}` }]);
    } else {
      setResult(parseInt(no1) - parseInt(no2));
      setHistory([...history,
      { text: `${no1} - ${no2} = ${parseInt(no1) - parseInt(no2)}` }]);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Result is {result}</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={no1 => setNo1(no1)}
        value={no1}
      />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={no2 => setNo2(no2)}
        value={no2}
      />
      <View style={{ flexDirection: 'row' }}>
        <Button title='+' onPress={() => buttonPressed('+')} />
        <Button title='-' onPress={() => buttonPressed('-')} />
      </View>
      <Text>History</Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          <Text style={{ textAlign: 'center' }}>{item.text}</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});
