import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState('');
  const [nomes, setNomes] = useState([]);

  const adicionarNome = () => {
    setNomes([...nomes, nome]);
    setNome('');
  };

  const removerNome = (index) => {
    setNomes(nomes.filter((_, i) => i !== index));
  };

  
  const renderItem = ({ item, index }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={() => removerNome(index)}>
        <View style={[styles.botao, { backgroundColor: 'red' }]}>
          <Text style={{ fontSize: 20, color: 'white' }}>-</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Moana Fernanda </Text>
      <Text style={{ color: 'blue' }}>REACT NATIVE</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ width: 200, height: 35, borderWidth: 1, margin: 10, padding: 8 }}
          placeholder='Insira o Nome Aqui'
          value={nome}
          onChangeText={setNome}
        />
        <TouchableOpacity onPress={adicionarNome}>
          <View style={styles.botao1}>
            <Text style={{ color: 'white', fontSize: 20,  }}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={nomes}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item}-${index}`}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11111',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 60,
  },
  botao1: {
    display: 'flex',
    backgroundColor: 'green',
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    
  },
  botao: {
    backgroundColor: '#ccc',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginBottom: 10,
  },
});
