import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#107CE0',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  inputWrapper: {
    marginVertical: 10,
  },
    inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // Fundo branco para toda a linha
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    height: 50,
    width: '85%',
  },

  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: '#000', // Texto preto para contraste
    fontSize: 16,
    backgroundColor: 'transparent', // Remove fundo do input
  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 8,
  },
   
botoes: {
  paddingVertical: 12,
  borderRadius: 10,
  width: '70%',
  alignItems: 'center',
  marginTop: 20,           // aumenta distância do último input
},


  botaoTexto: {
    color: '#107CE0',
    fontWeight: 'bold',
  },

  // --- Texto: esqueci senha / instruções / gerais ---
  forgotPassword: {
    color: '#fff',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 14,
    textDecorationLine: 'underline',
  },

  instructions: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 20,
    paddingHorizontal: 25,
    lineHeight: 22,
  },

  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 8,
  },

  // --- Botão principal global ---
  button: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    width: '60%',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#107CE0',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
