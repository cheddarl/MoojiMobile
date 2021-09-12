import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

import HojeStyle from './HojeStyle';

import Surpresa from '../../../assets/surpresa.png';

function Hoje(){
    let emocao = "Surpresa";
    let bpm = "x";

    return(
        <View style={HojeStyle.container}>
            <LinearGradient
                colors={['#b84c65', 'rgba(184,76,101,0.17)', '#000']}
                style={HojeStyle.fundo}
            >
                <View style={HojeStyle.calendario}>
                    <AntDesign name="leftcircleo" size={39} color="white" />
                    <Text style={HojeStyle.data}><b>  11 Setembro 2021  </b></Text>
                    <AntDesign name="rightcircleo" size={39} color="white" />
                </View>
                <View style={HojeStyle.estadoEmocional}>
                    <Text style={HojeStyle.dados}><b>Emoção:</b> {emocao}               {bpm} <b>bpm</b></Text>
                    <Image style={HojeStyle.surpresa} source={Surpresa} />
                </View>
                
                <TextInput 
                    style={HojeStyle.campo}
                    placeholder="Notas"
                    placeholderTextColor="rgba(255, 255, 255, 0.6)"
                    //value={nome}
                />
    
                
            </LinearGradient>
        </View>
    )
}
export default Hoje;