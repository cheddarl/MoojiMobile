import React from 'react';
import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import AnalyticsStyle from './AnalyticsStyle';

import Grafico1 from '../../../assets/graficoTemp1.png';
import Grafico2 from '../../../assets/graficoTemp2.png';

// Os gráficos apresentados ainda não foram desenvolvidos, são apenas prints do protótipo da aplicação.
function Analytics(){
    return(
        <View style={AnalyticsStyle.container}>
            <View style={AnalyticsStyle.calendario}>
                <AntDesign name="leftcircleo" size={39} color="white" />
                <Text style={AnalyticsStyle.data}><b>  11 Setembro 2021  </b></Text>
                <AntDesign name="rightcircleo" size={39} color="white" />
            </View>

            <Image style={AnalyticsStyle.grafico} source={Grafico1} />
            <Image style={AnalyticsStyle.grafico} source={Grafico2} />
        </View>
    )
}
export default Analytics;