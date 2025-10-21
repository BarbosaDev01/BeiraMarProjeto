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
        <View style={style.sideContainer}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{margin:10}}>
                        <Image source={require('../../assets/voltar.png')} />
                        
                        
                    </TouchableOpacity>
                </View>                
                <View style={style.logoContainer}>
                <Image
                source={require('../../assets/logoBeira.png')}
                style={[style.logo, {width: 100, height: 100, alignSelf: 'center'}]}
                resizeMode="contain"
                />
                </View>
                <View style={style.itemContainer}>
                <Image  source={require('../../assets/peixeLogo.png')} style={[style.icon, { padding: 5,}]}/>
                <DrawerItem label="Controle"  onPress={() => navigation.navigate('Login')} style={{padding: 5}}/> 
                </View> 

                <View style={style.itemContainer}>
                <Image  source={require('../../assets/pedidosLogo.png')} style={[style.icon, { padding: 5,}]}/>
                <DrawerItem label="Pedidos"  onPress={() => navigation.navigate('Login')} style={{padding: 5}}/> 
                </View> 

                <View style={style.itemContainer}>
                <Image  source={require('../../assets/vendasLogo.png')} style={[style.icon, { padding: 5,}]}/>
                <DrawerItem label="Vendas"  onPress={() => navigation.navigate('Login')} style={{padding: 5}}/> 
                </View>

                <View style={style.itemContainer}>
                <Image  source={require('../../assets/relatorioLogo.png')} style={[style.icon, { padding: 5,}]}/>
                <DrawerItem label="Relatório"  onPress={() => navigation.navigate('Login')} style={{padding: 5}}/> 
                </View>

                <View style={style.itemContainer}>
                <Image  source={require('../../assets/producaoLogo.png')} style={[style.icon, { padding: 5,}]}/>
                <DrawerItem label="Produção"  onPress={() => navigation.navigate('Login')} style={{padding: 5}}/> 
                </View>


        </View>


        </ImageBackground>
    </View>
 );
}