import React from 'react';
import { View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native' ;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import BotBar from '../components/BotBu';
import TrayLunch from './TrayLunch'

const navigation = useNavigation();
    
    
    function SelfScreen({navigation} ){
        return (
            <View>
                <Text style = {styles.buttontext}>
                            Tray Lunch
                            </Text>
                <Button title = 'Options' onPress = {() => {navigation.navigate('Options')}}/>
            </View>
        )  
    } 
    function OptionsScreen({navigation} ){
        return (
            <View>
                <TrayLunch/>
            </View>
        )  
    }

const HomeStack = createStackNavigator();

const Add = () => { 

    
    return (
        <ScrollView>
            <SafeAreaView>
                
                <View style = {styles.container}>
                    <View style = {styles.topBar}>
                        <Text style = {styles.topBarText}> Add </Text> 
                    </View>
                    <Text style = {styles.text}> Cafeterias </Text>
                    
                    <TouchableOpacity style = {styles.button} onPress = {() => {navigation.navigate('Options')}}>
                                        
                        <Text style = {styles.buttontext}>
                            Tray Lunch
                            </Text>
                            <HomeStack.Navigator>
                                <HomeStack.Screen name = "Self" component = {SelfScreen}/>
                                <HomeStack.Screen name = "Options" component = {OptionsScreen}/>

                            </HomeStack.Navigator>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttontext}>
                            Salad bar
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttontext}>
                            Pizza Bar
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttontext}>
                            Snack bar
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttontext}>
                            Fitness Cafe
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.lastbutton}>
                        <Text style = {styles.buttontext}>
                            Other:
                            </Text>
                    </TouchableOpacity>
                    <BotBar/>
                </View>
                
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    text: {
        fontSize: 17,
        paddingLeft: 110,
        marginHorizontal: 30,
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#6C757D'
    },
    button: {
        margin: 5,
        marginHorizontal: 80,
        padding: 10,
        paddingTop: 10,
        height: 70,
        borderRadius: 9,
        backgroundColor: '#D0D0D0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lastbutton:{
        margin: 5,
        marginHorizontal: 80,
        padding: 10,
        paddingTop: 10,
        height: 70,
        borderRadius: 9,
        backgroundColor: '#D0D0D0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        padding: 10,
        justifyContent: 'center',
        color: 'black',
        fontSize: 17,
    },
    topBar: {
        flex: 1,
        backgroundColor: '#264653', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 375,
        paddingHorizontal: 0,
        paddingVertical: 23,
       
        
        marginTop: 10,
        marginBottom: 10,
    
    },
    topBarText: {
        color: 'white',
        fontSize: 20
    }
})

export default Add;