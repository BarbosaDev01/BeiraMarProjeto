import React from 'react'; 
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import Login from './pages/login/index';
import Cadastro from './pages/login/cadastroLogin';
import RecuperarSenha from './pages/login/recuperacaoSenhaLogin';
import ConfirmarSenha from './pages/login/confirmarSenha';

import Menu from './pages/dashboard/menu';

const Stack = createNativeStackNavigator();

export default function App() {
   const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  });
  
  return (
    <Menu />

  );
}

const styles = StyleSheet.create({});
