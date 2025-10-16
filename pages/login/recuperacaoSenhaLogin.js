import React, { useState } from 'react';
import { View, Text, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';

export default function RecuperarSenha() {
  const [email, setEmail] = useState('');
   const navigation = useNavigation();
  

  return (
    <ImageBackground
      source={require('../../assets/imagemFundo.png')}
      style={style.container}
      resizeMode="cover"
    >
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Image
          source={require('../../assets/logoBeira.png')}
          style={style.logo}
        />

        <Text style={style.textos}>
          Insira seu e-mail ou número de recuperação, e enviaremos um código de 6 dígitos para a criação de uma nova senha.
        </Text>

        <TextInput
          placeholder="Email ou número"
          placeholderTextColor="white"
          style={style.input}
          value={email}
          onChangeText={setEmail}
        />

          <TouchableOpacity 
            onPress={() => navigation.navigate('ConfirmarSenha')}
            activeOpacity={0.7} 
            style={style.botoes}
        >
          <Text style={style.botaoTexto}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
