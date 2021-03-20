import React from "react";
import { NavigationContainer, useNavigation } from '@react-navigation/native' ;
import { createStackNavigator } from '@react-navigation/stack';

import {TrayLunch  } from './Cafeterias/TrayLunch';

const AuthStack = createStackNavigator();


export default () =>{
    <NavigationContainer>
        <AuthStack.Navigator>
            <AuthStack.Screen name = 'Scr' component = {TrayLunch}>

            </AuthStack.Screen>
        </AuthStack.Navigator>
    </NavigationContainer>
}

