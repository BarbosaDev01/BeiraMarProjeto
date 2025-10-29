import React, { useState } from 'react';
import { View, Text, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/imagemFundo.png')}
      style={style.container}
      resizeMode="cover"
    >
      <View style={style.logoContainer}>
        <Image
          source={require('../../assets/logoBeira.png')}
          style={[style.logo, { borderRadius: 150 }]}
        />
      </View>

      {/* Campo Usuário */}
      <View>
        <Image source={require('../../assets/usuario.png')} style={style.icon2} />
        <TextInput
          placeholder="USUÁRIO"
          value={usuario}
          onChangeText={setUsuario}
          style={style.input}
          placeholderTextColor="white"
        />
      </View>

      {/* Campo Senha */}
      <View>
        <Image source={require('../../assets/senha.png')} style={style.icon2} />
        <TextInput
          placeholder="SENHA"
          value={senha}
          onChangeText={setSenha}
          style={style.input}
          secureTextEntry
          placeholderTextColor="white"
        />
      </View>

      {/* Link Esqueci minha senha */}
      <TouchableOpacity
        onPress={() => navigation.navigate('RecuperarSenha')}
        activeOpacity={0.7}
      >
        <Text style={style.textos}>Esqueci minha senha</Text>
      </TouchableOpacity>

      {/* Botões */}
      <View>
        <TouchableOpacity
          style={style.botoes}
          onPress={() => navigation.navigate('Dashboard', { screen: 'ControleProduto' })}
        >
          <Text style={style.botaoTexto}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.botoes}
          onPress={() => navigation.navigate('Cadastro')}
          activeOpacity={0.7}
        >
          <Text style={style.botaoTexto}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
