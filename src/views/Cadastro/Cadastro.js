import React, { useState } from 'react';
import { Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import CadastroStyle from './CadastroStyle';

import LogoMooji from '../../../assets/logoMooji.png';

function Cadastro(){
    const [date, setDate] = useState('');

    return(
        <View style={CadastroStyle.container}>
            <Image style={CadastroStyle.mooji} source={LogoMooji} />
            <View style={CadastroStyle.formulario}>
                <TextInput 
                    style={CadastroStyle.campo}
                    placeholder="Nome"
                    placeholderTextColor="rgba(255, 255, 255, 0.3)"
                    //value={nome}
                />
                <TextInputMask
                    style={CadastroStyle.campo}
                    placeholder="Data de nascimento"
                    placeholderTextColor="rgba(255, 255, 255, 0.3)"
                    type={'datetime'}
                    options={{
                        format: 'DD/MM/YYYY'
                    }}
                    value={date}
                    onChangeText={ text => setDate(text)}
                />
                <TextInput 
                    style={CadastroStyle.campo}
                    placeholder="E-mail"
                    placeholderTextColor="rgba(255, 255, 255, 0.3)"
                    //value={nome}
                />
                <TextInput 
                    style={CadastroStyle.campo}
                    placeholder="Senha"
                    placeholderTextColor="rgba(255, 255, 255, 0.3)"
                    secureTextEntry={true}
                    //value={senha}
                />
                <TextInput 
                    style={CadastroStyle.campo}
                    placeholder="Confirme sua senha"
                    placeholderTextColor="rgba(255, 255, 255, 0.3)"
                    //value={nome}
                />
                <View style={CadastroStyle.avisoSenha}>
                    <Text style={CadastroStyle.texto}>A senha deve conter no mínimo 8 dígitos</Text>
                </View>
                <TouchableOpacity style={CadastroStyle.button}>
                    <Text style={CadastroStyle.buttonText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Cadastro;