import React from 'react';
import { View, Text, Image } from 'react-native';
import LoadingStyle from './LoadingStyle';
import LogoMooji from '../../../assets/logoMooji.png';
import LogoHearthings from '../../../assets/logoHearthings.png'

function Loading(){
    return(
        <View style={LoadingStyle.container}>
            <Image style={LoadingStyle.mooji} source={LogoMooji} />
            
            <View style={LoadingStyle.rodape}>
                <Text style={LoadingStyle.texto}>by</Text>
                <Image style={LoadingStyle.hearthings} source={LogoHearthings} />
            </View>
        </View>
    );
}
export default Loading;