import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  useWindowDimensions, 
  ScrollView 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../../../styles/globalStyles';

export default function ControleProduto() {
  const navigation = useNavigation();
  const dimensions = useWindowDimensions();
  const isDrawerOpen = useDrawerStatus() === 'open';
  const isLargeScreen = dimensions.width >= 768;
  const shouldShowButton = !isLargeScreen && !isDrawerOpen;

  const produtos = [
    { id: '#001', nome: 'Tilápia', status: 'Produção', estoque: '1.5 toneladas', img: require('../../../assets/tilapiaImagem.png') },
    { id: '#002', nome: 'Pacu', status: 'Estoque', estoque: '50 caixas', img: require('../../../assets/pacuImagem.png') },
    { id: '#003', nome: 'Tilápia', status: 'Venda', estoque: '1.5 toneladas', img: require('../../../assets/tilapiaImagem.png') },
    { id: '#004', nome: 'Robalo', status: 'Produção', estoque: '6 toneladas', img: require('../../../assets/robaloImagem.png') },
  ];

  return (
    <View style={[globalStyles.containerSider, { flex: 1 }]}>
      
      {/* Botão menu drawer */}
      {shouldShowButton && (
        <TouchableOpacity
          style={globalStyles.menuButton2}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu" size={30} color="#000" />
        </TouchableOpacity>
      )}

      <ScrollView contentContainerStyle={controleProdutoStyles.containerPrincipal}>
        
        {/* Cabeçalho */}
        <View style={controleProdutoStyles.header}>
          <View>
            <Text style={globalStyles.tituloPaginas}>Controle de Produtos</Text>
            <View style={controleProdutoStyles.subHeader}>
              <Text>Produtos Atuais</Text>
              <TouchableOpacity style={{ paddingLeft: 5 }}>
                <Text style={{ color: '#107CE0' }}>Histórico</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={controleProdutoStyles.botaoFiltro}>
            <Image source={require('../../../assets/Filtrar.png')} />
          </TouchableOpacity>

          <View style={controleProdutoStyles.acoesHeader}>
            <TouchableOpacity>
              <Image source={require('../../../assets/iconeComprar.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
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

        {/* Lista de produtos */}
        {produtos.map((item, index) => (
          <View key={index} style={controleProdutoStyles.caixaPeixes}>
            <Text style={controleProdutoStyles.texto}>{item.id}</Text>
            <Image source={item.img} style={controleProdutoStyles.produtoImagem} />
            <Text style={controleProdutoStyles.texto}>{item.nome}</Text>
            <TouchableOpacity style={controleProdutoStyles.statusContainer}>
              <Text style={controleProdutoStyles.texto}>{item.status}</Text>
              <Image source={require('../../../assets/cliqueStatus.png')} style={controleProdutoStyles.statusIcon} />
            </TouchableOpacity>
            <Text style={controleProdutoStyles.texto}>{item.estoque}</Text>
            <TouchableOpacity style={controleProdutoStyles.botaoExibir}>
              <Text style={{ color: '#107CE0' }}>Exibir</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Botão adicionar novo produto */}
        <View style={controleProdutoStyles.adicionarContainer}>
          <TouchableOpacity 
            style={controleProdutoStyles.buttonAdicionar} 
            onPress={() => navigation.navigate('NovoPeixeControle')}
          >
            <Image source={require('../../../assets/adicionar.png')} style={controleProdutoStyles.adicionarIcon} />
            <Text style={globalStyles.buttonText}>Adicionar novo produto</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const controleProdutoStyles = StyleSheet.create({
  containerPrincipal: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  header: {
    width: '90%',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  botaoFiltro: {
    padding: 5,
  },
  acoesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  caixaPeixes: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginVertical: 5,
  },
  produtoImagem: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statusIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  texto: {
    fontSize: 14,
  },
  botaoExibir: {
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  adicionarContainer: {
    marginTop: 20,
    width: '90%',
  },
  buttonAdicionar: {
    backgroundColor:'#107CE0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
  },
  adicionarIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: 'contain',
  },
});
