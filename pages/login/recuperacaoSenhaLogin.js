import React, { useState } from 'react';
import { View, Text, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { loginStyles } from './style';
import { useNavigation } from '@react-navigation/native';

export default function RecuperarSenha() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/imagemFundo.png')}
      style={globalStyles.container}
      resizeMode="cover"
    >
      <View style={[globalStyles.logoContainer, { justifyContent: 'center' }]}>
        {/* Logo */}
        <Image
          source={require('../../assets/logoBeira.png')}
          style={[globalStyles.logo, { borderRadius: 150 }]}
        />

        {/* Instrução */}
        <Text style={[globalStyles.text, loginStyles.instructions]}>
          Insira seu e-mail ou número de recuperação, e enviaremos um código de 6 dígitos para a criação de uma nova senha.
        </Text>

        {/* Input */}
        <TextInput
          placeholder="Email ou número"
          placeholderTextColor="white"
          style={globalStyles.input}
          value={email}
          onChangeText={setEmail}
        />

        {/* Botão */}
        <TouchableOpacity 
          onPress={() => navigation.navigate('ConfirmarSenha')}
          activeOpacity={0.7} 
          style={globalStyles.button}
        >
          <Text style={globalStyles.buttonText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
