import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { BottomTabNavigator } from './presentation/navigator/BottomTabNavigator';

export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
