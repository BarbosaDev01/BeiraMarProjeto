import React from "react";
import { ImageBackground, View, Image } from "react-native-web";
import { style } from "../login/style";
import { useNavigation } from "@react-navigation/native"; 
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';


export default function Menu(){
  const navigation = useNavigation();
 return(
    <DrawerContentScrollView style={style.drawerContent}>
        <ImageBackground 
            source={require('../../assets/imagemFundo.png')}
            style={style.container}
            resizeMode="cover">
        <View>
        <Image
        source={require('../../assets/logoBeira.png')}
        style={style.logo}
        />
        </View>
        <View>
        <Image  source={require('../../assets/peixeLogo.png')} style={style.icon}/>
        <DrawerItem label="Controle"  onPress={() => navigation.navigate('Login')}/>
        </View>


        </ImageBackground>
    </DrawerContentScrollView>
 );
}