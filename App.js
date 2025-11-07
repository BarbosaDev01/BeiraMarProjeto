import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

// Telas
import Login from './pages/login/index';
import Cadastro from './pages/login/cadastroLogin';
import RecuperarSenha from './pages/login/recuperacaoSenhaLogin';
import ConfirmarSenha from './pages/login/confirmarSenha';
import ControleProduto from './pages/dashboard/EstoqueControle/controleProduto';
import NovoPeixeControle from './pages/dashboard/EstoqueControle/novoPeixeControle';
import Menu from './pages/dashboard/menu';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerRoutes() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <View style={{ flex: 1 }}>
      <Drawer.Navigator
        initialRouteName="Controle Produto"
        screenOptions={{
          headerShown: false,
          drawerType: isLargeScreen ? 'permanent' : 'front',
          swipeEnabled: !isLargeScreen,
          drawerStyle: { width: isLargeScreen ? 240 : '70%' },
        }}
      >
        <Drawer.Screen name="Controle Produto" component={ControleProduto} />
        
      </Drawer.Navigator>
    </View>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Telas sem sidebar */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Stack.Screen name="ConfirmarSenha" component={ConfirmarSenha} />
        <Stack.Screen name="NovoPeixeControle" component={NovoPeixeControle} />

        {/* Tela principal com Drawer */}
        <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
