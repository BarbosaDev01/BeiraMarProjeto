import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { globalStyles } from '../../../styles/globalStyles';

export default function NovoPeixeControle() {
  return (
    <View style={[globalStyles.containerSider, { flex: 1 }]}>
      
      <ScrollView contentContainerStyle={styles.containerPrincipal}>
        
        {/* Título da página */}
        <View style={styles.tituloContainer}>
          <Text style={globalStyles.tituloPaginas}>Novo Peixe</Text>
        </View>

        {/* Barra de controle */}
        <View style={globalStyles.barraControleProdutos}>
          <Text style={globalStyles.textoBarra}>Id</Text>
          <Text style={globalStyles.textoBarra}>Peixe</Text>
          <Text style={globalStyles.textoBarra}>Status</Text>
          <Text style={globalStyles.textoBarra}>Estoque Atual</Text>
        </View>

        {/* Adicionar novo peixe */}
        <View style={styles.adicionarContainer}>
          <TouchableOpacity style={styles.adicionarPeixeButton}>
            <Image source={require('../../../assets/adicionar.png')} style={styles.adicionarIcon} />
            <Text style={styles.adicionarPeixeText}>Adicionar novo Peixe</Text>
          </TouchableOpacity>
        </View>

        {/* Botão Salvar */}
        <View style={styles.salvarContainer}>
          <TouchableOpacity style={[globalStyles.button, { backgroundColor: '#107CE0' }]}>
            <Text style={globalStyles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  tituloContainer: {
    marginBottom: 20,
  },
  adicionarContainer: {
    marginTop: 20,
    width: '90%',
  },
  adicionarPeixeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#107CE0',
    padding: 12,
    borderRadius: 8,
  },
  adicionarIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: 'contain',
  },
  adicionarPeixeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  salvarContainer: {
    marginTop: 20,
    width: '90%',
  },
});
