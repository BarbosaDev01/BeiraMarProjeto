import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  useWindowDimensions, 
  Image 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import NovoPeixeControle from '../novoPeixeControle';

// Estilos globais importados
import { style } from '../../login/style';

export default function ControleProduto() {
  const navigation = useNavigation();
  const dimensions = useWindowDimensions();
  const isDrawerOpen = useDrawerStatus() === 'open';
  const isLargeScreen = dimensions.width >= 768;
  const shouldShowButton = !isLargeScreen && !isDrawerOpen;

  // Lista de produtos
  const produtos = [
    { id: '#001', nome: 'Tilápia', status: 'Produção', estoque: '1.5 toneladas', img: require('../../../assets/tilapiaImagem.png') },
    { id: '#002', nome: 'Pacu', status: 'Estoque', estoque: '50 caixas', img: require('../../../assets/pacuImagem.png') },
    { id: '#003', nome: 'Tilápia', status: 'Venda', estoque: '1.5 toneladas', img: require('../../../assets/tilapiaImagem.png') },
    { id: '#004', nome: 'Robalo', status: 'Produção', estoque: '6 toneladas', img: require('../../../assets/robaloImagem.png') },
  ];

  return (
    <View style={[style.containerSider, { flex: 1 }]}>
      
      {/* Botão de menu lateral */}
      {shouldShowButton && (
        <TouchableOpacity
          style={style.menuButton2}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu" size={30} color="#000" />
        </TouchableOpacity>
      )}

      <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>

        {/* Cabeçalho da página */}
        <View style={styles.header}>
          <View>
            <Text style={style.tituloPaginas}>Controle de Produtos</Text>
            <View style={styles.subHeader}>
              <Text>Produtos Atuais</Text>
              <TouchableOpacity style={{ paddingLeft: 5 }}>
                <Text style={{ color: '#107CE0' }}>Histórico</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.botaoFiltro}>
            <Image source={require('../../../assets/Filtrar.png')} />
          </TouchableOpacity>

          <View style={styles.acoesHeader}>
            <TouchableOpacity>
              <Image source={require('../../../assets/iconeComprar.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../../assets/iconeVender.png')} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Barra de controle */}
        <View style={style.barraControleProdutos}>
          <Text style={style.textoBarra}>Id</Text>
          <Text style={style.textoBarra}>Peixe</Text>
          <Text style={style.textoBarra}>Status</Text>
          <Text style={style.textoBarra}>Estoque Atual</Text>
        </View>

        {/* Lista de produtos */}
        {produtos.map((item, index) => (
          <View key={index} style={style.caixaPeixes}>
            <Text>{item.id}</Text>
            <Image source={item.img} />
            <Text>{item.nome}</Text>

            <TouchableOpacity style={{ alignItems: 'center' }}>
              <Text>{item.status}</Text>
              <Image source={require('../../../assets/cliqueStatus.png')} />
            </TouchableOpacity>

            <Text>{item.estoque}</Text>
            <TouchableOpacity>
              <Text>Exibir</Text>
            </TouchableOpacity>
          </View>
        ))}
        <View>
            <TouchableOpacity style={[style.botoes, {backgroundColor:'#107CE0'} ]}   onPress={() => navigation.navigate('NovoPeixeControle')}>
                <Image source={require('../../../assets/adicionar.png')}/>
                <Text>Adicionar novo produto</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: '80%',
  },

  subHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  botaoFiltro: {
    backgroundColor: '#107CE0',
    borderRadius: 10,
    width: 200,
    height: 70,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  acoesHeader: {
    flexDirection: "row",
  },
});
