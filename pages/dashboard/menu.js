import React from "react";
import { ImageBackground, View, Image, TouchableOpacity } from "react-native";
import { style } from "../login/style"; // Certifique-se que exportou corretamente
import { DrawerItem } from "@react-navigation/drawer";

export default function Menu({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/fundoSide.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={style.sideContainer}>
          {/* Botão voltar */}
          <View>
            <TouchableOpacity onPress={() => navigation.closeDrawer()} style={{ margin: 10 }}>
              <Image source={require("../../assets/voltar.png")} />
            </TouchableOpacity>
          </View>

          {/* Logo */}
          <View style={style.logoContainer}>
            <Image
              source={require("../../assets/logoBeira.png")}
              style={{ width: 100, height: 100, alignSelf: "center" }}
              resizeMode="contain"
            />
          </View>

          {/* Itens do Drawer */}
          <View style={style.itemContainer}>
            <Image source={require("../../assets/peixeLogo.png")} style={style.icon} />
            <DrawerItem
              label="Controle"
              labelStyle={{ color: "white", fontSize: 16 }}
              onPress={() => navigation.navigate("ControleProduto")}
            />
          </View>

          <View style={style.itemContainer}>
            <Image source={require("../../assets/pedidosLogo.png")} style={style.icon} />
            <DrawerItem
              label="Pedidos"
              labelStyle={{ color: "white", fontSize: 16 }}
              onPress={() => navigation.navigate("NovoPeixeControle")}
            />
          </View>

          <View style={style.itemContainer}>
            <Image source={require("../../assets/vendasLogo.png")} style={style.icon} />
            <DrawerItem
              label="Vendas"
              labelStyle={{ color: "white", fontSize: 16 }}
              onPress={() => navigation.navigate("NovoPeixeControle")}
            />
          </View>

          <View style={style.itemContainer}>
            <Image source={require("../../assets/relatorioLogo.png")} style={style.icon} />
            <DrawerItem
              label="Relatório"
              labelStyle={{ color: "white", fontSize: 16 }}
              onPress={() => navigation.navigate("NovoPeixeControle")}
            />
          </View>

          <View style={style.itemContainer}>
            <Image source={require("../../assets/producaoLogo.png")} style={style.icon} />
            <DrawerItem
              label="Produção"
              labelStyle={{ color: "white", fontSize: 16 }}
              onPress={() => navigation.navigate("NovoPeixeControle")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
