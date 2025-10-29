import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
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
import NovoPeixeControle from './pages/dashboard/novoPeixeControle';
import Menu from './pages/dashboard/menu';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerRoutes() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
      drawerContent={(props) => <Menu {...props} />}
      screenOptions={{
        drawerType: isLargeScreen ? 'permanent' : 'front',
        headerShown: false,
        swipeEnabled: !isLargeScreen,
      }}
      drawerStyle={{
        width: isLargeScreen ? 240 : '70%',
      }}
    >
      <Drawer.Screen name="ControleProduto" component={ControleProduto} />
      <Drawer.Screen name="NovoPeixeControle" component={NovoPeixeControle} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Telas sem sidebar */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Stack.Screen name="ConfirmarSenha" component={ConfirmarSenha} />

        {/* Telas com sidebar */}
        <Stack.Screen name="Dashboard" component={DrawerRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
