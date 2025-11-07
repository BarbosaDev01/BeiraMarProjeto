import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  useWindowDimensions, 
  ScrollView, 
  Modal 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../../../styles/globalStyles';

export default function ControleProduto() {
  const navigation = useNavigation();
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  const shouldShowButton = !isLargeScreen;

  const [modalVisible, setModalVisible] = useState(false);
  const [statusSelecionado, setStatusSelecionado] = useState('Produção');

  // === Função para definir cor do status dinamicamente ===
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Produção':
        return { backgroundColor: '#D32F2F' }; // vermelho
      case 'Estoque':
        return { backgroundColor: '#FBC02D' }; // amarelo
      case 'Venda':
        return { backgroundColor: '#1976D2' }; // azul
      default:
        return { backgroundColor: '#E0E0E0' };
    }
  };

  const selecionarStatus = (novoStatus) => {
    setStatusSelecionado(novoStatus);
    setModalVisible(false);
  };

  return (
    <View style={[globalStyles.containerSider, { flex: 1 }]}>
      {shouldShowButton && (
        <TouchableOpacity
          style={[globalStyles.menuButton2, { margin: 12 }]}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu" size={28} color="#000" />
        </TouchableOpacity>
      )}

      <ScrollView contentContainerStyle={controleProdutoStyles.containerPrincipal}>
        {/* Cabeçalho */}
        <View style={controleProdutoStyles.header}>
          <View>
            <Text style={globalStyles.tituloPaginas}>Controle de Produtos</Text>
            <View style={controleProdutoStyles.subHeader}>
              <Text style={controleProdutoStyles.subHeaderText}>Produtos Atuais</Text>
              <TouchableOpacity style={controleProdutoStyles.histButton}>
                <Text style={controleProdutoStyles.histText}>Histórico</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={controleProdutoStyles.botaoFiltro}>
            <Image source={require('../../../assets/Filtrar.png')} />
          </TouchableOpacity>

          <View style={controleProdutoStyles.acoesHeader}>
            <TouchableOpacity style={controleProdutoStyles.iconeAcao}>
              <Image source={require('../../../assets/iconeComprar.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={controleProdutoStyles.iconeAcao}>
              <Image source={require('../../../assets/iconeVender.png')} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Barra de controle */}
        <View style={globalStyles.barraControleProdutos}>
          <Text style={globalStyles.textoBarra}>Id</Text>
          <Text style={globalStyles.textoBarra}>Peixe</Text>
          <Text style={globalStyles.textoBarra}>Status</Text>
          <Text style={globalStyles.textoBarra}>Estoque Atual</Text>
        </View>

        {/* Produto 1 */}
        <View style={controleProdutoStyles.caixaPeixes}>
          <Text style={controleProdutoStyles.texto}>#001</Text>
          <Image source={require('../../../assets/tilapiaImagem.png')} style={controleProdutoStyles.produtoImagem} />
          <Text style={controleProdutoStyles.texto}>Tilápia</Text>

          <TouchableOpacity 
            style={[controleProdutoStyles.statusContainer, getStatusStyle(statusSelecionado)]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={controleProdutoStyles.statusTexto}>
              {statusSelecionado}
            </Text>
            <Ionicons name="chevron-down" size={16} color="#fff" style={{ marginLeft: 4 }} />
          </TouchableOpacity>

          <Text style={controleProdutoStyles.texto}>1.5 toneladas</Text>
          <TouchableOpacity style={controleProdutoStyles.botaoExibir}>
            <Text style={controleProdutoStyles.textoExibir}>Exibir</Text>
          </TouchableOpacity>
        </View>

        {/* Botão adicionar novo produto */}
        <View style={controleProdutoStyles.adicionarContainer}>
          <TouchableOpacity 
            style={controleProdutoStyles.buttonAdicionar} 
            onPress={() => navigation.navigate('NovoPeixeControle')}
          >
            <Image source={require('../../../assets/adicionar.png')} style={controleProdutoStyles.adicionarIcon} />
            <Text style={controleProdutoStyles.buttonTextAdicionar}>Adicionar novo produto</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* MODAL */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={controleProdutoStyles.overlay}>
          <View style={controleProdutoStyles.modalContainer}>
            <Text style={controleProdutoStyles.modalTitulo}>Selecione o Status:</Text>

            {['Produção', 'Estoque', 'Venda', 'Suspenso'].map((status, index) => (
              <TouchableOpacity key={index} onPress={() => selecionarStatus(status)}>
                <Text style={controleProdutoStyles.modalOpcao}>
                  {status === 'Produção' && '🟢 '}
                  {status === 'Estoque' && '🔵 '}
                  {status === 'Venda' && '🟠 '}
                  {status === 'Suspenso' && '🔴 '}
                  {status}
                </Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity 
              onPress={() => setModalVisible(false)} 
              style={controleProdutoStyles.modalFechar}
            >
              <Text style={controleProdutoStyles.modalFecharText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const controleProdutoStyles = StyleSheet.create({
  containerPrincipal: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 30,
  },
  header: {
    width: '90%',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',   
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  subHeaderText: {
    fontSize: 14,
    color: '#555',
  },
  histButton: {
    paddingLeft: 8,
  },
  histText: {
    color: '#107CE0',
    fontWeight: '500',
  },
  botaoFiltro: {
    padding: 6,
    backgroundColor:'#107CE0',
    borderRadius: 10,
    flexShrink: 1, 
  },
  acoesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconeAcao: {
    marginHorizontal: 5,
  },
  caixaPeixes: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    marginVertical: 6,
    backgroundColor: '#FAFAFA',
  },
  produtoImagem: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  // === NOVO ESTILO STATUS ===
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 10,
    minWidth: 100,
    justifyContent: 'center',
  },
  statusTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  texto: {
    fontSize: 14,
    color: '#333',
  },
  botaoExibir: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#107CE0',
  },
  textoExibir: {
    color: '#107CE0',
    fontWeight: '500',
  },
  adicionarContainer: {
    marginTop: 25,
    width: '90%',
  },
  buttonAdicionar: {
    backgroundColor:'#107CE0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 12,
  },
  adicionarIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
    resizeMode: 'contain',
  },
  buttonTextAdicionar: {
    color: '#fff',
    fontWeight: '600',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 260,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 12,
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  modalOpcao: {
    fontSize: 16,
    paddingVertical: 6,
    color: '#444',
  },
  modalFechar: {
    marginTop: 12,
    backgroundColor: '#107CE0',
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalFecharText: {
    color: '#fff',
    fontWeight: '600',
  },
});
