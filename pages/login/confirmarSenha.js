import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  ImageBackground, 
  TouchableOpacity 
} from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { loginStyles } from './style';
import { useNavigation } from '@react-navigation/native';

export default function ConfirmarSenha() {
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

      {/* Instrução */}
      <View>
        <Text style={[globalStyles.text, loginStyles.instructions]}>
          Insira o código de recuperação
        </Text>
      </View>

      {/* Input código */}
      <View style={loginStyles.inputWrapper}>
        <TextInput
          style={globalStyles.input}
          placeholder="-----"
          placeholderTextColor="white"
          keyboardType="numeric"
          maxLength={6}
        />
      </View>

      {/* Botão Enviar */}
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.7}
          style={globalStyles.button}
        >
          <Text style={globalStyles.buttonText}>Enviar código</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
