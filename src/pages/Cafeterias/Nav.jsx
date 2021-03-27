import React from 'react';
import { View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ScreenContainer} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native' ;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';


import DishSelection from './DishSelection';



const Stack = createStackNavigator();
const Nav = ({}) => {  
    return (
        
        <Stack.Navigator>
            <Stack.Screen
            name="Add"
            component={AddScreen}
            
            />
            <Stack.Screen name = "Tray Lunch" component = {TrayLunch}/>
            <Stack.Screen name = "Salad Bar" component = {SaladBar}/>
            <Stack.Screen name = "Pizza Bar" component = {PizzaBar}/>
        </Stack.Navigator>
        
        
    )
}



export default Nav;