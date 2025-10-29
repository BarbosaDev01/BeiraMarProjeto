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
import { useState } from 'react';
import { useDrawerStatus } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import ControleProduto from './EstoqueControle/controleProduto';

import { style } from '../login/style';

export default function NovoPeixeControle() {
    
    return( 
        <View style={[style.containerSider, { flex: 1}]}> 
            <View>
            <Text style={style.tituloPaginas}>Novo Peixes</Text>
        </View>

        <View style={style.barraControleProdutos}>
            <Text style={style.textoBarra}>Id</Text>
            <Text style={style.textoBarra}>Peixe</Text>
            <Text style={style.textoBarra}>Status</Text>
            <Text style={style.textoBarra}>Estoque Atual</Text>
        </View>

        <View >
            <TouchableOpacity style={{flexDirection:'row'}}>
                <Image source={require('../../assets/adicionar.png')}/>
                <Text>Adicionar novo Peixe</Text>

            </TouchableOpacity>
            
        </View> 

        <View>
            <TouchableOpacity style={[style.botoes, {backgroundColor:'#107CE0'}]}>
                <Text>Salvar</Text>
            </TouchableOpacity>
        </View>
        
        </View>
       
    );
}