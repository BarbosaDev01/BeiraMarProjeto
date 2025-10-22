import {StyleSheet} from 'react-native'
export const style= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width: '100%'
      
    },
    
    logoContainer: {
      justifyContent: 'center', 
      alignItems: 'center',     
      width: '100%',
},

    logo:{ 
        resizeMode: 'contain',
        minWidth: 120, 
        maxWidth: 250, 
        maxHeight: 250, 
        minHeight: 120, 
        borderRadius:100,
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
   flex:1, 
   borderRadius: 20,
},
sideContainer: {
  flex: 1, 
  flexDirection: "column",
  alignItems: "flex-start",
  width: '100%',
}, 
itemContainer: {
 justifyContent: 'center', 
  alignItems: 'center',  
  flexDirection: 'row',    
  alignItems: 'center',     
  paddingHorizontal: 10,
  marginVertical: 5,
},
menuButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    padding: 10,
  },

containerSider:{
  flex: 1,
  paddingTop: 10,
  flexDirection: 'column'
},
tituloPaginas:{
  top:2, 
  color:'#385C92', 
  fontWeight: 'bold', 
  fontSize:50,
  paddingLeft: 20,
  paddingTop: 20,
},
barraControleProdutos:{
  width: '80%',
   height:100,
  backgroundColor: '#107CE0',
  padding: 20,
    flexDirection: 'row',
  gap: 100,
},
caixaPeixes: {
  height:100,
  width: '80%',
  backgroundColor: '#ffff',
  shadowColor: '#0000',
  padding: 20,
  flexDirection: 'row',
  gap: 50,
}



})
