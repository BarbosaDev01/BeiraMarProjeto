import React, { useState } from "react";
import { 
    View, 
    TextInput, 
    Image, 
    ImageBackground, 
    TouchableOpacity, 
    Text, 
    ScrollView 
} from "react-native";
import { style } from './style';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [criarSenha, setCriarSenha] = useState('');
    const navigation = useNavigation();

    return (
        <ImageBackground 
            source={require("../../assets/imagemFundo.png")} 
            resizeMode="cover"
            style={style.container}
        >
        
                {/* Logo centralizada */}
                <View style={style.logoContainer}>
                    <Image source={require('../../assets/logoBeira.png')} style={[style.logo, {borderRadius: 150}]} />
                </View>

                {/* Inputs */}
                <View style={{alignContent: 'center', flexDirection: 'column', alignSelf: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../../assets/email.png')} style={style.icon} />
                        <TextInput
                            placeholder="E-MAIL"
                            value={email}
                            onChangeText={setEmail}
                            style={style.input}
                            placeholderTextColor="white"
                        />
                    </View>

                    <View style={style.inputContainer}>
                        <Image source={require('../../assets/usuario.png')} style={style.icon} />
                        <TextInput
                            placeholder="NOME DO USUÁRIO"
                            value={nomeUsuario}
                            onChangeText={setNomeUsuario}
                            style={style.input}
                            placeholderTextColor="white"
                        />
                    </View>

                    <View style={style.inputContainer}>
                        <Image source={require('../../assets/phone.png')} style={style.icon} />
                        <TextInput
                            placeholder="Telefone"
                            value={telefone}
                            onChangeText={setTelefone}
                            style={style.input}
                            placeholderTextColor="white"
                        />
                    </View>

                    <View style={style.inputContainer}>
                        <Image source={require('../../assets/interfaceCpf.png')} style={style.icon} />
                        <TextInput
                            placeholder="CPF"
                            value={cpf}
                            onChangeText={setCpf}
                            style={style.input}
                            placeholderTextColor="white"
                        />
                    </View>

                    <View style={style.inputContainer}>
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

                    {/* Botão */}
                    <TouchableOpacity 
                        style={style.botoes} 
                        onPress={() => navigation.navigate('Login')}
                        activeOpacity={0.7} 
                    >
                        <Text style={style.botaoTexto}>CADASTRAR</Text>
                    </TouchableOpacity>

                </View>
        </ImageBackground>
    );
}
