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
import { globalStyles } from '../../styles/globalStyles'; 
import { loginStyles } from "./style";
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
            style={globalStyles.container}
        >
            <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 20 }}>
                {/* Logo centralizada */}
                <View style={globalStyles.logoContainer}>
                    <Image 
                        source={require('../../assets/logoBeira.png')} 
                        style={[globalStyles.logo, { borderRadius: 150 }]} 
                    />
                </View>

                {/* Inputs */}
                <View style={loginStyles.inputWrapper}>
                    <View style={loginStyles.inputRow}>
                        <Image source={require('../../assets/email.png')} style={loginStyles.icon} />
                        <TextInput
                            placeholder="E-MAIL"
                            value={email}
                            onChangeText={setEmail}
                            style={globalStyles.input}
                            placeholderTextColor="white"
                        />
                    </View>

                    <View style={loginStyles.inputRow}>
                        <Image source={require('../../assets/usuario.png')} style={loginStyles.icon} />
                        <TextInput
                            placeholder="NOME DO USUÁRIO"
                            value={nomeUsuario}
                            onChangeText={setNomeUsuario}
                            style={globalStyles.input}
                            placeholderTextColor="white"
                        />
                    </View>

                    <View style={loginStyles.inputRow}>
                        <Image source={require('../../assets/phone.png')} style={loginStyles.icon} />
                        <TextInput
                            placeholder="TELEFONE"
                            value={telefone}
                            onChangeText={setTelefone}
                            style={globalStyles.input}
                            placeholderTextColor="white"
                        />
                    </View>

                    <View style={loginStyles.inputRow}>
                        <Image source={require('../../assets/interfaceCpf.png')} style={globalStyles.icon} />
                        <TextInput
                            placeholder="CPF"
                            value={cpf}
                            onChangeText={setCpf}
                            style={globalStyles.input}
                            placeholderTextColor="white"
                        />
                    </View>

                    <View style={loginStyles.inputRow}>
                        <Image source={require('../../assets/senha.png')} style={globalStyles.icon} />
                        <TextInput
                            placeholder="SENHA"
                            value={criarSenha}
                            onChangeText={setCriarSenha}
                            style={globalStyles.input}
                            placeholderTextColor="white"
                            secureTextEntry={true}
                        />
                    </View>

                    {/* Botão */}
                    <TouchableOpacity 
                        style={globalStyles.button} 
                        onPress={() => navigation.navigate('Login')}
                        activeOpacity={0.7} 
                    >
                        <Text style={globalStyles.buttonText}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}
