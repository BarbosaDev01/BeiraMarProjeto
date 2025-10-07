import React, { useState } from "react";
import { View, TextInput, Image, ImageBackground } from "react-native";
import { style } from './style';

export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [criarSenha, setCriarSenha] = useState('');

    return (
        <ImageBackground 
            source={require("../../assets/imagemFundo.png")}
            style={{ flex: 1 }} // Mantém o fundo cobrindo a tela inteira
        >
                <View>
                        <Image
                        source={require('../../assets/logoBeira.png')} style={style.logo}
                        />
                </View>
                <View style={style.container}>
                        <View>
                        <Image source={require('../../assets/email.png')} style={style.icon} />
                        <TextInput
                                placeholder="E-MAIL"
                                value={email}
                                onChangeText={setEmail}
                                style={style.input}
                                placeholderTextColor="white"
                        />
                        </View>

                        <View>
                        <Image source={require('../../assets/usuario.png')} style={style.icon} />
                        <TextInput
                                placeholder="NOME DO USUÁRIO"
                                value={nomeUsuario}
                                onChangeText={setNomeUsuario}
                                style={style.input}
                                placeholderTextColor="white"
                        />
                        </View>

                        <View>
                        <Image source={require('../../assets/phone.png')} style={style.icon} />
                        <TextInput
                                placeholder="Telefone"
                                value={telefone}
                                onChangeText={setTelefone}
                                style={style.input}
                                placeholderTextColor="white"
                        />
                        </View>

                        <View>
                        <Image source={require('../../assets/interfaceCpf.png')} style={style.icon} />
                        <TextInput
                                placeholder="CPF"
                                value={cpf}
                                onChangeText={setCpf}
                                style={style.input}
                                placeholderTextColor="white"
                        />
                        </View>

                        <View>
                        <Image source={require('../../assets/senha.png')} style={style.icon} />
                        <TextInput
                                placeholder="SENHA"
                                value={criarSenha}
                                onChangeText={setCriarSenha}
                                style={style.input}
                                placeholderTextColor="white"
                                secureTextEntry={true}
                        />
                        </View>
                </View>
                </ImageBackground>
        
     
    );
}
