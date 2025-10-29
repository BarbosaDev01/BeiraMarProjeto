import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  logo: {
    resizeMode: 'contain',
    minWidth: 120,
    maxWidth: 250,
    maxHeight: 250,
    minHeight: 120,
    borderRadius: 100,
  },

  input: {
    borderWidth: 1,
    borderRadius: 15,
    color: 'white',
    borderColor: 'white',
    padding: 8,
    marginTop: 10,
    height: 60,
    width: 460,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Montserrat-Regular',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },

  icon: {
    width: 40,
    height: 40,
  },

  icon2: {
    position: 'absolute',
    left: 30,
    width: 30,
    height: 30,
    margin: 20,
    tintColor: '#aaa',
  },

  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 450,
    height: 70,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 25,
    fontFamily: 'Montserrat-Regular',
    color: 'blue',
    textAlign: 'center',
  },

  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: 'white',
    textAlign: 'left',
  },
});
