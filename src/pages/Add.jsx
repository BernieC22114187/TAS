import React from 'react';
import { View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ScreenContainer} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native' ;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import BotBar from '../components/BotBu';
import TrayLunch from './TrayLunch'
import index from './index'
import AddScreen from './AddScreen';



const Stack = createStackNavigator();
const Add = ({}) => {  

    
    
    return (
        
        <Stack.Navigator>
            <Stack.Screen
            name="Add"
            component={AddScreen}
            
            />
            <Stack.Screen name = "TrayLunch" component = {TrayLunch}/>
        </Stack.Navigator>
        
        
    )
}



export default Add;