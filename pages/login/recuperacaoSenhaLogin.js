import React, { useState } from 'react';
import { View, Text, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { style } from './style';

export default function RecuperarSenha() {
  const [email, setEmail] = useState('');

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

        <Text style={{ color: 'white', textAlign: 'center', marginVertical: 15 }}>
          Insira seu e-mail ou número de recuperação, e enviaremos um código de 6 dígitos para a criação de uma nova senha.
        </Text>

        <TextInput
          placeholder="Email ou número"
          placeholderTextColor="white"
          style={style.input}
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={style.botoes} onPress={() => console.log('Enviando código...')}>
          <Text style={style.botaoTexto}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
