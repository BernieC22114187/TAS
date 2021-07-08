import React from 'react';
import {Dimensions, ImageBackground, View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ScreenContainer} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native' ;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import BotBar from '../components/BotBu';
import TrayLunch from './Cafeterias/TrayLunch'
import index from './index'
var totalWidth = Dimensions.get('window').width;
var totalHeight = Dimensions.get('window').height;
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
                        <TouchableOpacity style = {styles.finish} onPress = {() => navigation.navigate('Home')}>
                            <Text style = {styles.finishText}> Finish </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </ImageBackground>
        
    )

}
const styles = StyleSheet.create({
    finish: {
        marginVertical: 0.0074962*totalHeight,//5,
        marginTop: 0.029985*totalHeight, //20,
        marginHorizontal: 0.112*totalWidth, //42,
        paddingVertical: 0.014992*totalHeight, //10,
        paddingHorizontal: 0.0266666*totalWidth, //10,
        paddingTop: 0.014992*totalHeight, //10,
        height: 0.10494*totalHeight,//70,
        borderRadius: 0.024*totalWidth, //9,
        backgroundColor: '#3AE041',
        justifyContent: 'center',
        alignItems: 'center',
        width: 0.8*totalWidth, //300,
    },
    finishText: {
        color: 'white',
        fontSize: 0.042666*totalWidth, //16,
    },
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
        marginTop: 0.02998500*totalHeight, //20,
        fontSize: 0.053333*totalWidth,//20,
        paddingHorizontal: 0.25333*totalWidth, //95,
        marginHorizontal: 0.08 * totalHeight, //30,
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#6C757D',
        width: 0.8*totalWidth, //300,
        marginVertical: 0.0149925*totalHeight, //10,
    },
    button: {
        // margin: 5,
        marginHorizontal: 0.02667*totalWidth, //10,
    
        paddingVertical: 0.0149925*totalHeight, //10,
        paddingHorizontal: 0.0266667*totalWidth, //10, 
        marginVertical: 0.0149925*totalHeight, //10,
        height: 0.1199400* totalHeight, //80,
        borderRadius: 0.024*totalWidth, //9,
        width: 0.373333*totalWidth, //140,
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
    buttontext:{
        padding: 10,
        justifyContent: 'center',
        color: 'black',
        fontSize: 0.04533*totalWidth, //17, 
    },
    topBar: {
        flex: 1,
        backgroundColor: '#264653', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height: 0.105 * totalHeight, // 70
        width: totalWidth, // 375
        paddingHorizontal: 0,
        paddingVertical: totalHeight*0.032, // 23
       
        
        marginTop: 0.015 * totalHeight,
        marginBottom: 0.015 * totalHeight,
    
    },
    topBarText: {
        color: 'white',
        fontSize: totalWidth * 0.053//20
    }
})

export default AddScreen;