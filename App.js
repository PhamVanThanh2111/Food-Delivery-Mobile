import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenWelcome from './javascript/ScreenWelcome'
import WalkThrough01 from './javascript/ScreenWalkThrough01'
import WalkThrough02 from './javascript/ScreenWalkThrough02'
import WalkThrough03 from './javascript/ScreenWalkThrough03'
import SignIn from './javascript/ScreenSignIn'
import ForgotPassword from './javascript/ForgotPassword'
import ResetEmail from './javascript/ResetEmail'
import SignUp from './javascript/SignUp'
import LoginByPhoneNumber from './javascript/LoginByPhoneNumber'
import HomePage from './javascript/HomePage'
import FeaturedPartners from './javascript/FeaturedPartners'
import SingleRestaurant from './javascript/SingleRestaurant'
import TypeLocation from './javascript/TypeLocation'
import EnterAddress from './javascript/EnterAddress'
import ConfirmPhoneNumber from './javascript/ConfirmPhoneNumber'

const Stack = createStackNavigator();

const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SingleRestaurant">
        <Stack.Screen name="ScreenWelcome" component={ScreenWelcome} />
        <Stack.Screen name="WalkThrough01" component={WalkThrough01} />
        <Stack.Screen name="WalkThrough02" component={WalkThrough02} />
        <Stack.Screen name="WalkThrough03" component={WalkThrough03} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetEmail" component={ResetEmail} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LoginByPhoneNumber" component={LoginByPhoneNumber} />
        <Stack.Screen name="ConfirmPhoneNumber" component={ConfirmPhoneNumber} />
        <Stack.Screen name="EnterAddress" component={EnterAddress} />
        <Stack.Screen name="TypeLocation" component={TypeLocation} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="FeaturedPartners" component={FeaturedPartners} />
        <Stack.Screen name="SingleRestaurant" component={SingleRestaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;