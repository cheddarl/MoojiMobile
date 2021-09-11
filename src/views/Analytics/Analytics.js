import React from 'react';
import { Text, View } from 'react-native';

import AnalyticsStyle from './AnalyticsStyle';

function Analytics(){
    return(
        <View style={AnalyticsStyle.container}>
            <Text style={AnalyticsStyle.texto}><b>Tela "Analytics"</b></Text>
            <Text style={AnalyticsStyle.texto}>Em desenvolvimento</Text>
        </View>
    )
}
export default Analytics;