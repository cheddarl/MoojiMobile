import React from 'react';
import { Text, View, Image } from 'react-native';
import CalendarStyle from './CalendarStyle';
import { AntDesign } from '@expo/vector-icons';

import MediaEmocoes from '../../../assets/mediaEmocoes.png';

// O gráfico apresentado ainda não foi desenvolvido, é apenas um print do protótipo da aplicação.
function Calendar(){
    return(
        <View style={CalendarStyle.container}>
            <View style={CalendarStyle.calendario}>
                <AntDesign name="leftcircleo" size={39} color="white" />
                <Text style={CalendarStyle.data}><b>  Agosto 2021  </b></Text>
                <AntDesign name="rightcircleo" size={39} color="white" />
            </View>

            <Image style={CalendarStyle.media} source={MediaEmocoes} />
        </View>
    )
}
export default Calendar;