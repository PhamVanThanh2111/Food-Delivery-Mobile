import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenWelcome from './javascript/ScreenWelcome'
import WalkThrough01 from './javascript/ScreenWalkThrough01'
import WalkThrough02 from './javascript/ScreenWalkThrough02'
import WalkThrough03 from './javascript/ScreenWalkThrough03'

const Stack = createStackNavigator();

const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WalkThrough03">
        <Stack.Screen name="ScreenWelcome" component={ScreenWelcome} />
        <Stack.Screen name="WalkThrough01" component={WalkThrough01} />
        <Stack.Screen name="WalkThrough02" component={WalkThrough02} />
        <Stack.Screen name="WalkThrough03" component={WalkThrough03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;