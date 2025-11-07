import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import { globalStyles } from '../../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

export default function NovoPeixeControle() {
  const navigation = useNavigation();
  const [peixes, setPeixes] = useState([]);
  const [nome, setNome] = useState('');
  const [status, setStatus] = useState('');
  const [estoque, setEstoque] = useState('');

  const adicionarPeixe = () => {
    if (!nome || !status || !estoque) {
      alert('Preencha todos os campos antes de adicionar!');
      return;
    }

    const novoPeixe = {
      id: peixes.length + 1,
      nome,
      status,
      estoque,
    };

    setPeixes([...peixes, novoPeixe]);
    setNome('');
    setStatus('');
    setEstoque('');
  };

  return (
    <View style={[globalStyles.containerSider, { flex: 1 }]}>
      <ScrollView contentContainerStyle={styles.containerPrincipal}>
        <View style={styles.tituloContainer}>
          <Text style={globalStyles.tituloPaginas}>Novo Peixe</Text>
        </View>

        {/* Barra de controle */}
        <View style={globalStyles.barraControleProdutos}>
          <Text style={globalStyles.textoBarra}>Id</Text>
          <Text style={globalStyles.textoBarra}>Peixe</Text>
          <Text style={globalStyles.textoBarra}>Status</Text>
          <Text style={globalStyles.textoBarra}>Estoque Atual</Text>
        </View>

        {/* Campos para adicionar novo peixe */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome do peixe"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.input}
            placeholder="Status (ex: Produção)"
            value={status}
            onChangeText={setStatus}
          />
          <TextInput
            style={styles.input}
            placeholder="Estoque (ex: 1.5 toneladas)"
            value={estoque}
            onChangeText={setEstoque}
          />
          <TouchableOpacity
            style={styles.adicionarPeixeButton}
            onPress={adicionarPeixe}
          >
            <Image
              source={require('../../../assets/adicionar.png')}
              style={styles.adicionarIcon}
            />
            <Text style={styles.adicionarPeixeText}>Adicionar novo Peixe</Text>
          </TouchableOpacity>
        </View>

        {/* Lista de peixes adicionados */}
        {peixes.map((peixe) => (
          <View key={peixe.id} style={styles.caixaPeixes}>
            <Text style={styles.texto}>#{String(peixe.id).padStart(3, '0')}</Text>
            <Image
              source={require('../../../assets/tilapiaImagem.png')}
              style={styles.produtoImagem}
            />
            <Text style={styles.texto}>{peixe.nome}</Text>
            <TouchableOpacity style={styles.statusContainer}>
              <Text style={styles.texto}>{peixe.status}</Text>
              <Image
                source={require('../../../assets/cliqueStatus.png')}
                style={styles.statusIcon}
              />
            </TouchableOpacity>
            <Text style={styles.texto}>{peixe.estoque}</Text>
            <TouchableOpacity style={styles.botaoExibir}>
              <Text style={{ color: '#107CE0' }}>Exibir</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.salvarContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('DrawerRoutes')} style={[globalStyles.button, { backgroundColor: '#107CE0' }]} >
            <Text style={globalStyles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  tituloContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  adicionarPeixeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#107CE0',
    padding: 12,
    borderRadius: 8,
  },
  adicionarIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: 'contain',
  },
  adicionarPeixeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  caixaPeixes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    width: '90%',
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  texto: {
    fontSize: 14,
    color: '#333',
  },
  produtoImagem: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    width: 15,
    height: 15,
    marginLeft: 5,
    resizeMode: 'contain',
  },
  botaoExibir: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  salvarContainer: {
    marginTop: 20,
    width: '90%',
  },
});
