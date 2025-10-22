import React from 'react'; 
import { StyleSheet, useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';

import Login from './pages/login/index';
import Cadastro from './pages/login/cadastroLogin';
import RecuperarSenha from './pages/login/recuperacaoSenhaLogin';
import ConfirmarSenha from './pages/login/confirmarSenha';
import DashboardTest from './pages/dashboard/dashTeste';
import Menu from './pages/dashboard/menu';

const Drawer = createDrawerNavigator();

export default function App() {
  const dimensions = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  });

 
  const isLargeScreen = dimensions.width >= 768;

  return (
    <NavigationContainer>
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
        initialRouteName="DashboardTest"
      >
        <Drawer.Screen name="DashboardTest" component={DashboardTest} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Cadastro" component={Cadastro} />
        <Drawer.Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Drawer.Screen name="ConfirmarSenha" component={ConfirmarSenha} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
