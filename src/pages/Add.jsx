import React from 'react';
import { View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ScreenContainer} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native' ;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import BotBar from '../components/BotBu';
import TrayLunch from './Cafeterias/TrayLunch'
import Nav from './Cafeterias/TrayLunch'
import SaladBar from './Cafeterias/SaladBar'
import PizzaBar from './Cafeterias/PizzaBar'
import SnackBar from './Cafeterias/SnackBar'
import FitnessCafe from './Cafeterias/FitnessCafe'
import index from './index'
import AddScreen from './AddScreen';
import DishSelection from './Cafeterias/DishSelection';
import Other from './Cafeterias/Other';


const Stack = createStackNavigator();
const Add = ({}) => {  

    
    
    return (
        
        <Stack.Navigator 
        // screenOptions = {{headerShown: false}}
        >
            <Stack.Screen
            name="Add" 
            component={AddScreen}
            
            />
            
            <Stack.Screen name = "Tray Lunch" component = {TrayLunch}/>
            <Stack.Screen name = "Salad Bar" component = {SaladBar}/>
            <Stack.Screen name = "Pizza Bar" component = {PizzaBar}/>
            <Stack.Screen name = "Snack Bar" component = {SnackBar}/>
            <Stack.Screen name = "Fitness Cafe" component = {FitnessCafe}/>
            <Stack.Screen name = "Other" component = {Other}/>
            {/* <Stack.Screen name = "Dish Selection" component = {DishSelection}/> */}
        </Stack.Navigator>
        
        
    )
}



export default Add;