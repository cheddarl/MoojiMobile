import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from './src/Routes/Routes'

function App() {
  return(
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
export default App;