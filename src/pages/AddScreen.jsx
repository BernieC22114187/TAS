import React from 'react';
import { View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ScreenContainer} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native' ;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import BotBar from '../components/BotBu';
import TrayLunch from './Cafeterias/TrayLunch'
import index from './index'


export const AddScreen = ({navigation}) =>{
    return (
        <ScrollView>
            <SafeAreaView>
                <View style = {styles.container}>
                    
                    <Text style = {styles.text}> Cafeterias </Text>
                    
                    <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('Tray Lunch')}>
                        <Text style = {styles.buttontext}>
                            Tray Lunch
                            </Text>
                                    
                    </TouchableOpacity>
                    
                
                    <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('Salad Bar')}>
                        <Text style = {styles.buttontext}>
                            Salad bar
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('Pizza Bar')}>
                        <Text style = {styles.buttontext}>
                            Pizza Bar
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('Snack Bar')}>
                        <Text style = {styles.buttontext}>
                            Snack bar
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('Fitness Cafe')}>
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
        fontSize: 20,
        paddingLeft: 105,
        marginHorizontal: 30,
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#6C757D',
        marginVertical: 10,
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

export default AddScreen;