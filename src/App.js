/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskScreen from './TaskScreen';
import AboutScreen from './AboutScreen';

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

export default App;
