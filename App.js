import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Pantalla1 from './components/Pantalla1';
import Pantalla2 from './components/Pantalla2';
import Pantalla3 from './components/Pantalla3';
import Pantalla4 from './components/Pantalla4';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  //Parece ser que react navitagion instala un módulo que acaban de actualizar en fase experimental. Utilizo esta función para ignorar en mensaje informativo.
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Pantalla 1: Modal' component={Pantalla1} options={{
          tabBarLabel: 'Pantalla 1',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name='Pantalla 2: Stack' component={Pantalla2} options={{
          tabBarLabel: 'Pantalla 2',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="arrow-right" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name='API Rick y Morty' component={Pantalla3} options={{
          tabBarLabel: 'Pantalla 3',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name='Pantalla4' component={Pantalla4} options={{
          tabBarLabel: 'Pantalla 4',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
