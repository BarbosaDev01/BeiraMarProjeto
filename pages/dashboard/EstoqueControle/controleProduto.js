import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer'; 
import { Ionicons } from '@expo/vector-icons'; 
import { style } from '../../login/style';

export default function ControleProduto() {
  const navigation = useNavigation();
  const dimensions = useWindowDimensions(); 
  const isDrawerOpen = useDrawerStatus() === 'open';

  
  const isLargeScreen = dimensions.width >= 768;
  
  const shouldShowButton = !isLargeScreen && !isDrawerOpen;

  return (
    <View style={[style.containerSider, { flex: 1 }]}>

      
      {shouldShowButton && (
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()} 
        >
          <Ionicons name="menu" size={30} color="#000" /> 
        </TouchableOpacity>
      )}

      <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
     
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: '80%' }}>
          <View>
            <Text style={style.tituloPaginas}>Controle de Produtos</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Produtos Atuais</Text>
              <TouchableOpacity style={{ paddingLeft: 5 }}>
                <Text style={{ color: '#107CE0' }}>Histórico</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity> 
            <Image source={require('../../assets/Filtrar.png')} /> 
          </TouchableOpacity>
          
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity> 
              <Image source={require('../../assets/iconeComprar.png')} /> 
            </TouchableOpacity>
            <TouchableOpacity> 
              <Image source={require('../../assets/iconeVender.png')} /> 
            </TouchableOpacity>
          </View>
        </View>

        {/* Barra de controle */}
        <View style={style.barraControleProdutos}>
          <Text>Id</Text>
          <Text>Peixe</Text>
          <Text>Status</Text>
          <Text>Estoque Atual</Text>
        </View>

        {/* Lista de produtos */}
        {[
          { id: '#001', nome: 'Tilápia', status: 'Produção', estoque: '1.5 toneladas', img: require('../../assets/tilapiaImagem.png') },
          { id: '#002', nome: 'Pacu', status: 'Estoque', estoque: '50 caixas', img: require('../../assets/pacuImagem.png') },
          { id: '#003', nome: 'Tilápia', status: 'Venda', estoque: '1.5 toneladas', img: require('../../assets/tilapiaImagem.png') },
          { id: '#004', nome: 'Robalo', status: 'Produção', estoque: '6 toneladas', img: require('../../assets/robaloImagem.png') },
        ].map((item, index) => (
          <View key={index} style={style.caixaPeixes}>
            <Text>{item.id}</Text>
            <Image source={item.img} />
            <Text>{item.nome}</Text>
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <Text>{item.status}</Text> 
              <Image source={require('../../assets/cliqueStatus.png')} />
            </TouchableOpacity>
            <Text>{item.estoque}</Text>
            <TouchableOpacity><Text>Exibir</Text></TouchableOpacity>
          </View>
        ))}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    elevation: 3, 
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
});
