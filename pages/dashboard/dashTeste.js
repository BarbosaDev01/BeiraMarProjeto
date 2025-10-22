import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer'; 
import { Ionicons } from '@expo/vector-icons'; 

export default function DashboardTest() {
  const navigation = useNavigation();
  const dimensions = useWindowDimensions(); // 1. Obtém a largura da tela
  const isDrawerOpen = useDrawerStatus() === 'open';

  // Define se a tela está no modo 'permanent' de desktop
  const isPermanentMode = dimensions.width >= 768; 

  // Condição para mostrar o botão:
  // 1. Não estamos no modo permanente (ou seja, estamos em mobile/tablet onde o menu não está fixo)
  // E
  // 2. O Drawer não está explicitamente aberto
  const shouldShowButton = !isPermanentMode && !isDrawerOpen;

  // Se você precisa que o componente renderize o conteúdo do dashboard mesmo quando o menu
  // está aberto/permanente, não deve retornar 'null' aqui.
  
  return (
    <View style={styles.container}>
      {/* 4. Renderiza o botão APENAS se shouldShowButton for verdadeiro */}
      {shouldShowButton && (
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()} 
        >
          {/* Você pode trocar o Ionicons por uma Image, como no seu Menu.js, se preferir */}
          <Ionicons name="menu" size={30} color="#000" /> 
        </TouchableOpacity>
      )}

      {/* Conteúdo do Dashboard continua visível, independentemente do estado do menu */}
      <Text style={{textAlign: 'center', marginTop: 100}}>
        Conteúdo do Dashboard (Menu lateral: {isPermanentMode ? 'PERMANENTE' : 'FRONT'})
      </Text>
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