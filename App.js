import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from "./src/views/Perfil/Perfil";
const Tab = createBottomTabNavigator ();

function App() {
  return(
  <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator> 
  </NavigationContainer>
  );
}
export default App;