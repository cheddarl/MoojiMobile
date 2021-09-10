import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../views/Perfil/Perfil';

const Routes =() => {
    return(
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Perfil}/>
        </Tab.Navigator>
    );
}
export default Routes;