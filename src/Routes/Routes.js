import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Hoje from '../views/Hoje/Hoje';
import Analytics from '../views/Analytics/Analytics';
import Calendar from '../views/Calendar/Calendar';
import Perfil from '../views/Perfil/Perfil';

const Tab = createBottomTabNavigator();

const Routes = () => {
    return(
        <Tab.Navigator 
            screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Hoje" component={Hoje} />
            <Tab.Screen name="Analytics" component={Analytics} />
            <Tab.Screen name="Calendar" component={Calendar} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator> 
    );
}
export default Routes;