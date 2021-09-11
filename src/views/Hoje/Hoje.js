import React from 'react';
import { Text, View } from 'react-native';

import HojeStyle from './HojeStyle';

function Hoje(){
    return(
        <View style={HojeStyle.container}>
            <Text style={HojeStyle.texto}><b>Tela "Hoje"</b></Text>
            <Text style={HojeStyle.texto}>Em desenvolvimento</Text>
        </View>
    )
}
export default Hoje;