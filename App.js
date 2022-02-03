import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Pantalla1 from './components/Pantalla1';
import Pantalla2 from './components/Pantalla2';
import Pantalla3 from './components/Pantalla3';
import Pantalla4 from './components/Pantalla4';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Pantalla1' component={Pantalla1} options={{
          tabBarLabel: 'Pantalla1 / Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name='Pantalla2' component={Pantalla2} options={{
          tabBarLabel: 'Pantalla2 / Modal',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="arrow-up" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name='Pantalla3' component={Pantalla3} options={{
          tabBarLabel: 'Pantalla3 / Api 1',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name='Pantalla4' component={Pantalla4} options={{
          tabBarLabel: 'Pantalla4 / Api 2',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
