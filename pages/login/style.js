import {StyleSheet} from 'react-native'
export const style= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width: '100%'
      
    },
    
    logo:{ 
        margin: 10,
        borderRadius: 150,
        width: 250, 
        height: 250, 
        resizeMode: 'contain' ,
        alignItems:'center',
        justifyContent:'center'
    },
    
    
    input:{
        borderWidth: 1,
        borderRadius: 15, 
        color: 'white',
        borderColor: 'white',
        padding: 8,
        marginTop: 10,
        height:60,
        width: 460,
        alignItems:'center',
        justifyContent:'center',
        margin: 10,
        textAlign: 'center',
        fontSize: 25,   
        fontFamily: 'Montserrat-Regular'
    },

     
  icon: {
    position: 'absolute', 
    left: 30,
    width:40,
    height:40,  
    margin: 20,           
    tintColor: '#aaa',
  },

icon2: {
    position: 'absolute', 
    left: 30,
    width:30,
    height:30,  
    margin: 20,           
    tintColor: '#aaa',
  },
esqueci:{
    color:'white', 
    flexDirection: 'row-reverse'
  }, 
 botoes: {
  backgroundColor: 'white',
  borderRadius: 10,
  width: 450, 
  height: 70,
  margin: 10,
  justifyContent: 'center', 
  alignItems: 'center',     
},
botaoTexto: {
  fontSize: 25,
  fontFamily: 'Montserrat-Regular',
  color: 'blue',
  textAlign: 'center',
},
textos: {
  fontFamily: 'Montserrat-Regular', 
  fontSize: 15,
  color: 'white',
  textAlign: 'left',
  justifyContent: 'left',

},
drawerContent: {
   flex:1
}
})
