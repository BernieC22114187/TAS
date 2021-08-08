import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BotBar from './src/components/BotBu';
import Add from './src/pages/Add';
import TrayLunch from './src/pages/Cafeterias/TrayLunch'
import Settings from './src/pages/Settings';
import Home from './src/pages/Home';
import index from './src/pages/index';
import { getData } from './src/api/member_api';
import afterLogin from './router'
var totalWidth = Dimensions.get('window').width;
var totalHeight = Dimensions.get('window').height;
import Login from './src/pages/Login'
import Register from './src/pages/Login'
export var CONNECTIONURL =    "https://tas-backend-l3rh3hlnya-de.a.run.app"; // "https://backend.tasnutrition.website" https://tasnutrition-vo7pqziauq-de.a.run.app";
const LoginStackNav = createStackNavigator();
import SamplePlate from './src/pages/SamplePlate';

export default function App() { 
  
  return (
    <NavigationContainer>
        <LoginStackNav.Navigator initialRouteName = "Login"
        screenOptions = {{headerShown: false}} 
        >
            <LoginStackNav.Screen name="router" component={afterLogin} />
            <LoginStackNav.Screen name="Login" component={Login} />
            
            {/* <LoginStackNav.Screen name="Register" component={Register} /> */}
        </LoginStackNav.Navigator>
    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
  tabBarStyle: {
    height: 0.1 * totalHeight,
  },
});
