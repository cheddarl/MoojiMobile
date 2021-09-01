import React from 'react';
import { View, Image } from 'react-native';
import PerfilStyle from './PerfilStyle';

function Perfil(){
    return(
        <View style={PerfilStyle.container}>
            <View style={PerfilStyle.perfil}>
                <View style={PerfilStyle.image}></View> 
            </View>
        </View>
    )
}
export default Perfil;