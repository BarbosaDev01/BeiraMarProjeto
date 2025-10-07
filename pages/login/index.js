import React, { useState } from 'react';
import { View, Text, Image, TextInput, ImageBackground,TouchableOpacity } from 'react-native';
import { style } from './style';


export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    //imagem de fundo
    <ImageBackground
      source={require('../../assets/imagemFundo.png')}
      style={style.container}
      resizeMode="cover"
    >
      <View>
      {/* logo */}
         <Image
          source={require('../../assets/logoBeira.png')}
          style={style.logo}
        />
      </View>
      <View>
        {/* Input Usuário */}
        <Image 
        source={require('../../assets/usuario.png')}
        style={style.icon}
        />
        <TextInput
          placeholder="USUÁRIO"
          value={usuario}
          onChangeText={setUsuario}
          style={style.input}
          placeholderTextColor="white"
  
        />
      </View>

      <View>
        <Image 
        source={require('../../assets/senha.png')}
        style={style.icon2}
        />
         {/* Input Usuário */}
        <TextInput
          placeholder="SENHA"
          value={senha}
          onChangeText={setSenha}
          style={style.input}
          secureTextEntry 
           //SecueText serve pra nao ver oq ta escrevendo
          placeholderTextColor="white"
        />
      </View>
      <View style={{ flexDirection: 'row-reverse', justifyContent: 'flex-end'}}>
        <Text style={style.esqueci}>ESQUECI MINHA SENHA</Text>
       
      </View>
      <View>
        <TouchableOpacity style={style.botoes}>
          <Text style={style.botaoTexto}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={style.botoes}>
          <Text style={style.botaoTexto}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
