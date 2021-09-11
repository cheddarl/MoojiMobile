import React from 'react';
import { Text, View } from 'react-native';

import CalendarStyle from './CalendarStyle';

function Calendar(){
    return(
        <View style={CalendarStyle.container}>
            <Text style={CalendarStyle.texto}><b>Tela "Calendário"</b></Text>
            <Text style={CalendarStyle.texto}>Em desenvolvimento</Text>
        </View>
    )
}
export default Calendar;