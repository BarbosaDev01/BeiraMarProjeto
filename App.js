import React from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/login/index';
import Cadastro from './pages/login/cadastroLogin';
import RecuperarSenha from './pages/login/recuperacaoSenhaLogin';
import ConfirmarSenha from './pages/login/confirmarSenha';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
         <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
         <Stack.Screen name="ConfirmarSenha" component={ConfirmarSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
