import React from "react";
import { NavigationContainer, useNavigation } from '@react-navigation/native' ;
import { createStackNavigator } from '@react-navigation/stack';

import {Add  } from './TrayLunch';

const AuthStack = createStackNavigator();


export default () =>{
    <NavigationContainer>
        <AuthStack.Navigator>
            <AuthStack.Screen name = 'Scr' componenet = {Add}>

            </AuthStack.Screen>
        </AuthStack.Navigator>
    </NavigationContainer>
}

