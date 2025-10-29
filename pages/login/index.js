import React, { useState } from 'react';
import { View, Text, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { loginStyles } from './style';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/imagemFundo.png')}
      style={globalStyles.container}
      resizeMode="cover"
    >
      {/* Logo */}
      <View style={globalStyles.logoContainer}>
        <Image
          source={require('../../assets/logoBeira.png')}
          style={[globalStyles.logo, { borderRadius: 150 }]}
        />
      </View>

      {/* Campo Usuário */}
      <View>
        <Image source={require('../../assets/usuario.png')} style={loginStyles.icon} />
        <TextInput
          placeholder="USUÁRIO"
          value={usuario}
          onChangeText={setUsuario}
          style={globalStyles.input}
          placeholderTextColor="white"
        />
      </View>

      {/* Campo Senha */}
      <View>
        <Image source={require('../../assets/senha.png')} style={loginStyles.icon} />
        <TextInput
          placeholder="SENHA"
          value={senha}
          onChangeText={setSenha}
          style={globalStyles.input}
          secureTextEntry
          placeholderTextColor="white"
        />
      </View>

      {/* Link Esqueci minha senha */}
      <TouchableOpacity
        onPress={() => navigation.navigate('RecuperarSenha')}
        activeOpacity={0.7}
      >
        <Text style={loginStyles.forgotPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>

      {/* Botões */}
      <View>
        <TouchableOpacity
          style={globalStyles.button}
        onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={globalStyles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => navigation.navigate('Cadastro')}
          activeOpacity={0.7}
        >
          <Text style={globalStyles.buttonText}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
