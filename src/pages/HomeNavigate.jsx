import React from 'react';
import { View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ScreenContainer} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native' ;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import BotBar from '../components/BotBu';


import Home from './Home'

import SamplePlate from './SamplePlate';
import DiabetesSuggestions from './DiabetesSuggestions'
import SpecificDiets from './SpecificDiets'

const Stack = createStackNavigator();
const HomeNavigate = ({}) => {  

    
    
    return (
        
        <Stack.Navigator 
        // screenOptions = {{headerShown: false}}
        >
            <Stack.Screen
            name="Home" 
            component={Home}
            
            />
            
            <Stack.Screen name = "Sample Plate" component = {SamplePlate}/>
            <Stack.Screen name = "Specific Diets" component = {SpecificDiets}/>
            <Stack.Screen name = "Diabetes Suggestions" component = {DiabetesSuggestions}/>
            
            {/* <Stack.Screen name = "Dish Selection" component = {DishSelection}/> */}
        </Stack.Navigator>
        
        
    )
}



export default HomeNavigate;