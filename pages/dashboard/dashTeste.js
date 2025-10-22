import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// 1. Importe o hook useDrawerStatus
import { useDrawerStatus } from '@react-navigation/drawer'; 
import { Ionicons } from '@expo/vector-icons'; // Exemplo de ícone

export default function DashboardTest() {
  const navigation = useNavigation();
  
  // 2. Obtenha o status do Drawer (pode ser 'open' ou 'closed')
  const isDrawerOpen = useDrawerStatus() === 'open';

  // 3. Condição para renderizar o botão: APENAS se o Drawer estiver FECHADO
  if (isDrawerOpen) {
    // Se o Drawer estiver aberto, não renderiza o botão
    return null; 
  }

  // Se o Drawer estiver fechado, renderiza o botão
  return (
    <View style={styles.container}>
      {/* Botão para Abrir o Drawer */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()} 
      >
        <Ionicons name="menu" size={30} color="#000" />
      </TouchableOpacity>

      <Text>Conteúdo do Dashboard</Text>
      {/* ... restante do seu dashboard */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, 
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    padding: 10,
  },
});