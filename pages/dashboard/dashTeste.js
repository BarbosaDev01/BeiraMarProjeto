import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer'; 
import { Ionicons } from '@expo/vector-icons'; 
import {style} from '../login/style';

export default function DashboardTest() {
  const navigation = useNavigation();
  const dimensions = useWindowDimensions(); 
  const isDrawerOpen = useDrawerStatus() === 'open';

  const isPermanentMode = dimensions.width >= 768; 
  const shouldShowButton = !isPermanentMode && !isDrawerOpen;
  
  return (
    <View style={style.containerSider}>

    <View>
      {shouldShowButton && (
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()} 
        >
          <Ionicons name="menu" size={30} color="#000" /> 
        </TouchableOpacity>
      )}
      </View>
      <View style={{flexDirection:"row"}}>
      <View>
        <Text style={style.tituloPaginas}>Controle de Produtos</Text>
        <View style={{flexDirection:"row"}}>
        <Text>Produtos Atuais</Text>
        <TouchableOpacity><Text>Histórico</Text></TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity> <Image source={require('../../assets/Filtrar.png')} /> </TouchableOpacity>
      </View>
      
      <View style={{flexDirection:"row"}}>
         <TouchableOpacity> <Image source={require('../../assets/iconeComprar.png')} /> </TouchableOpacity>
          <TouchableOpacity> <Image source={require('../../assets/iconeVender.png')} /> </TouchableOpacity>
      </View>
      </View>

      <View style={{flexDirection:"column"}}>
          <View style={style.barraControleProdutos}>
            <Text>Id</Text>
            <Text>Peixe</Text>
             <Text>Status</Text>
            <Text>Estoque Atual</Text>
          </View>

          <View style={style.caixaPeixes}>
              <Text>#001</Text>
              <Image source={require('../../assets/tilapiaImagem.png')} />
              <Text>Tilápia</Text>
              <TouchableOpacity>
                <Text>Produção</Text> 
                <Image source={require('../../assets/cliqueStatus.png')} />
              </TouchableOpacity>
              <Text>1.5 toneladas</Text>
              <TouchableOpacity><Text>Exibir</Text></TouchableOpacity>
          </View>

            <View style={style.caixaPeixes}>
              <Text>#002</Text>
              <Image source={require('../../assets/pacuImagem.png')} />
              <Text>Pacu</Text>
              <TouchableOpacity>
                <Text>Estoque</Text> 
                <Image source={require('../../assets/cliqueStatus.png')} />
              </TouchableOpacity>
              <Text>50 caixas</Text>
              <TouchableOpacity><Text>Exibir</Text></TouchableOpacity>
          </View>

            <View style={style.caixaPeixes}>
              <Text>#001</Text>
              <Image source={require('../../assets/tilapiaImagem.png')} />
              <Text>Tilápia</Text>
              <TouchableOpacity>
                <Text>Venda</Text> 
                <Image source={require('../../assets/cliqueStatus.png')} />
              </TouchableOpacity>
              <Text>1.5 toneladas</Text>
              <TouchableOpacity><Text>Exibir</Text></TouchableOpacity>
          </View>

            <View style={style.caixaPeixes}>
              <Text>#004</Text>
              <Image source={require('../../assets/robaloImagem.png')} />
              <Text>Robalo</Text>
              <TouchableOpacity>
                <Text>Produção</Text> 
                <Image source={require('../../assets/cliqueStatus.png')} />
              </TouchableOpacity>
              <Text>6 toneladas</Text>
              <TouchableOpacity><Text>Exibir</Text></TouchableOpacity>
          </View>

            
      </View>
    </View>

   
    
  );
}

const styles = StyleSheet.create({

});