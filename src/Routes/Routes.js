import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Hoje from '../views/Hoje/Hoje';
import Analytics from '../views/Analytics/Analytics';
import Calendar from '../views/Calendar/Calendar';
import Perfil from '../views/Perfil/Perfil';

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Routes = () => {
    return(
        <Tab.Navigator 
            screenOptions={({ route }) => ({ 
                headerShown: false, 
                tabBarIcon: ({ color }) => {
                    let iconTag;
                    let size = 30;

                    switch (route.name) {
                        case 'Home':
                            iconTag = <FontAwesome5 name="home" size={size} color={color} />;
                            break;
                        case 'Analytics':
                            iconTag = <MaterialCommunityIcons name="google-analytics" size={size} color={color} />;
                            break;
                        case 'Calendar':
                            iconTag = <AntDesign name="calendar" size={size} color={color} />;
                            break;
                        case 'Perfil':
                            iconTag = <MaterialIcons name="person" size={size} color={color} />;
                            break;
                        default:
                            iconTag = <AntDesign name="smile-circle" size={size} color={color} />;
                            break;
                    }
                    return iconTag;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: 'rgba(255,255,255,0.78)',
                labelStyle: {
                    fontSize: 12,
                    position: 'relative',
                    top: -9,
                },
                tabStyle: {
                    position: 'relative',
                    top: -10,
                    width: 1000, 
                    backgroundColor: '#000',  
                    height: 60,
                    borderBottom: 'none', 
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                },
                style: {
                    position: 'relative',
                    bottom: 112,
                }
            }}
            >
            <Tab.Screen name="Hoje" component={Hoje} />
            <Tab.Screen name="Analytics" component={Analytics} />
            <Tab.Screen name="Calendar" component={Calendar} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator> 
    );
}
export default Routes;