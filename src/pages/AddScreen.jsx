import React from 'react';
import { ImageBackground, View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ScreenContainer} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native' ;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import BotBar from '../components/BotBu';
import TrayLunch from './Cafeterias/TrayLunch'
import index from './index'

const image =  { uri: "https://is5-ssl.mzstatic.com/image/thumb/Purple111/v4/89/70/d0/8970d083-e8fa-c2ec-0fc6-bdc5fd57db09/source/512x512bb.jpg"}

export const AddScreen = ({navigation}) =>{
    return (
        <ImageBackground source={image} style={styles.image}>
            <ScrollView>
                <SafeAreaView>
                    <View style = {styles.container}>
                        
                        <Text style = {styles.text}> Cafeterias </Text>
                        
                        <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('Tray Lunch')}> 
                            <Text style = {styles.buttontext}>
                                Tray Lunch
                                </Text>
                                        
                        </TouchableOpacity>
                        {/* onPress={login} */}
                    
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
                        <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('Other')}> 
                            <Text style = {styles.buttontext}>
                                Other:
                            </Text>
                        </TouchableOpacity>
                        <BotBar/>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </ImageBackground>
        
    )

}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',

    },
    text: {
        marginTop: 20,
        fontSize: 20,
        paddingHorizontal: 95,
        marginHorizontal: 30,
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#6C757D',
        width: 300,
        marginVertical: 10,
    },
    button: {
        margin: 5,
        marginHorizontal: 10,
    
        padding: 10,
        marginVertical: 10,
        height: 80,
        borderRadius: 9,
        width: 140,
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