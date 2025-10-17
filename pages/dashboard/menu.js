import React from "react";
import { ImageBackground, View, Image, TouchableOpacity } from "react-native";
import { style } from "../login/style";
import { useNavigation } from "@react-navigation/native"; 
import {DrawerItem } from '@react-navigation/drawer';


export default function Menu(){
  const navigation = useNavigation();
 return(
    <View style={style.drawerContent}>
        <ImageBackground 
            source={require('../../assets/fundoSide.png')}
            style={style.container}
            resizeMode="cover">
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{margin:10}}>
                <Image source={require('../../assets/voltar.png')} />
                
                
            </TouchableOpacity>
        </View>                
        <View>
        <Image
        source={require('../../assets/logoBeira.png')}
        style={[style.logo, {width: 100, height: 100}]}
        />
        </View>

        <View style={{display: "flex"}}>
        <Image  source={require('../../assets/peixeLogo.png')} style={style.icon}/>
        <DrawerItem label="Controle"  onPress={() => navigation.navigate('Login')}/>

            
         </View>


        </ImageBackground>
    </View>
 );
}