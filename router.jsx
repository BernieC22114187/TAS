import { StatusBar } from 'expo-status-bar';
import React ,{ useEffect, useState } from 'react';
import { TouchableOpacity, Dimensions, StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
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


var totalWidth = Dimensions.get('window').width;
var totalHeight = Dimensions.get('window').height;

function DetailsScreen({navigation} ){
    return (
      <View>
        <Text>Detail Screen</Text>
      </View>
    )  
  } 
  
  function HomeScreen({navigation}){
    return (
      <View>
        <Text>Detail Screen</Text>
        <Button title = 'go to details' onPress = {() => {navigation.navigate('Details')}}/>
      </View>
    )  
  } 
  
  function HomeStackScreen(){
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name = "Home" component = {HomeScreen}/>
        <HomeStack.Screen name = "Details" component = {DetailsScreen}/>
  
      </HomeStack.Navigator>
    )
  }
  
  const HomeStack = createStackNavigator();
   
  function SettingsScreen(){
    return (
      <View style = {{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings</Text>
      </View>
    )
  }
  const Tab = createBottomTabNavigator();

export var memberData;
const afterLogin = () =>{
  // const item = navigation.getParam('member_id');
  // console.log(item);
  const navigation = useNavigation();
    return (
      
            <Tab.Navigator style = {styles.tabBarStyle} //add styles here
                screenOptions = { ( {route}    ) => ({
                    
                tabBarIcon: ({ focused, color, size }) => {
                    
                    let iconName; //changeable variable

                    if (route.name === 'Add' ) {
                    iconName = focused? 'add-circle' : 'add-circle-outline'; //if else
                    }
                    else if(route.name === "Settings"){ 
                    iconName = focused? 'settings' : 'settings-outline';
                    }
                    else if(route.name === "Home"){ 
                    
                    // memberData = getData();
                    // console.log("member data: " + memberData.json()["Calories"]);
                    iconName = focused? 'home' : 'home-outline';
                    }
                    // else if(route.name === "HomeStackScreen"){ 
                    //   iconName = focused? 'planet' : 'planet-outline';
                    // }
                    
                    return (
                      <Ionicons name = {iconName} size = {size} color = {color}/>
                      // <TouchableOpacity onPress = {() => navigation.navigate(route.name)}>
                      //   <Ionicons name = {iconName} size = {size} color = {color}/>
                      // </TouchableOpacity>
                    )
                },

                })}
                tabBarOptions = {{
                activeTintColor: '#48CAE4',
                inactiveTintColor: 'gray',
                }}

            >
                <Tab.Screen name = "Home" component = {Home}/>
                <Tab.Screen name = "Add" component = {Add}/>
                <Tab.Screen name = "Settings" component = {Settings}/>
                {/* <Tab.Screen name = "HomeStackScreen" component = {HomeStackScreen}/> */}
                
            </Tab.Navigator>
        
    )
    
    
}
export default afterLogin
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
