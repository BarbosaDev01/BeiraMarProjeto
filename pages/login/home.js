import React, { useState } from 'react';
import { View, Text, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-web';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation(); // hook de navegação

  return (
    <ImageBackground
      source={require('../../assets/imagemFundo.png')}
      style={style.container}
      resizeMode="cover"
    >
      <View>
        <Image source={require('../../assets/logoBeira.png')} style={style.logo} />
      </View>

      <View>
        <Image source={require('../../assets/usuario.png')} style={style.icon} />
        <TextInput
          placeholder="USUÁRIO"
          value={usuario}
          onChangeText={setUsuario}
          style={style.input}
          placeholderTextColor="white"
        />
      </View>

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

      <View>
        <TouchableOpacity style={style.botoes}>
          <Text style={style.botaoTexto}>LOGIN</Text>
        </TouchableOpacity>
        
        <Button 
        style={style.botoes} 
        onPress={() => navigation.navigate('Cadastro')}>
        <Text style={style.botaoTexto}>CRIAR CONTA</Text>
        </Button>
        
      </View>
    </ImageBackground>
  );
}
