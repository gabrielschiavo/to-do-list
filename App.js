import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Lista } from './src/components/Lista';

export default function App() {
  const [texto, setaTexto] = useState("");
  const [ itens, setaItens] = useState([{titulo: "Tarefa falta fazer", estado: false}, {titulo: "Tarefa concluída", estado: true}]);
  const adicionaItem = (e) => {
    if(texto != "") {
      setaItens([
        ...itens, 
        {titulo: texto, estado: false}
      ])
      setaTexto("")
    }
  };

  return (
    <View style={style.containerRaiz}>
      <StatusBar
        animated={true}
        showHideTransition={true}
        hidden={true} />

      <View> 
        <Text style={style.titulo}>Lista de Tarefas do Gabriel Kleinübing Schiavo</Text>
      </View>

      <View style={style.containerInput}>
        <TextInput style={style.input} value={texto} onChangeText={setaTexto}/>

        <TouchableOpacity style={style.btn} onPress={adicionaItem}>
          <Text style={style.btnText}>adicionar tarefa</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={style.text}>Minha Lista:</Text>
      <Lista itens={itens} setaItens={setaItens}/>

    </View>
  );
}

const style = StyleSheet.create({
  containerRaiz: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#d9e5f2",
  },

  titulo: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 25,
  },

  containerInput: {
    padding: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#000000",
    marginBottom: 20,
    padding: 6,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },

  btn: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 80,
    paddingRight: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#0049a9',
    backgroundColor: '#0049a9',
    marginBottom: 25,
  },

  btnText: {
    color: '#ffffff',
    textTransform: 'uppercase',
  },

  containerData: {
    padding: 10,
  },

  data: {
    fontSize: 14,
  },

  text: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    fontWeight: 'bold',
  },
});
