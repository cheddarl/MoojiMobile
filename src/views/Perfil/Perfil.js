import React from 'react';
import { Text, View, Image } from 'react-native';
import PerfilStyle from './PerfilStyle';

import Raissa from '../../../assets/raissa.jpg';
import William from '../../../assets/william.jpg';
import Lucas from '../../../assets/lucas.jpg';
import Samuel from '../../../assets/samuel.jpg';

// Tela de perfil temporária com os integrantes do grupo
function Grupo(nome, idade, imagem){
    return(
        <View style={PerfilStyle.profile}>
            <View style={PerfilStyle.anel}>
                <Image style={PerfilStyle.image} source={imagem} />
            </View>
            <Text style={PerfilStyle.texto}>{nome}</Text>
            <Text style={PerfilStyle.texto}>{idade}</Text>
        </View>

    )
}

function Perfil(){
    return(
        <View style={PerfilStyle.container}>
            {Grupo('Lucas', 18, Lucas)}
            {Grupo('Samuel', 17, Samuel)}
            {Grupo('Raíssa', 17, Raissa)}
            {Grupo('William', 18, William)}
        </View>
    )
}
export default Perfil;

/*
<Text style={PerfilStyle.texto}><b>Tela "Perfil"</b></Text>
<Text style={PerfilStyle.texto}>Em desenvolvimento</Text>
*/