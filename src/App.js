/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AboutScreen from './AboutScreen';
import TaskScreen from './TaskScreen';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="TaskScreen" component={TaskScreen}></Tabs.Screen>
        <Tabs.Screen name="About" component={AboutScreen}></Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

// New feature (Typescript)
// New feature (Redux Toolkit)
// Introduce bug

export default App;
