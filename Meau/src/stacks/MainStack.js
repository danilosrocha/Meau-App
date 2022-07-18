import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp_1 from '../screens/SignUp/index_1';
import SignUp_2 from '../screens/SignUp/index_2';
import Home from '../screens/Home';
import UpdateUserData from '../screens/UpdateUserData';


const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName='Preload'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp_1" component={SignUp_1}/>
        <Stack.Screen name="SignUp_2" component={SignUp_2}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="UpdateUserData" component={UpdateUserData}/>
    </Stack.Navigator>
);
