import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Modal, // Importado o componente Modal
} from 'react-native';
import { globalStyles } from '../../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

// --- Componente Modal Separado para seleção de Status ---
const StatusModal = ({ visible, onClose, onSelectStatus }) => {
  const statusOptions = ['Entrada', 'Produção', 'Embalada', 'Venda'];

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={modalStyles.centeredView}>
        <View style={modalStyles.modalView}>
          <Text style={modalStyles.modalTitle}>Selecione o Status</Text>
          {statusOptions.map((status) => (
            <TouchableOpacity
              key={status}
              style={modalStyles.statusOption}
              onPress={() => onSelectStatus(status)}
            >
              <Text style={modalStyles.statusText}>{status}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={[modalStyles.button, modalStyles.buttonClose]}
            onPress={onClose}
          >
            <Text style={modalStyles.textStyle}>Atualizar Status</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
// --- Fim do Componente Modal ---

export default function NovoPeixeControle() {
  const navigation = useNavigation();
  const [peixes, setPeixes] = useState([]);
  const [nome, setNome] = useState('');
  const [status, setStatus] = useState('');
  const [estoque, setEstoque] = useState('');
  const [modalVisible, setModalVisible] = useState(false);// Novo estado para controlar o Modal

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

  const handleStatusSelect = (selectedStatus) => {
    setStatus(selectedStatus);
    setModalVisible(false); // Fecha o modal após a seleção
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

          {/* Botão que abre o Modal para selecionar o Status */}
          <TouchableOpacity
            style={[styles.input, styles.statusInput]}
            onPress={() => setModalVisible(true)} // Abre o Modal
          >
            <Text style={status ? styles.statusTextFilled : styles.statusTextPlaceholder}>
              {status || "Status (ex: Produção)"}
            </Text>
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Estoque (ex: 1.5 toneladas)"
            value={estoque}
            onChangeText={setEstoque}
            keyboardType="numeric" // Adicionado para estoque
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
            <Text style={{color:"white", fontSize: 35}}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Renderiza o Modal */}
      <StatusModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectStatus={handleStatusSelect}
      />
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
  statusInput: {
    justifyContent: 'center', // Alinha o texto verticalmente no TouchableOpacity
  },
  statusTextFilled: {
    color: '#333',
    fontSize: 14,
  },
  statusTextPlaceholder: {
    color: '#999',
    fontSize: 14,
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
    padding: 10,
    alignContent: "center",
    alignItems:"center"
  },
});

// --- Estilos para o Modal ---
const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statusOption: {
    padding: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  statusText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#107CE0',
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  buttonClose: {
    backgroundColor: '#ccc',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});