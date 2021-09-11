import React from 'react';
import { Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import LoginStyle from './LoginStyle';

import LogoMooji from '../../../assets/logoMooji.png';

function Login(){
    return(
        <View style={LoginStyle.container}>
            <Image style={LoginStyle.mooji} source={LogoMooji} />
            <View style={LoginStyle.formulario}>
                <TextInput 
                    style={LoginStyle.campo}
                    placeholder="Username/e-mail"
                    placeholderTextColor="rgba(255, 255, 255, 0.3)"
                    //value={nome}
                />
                <TextInput 
                    style={LoginStyle.campo}
                    placeholder="Senha"
                    placeholderTextColor="rgba(255, 255, 255, 0.3)"
                    secureTextEntry={true}
                    //value={senha}
                />
                <TouchableOpacity style={LoginStyle.button}>
                    <Text style={LoginStyle.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View style={LoginStyle.cadastro}>
                <Text style={LoginStyle.texto}>Novo por aqui?</Text>
                <Text style={LoginStyle.texto}>Cadastre-se</Text>
            </View>
        </View>
    );
}

export default Login;