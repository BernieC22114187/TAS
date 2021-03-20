import React from 'react';
import { View,Button, VirtualizedList, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ScreenContainer} from 'react-native';


import { NavigationContainer, useNavigation } from '@react-navigation/native' ;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DishSelection from './DishSelection'

const Stack = createStackNavigator();
const Nav = ({}) => { 
    return (
        
        <Stack.Navigator>
            
            <Stack.Screen name = "Dish Selection" component = {DishSelection}/>
        </Stack.Navigator>
        
        
    )
}
// export default Nav;

const TrayLunch = ({navigation}) => {
    return (
        <ScrollView>
            <SafeAreaView>
                <View style = {styles.container}>
                    
                    <Text style = {styles.text}> Dishes </Text>
                    <View style = {styles.grayBox}>
                        <TouchableOpacity style = {styles.dish} onPress = {() => navigation.navigate('Dish Selection')}>
                             
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.dish}>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.dish}>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style = {styles.dish}>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.blackBox}>
                    </View>
                    <TouchableOpacity style = {styles.addToPlate}>
                        <Text style = {styles.cleartext}>
                            Add to Plate
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.clear}>
                        <Text style = {styles.cleartext}>
                            Clear
                        </Text>
                    </TouchableOpacity>
                    
                    
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    dish:{
        flex: 1,
        backgroundColor: '#FFFFFF', // # + color code 
        alignItems: 'center',
        
        height:40,
        width: 300,
        paddingLeft: 5,
        paddingVertical: 15,
        
        marginHorizontal: 58,
         
        marginVertical: 5,
        
    },
    clear: {
        margin: 5,
        marginHorizontal: 37,
        padding: 10,
        paddingTop: 10,
        height: 70,
        borderRadius: 9,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
    
        
    },
    cleartext: {
        color: 'white',
        fontSize: 16
    },
    addToPlate:{
        margin: 5,
        marginHorizontal: 37,
        padding: 10,
        paddingTop: 10,
        height: 70,
        borderRadius: 9,
        backgroundColor: '#3AE041',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
    },
    grayBox:{
        flex: 1,
        backgroundColor: '#EBEBEB', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: 320,
        paddingVertical: 20,
        paddingHorizontal: 100, 
        
        marginHorizontal: 27,
        marginTop: 10,
        marginBottom: 10,
    },
    blackBox:{
        flex: 1,
        backgroundColor: '#000000', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height: 400,
        width: 270,
        
        marginLeft: 50, 
        marginHorizontal: 23,
        marginTop: 10,
        marginBottom: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    text: {
        fontSize: 17,
        paddingLeft: 124,
        marginHorizontal: 30,
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#6C757D'
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

export default TrayLunch;