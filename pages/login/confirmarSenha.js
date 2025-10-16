import React, { useState } from 'react';
import { View, Text, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';

export default function ConfirmarSenha() {
 const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/imagemFundo.png')}
      style={style.container}
      resizeMode="cover"
      >
     <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
         <Image source={require('../../assets/logoBeira.png')} style={style.logo} />
     </View>

     <View>
        <Text style={style.textos}>Insira o código de recuperação</Text>
     </View>
     <View>
        <TextInput style={style.input} placeholder='-----'></ TextInput>
     </View>

     <View>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.7} 
          style = {style.botoes}
      >
            <Text style={style.botaoTexto}>Enviar código</Text>
        </TouchableOpacity>
     </View>
    </ImageBackground>
  );
}