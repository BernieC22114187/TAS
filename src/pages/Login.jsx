import { StatusBar } from 'expo-status-bar';
import React,{useState } from 'react';
import { ScrollView, ImageBackground, TouchableWithoutFeedback, TextInput,Dimensions, StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from "@react-navigation/native";

import {login, register} from '../api/member_api'
var totalWidth = Dimensions.get('window').width;
var totalHeight = Dimensions.get('window').height;
const image = { uri: "https://img.wallpapersafari.com/phone/640/1136/53/22/vmRdMC.jpeg" };


const Login = () =>{
    const [username, setMembername] = useState("");
    const [password, setpassword] = useState("");
    const [weight, setweight] = useState("");
    const [height, setheight] = useState("");
    const navigation = useNavigation();
    return (
        // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground source={image} style={LoginPageStyle.image} >
            <ScrollView>
                <SafeAreaView>
                    <View style = {LoginPageStyle.Viewstyle}>
                        <View style = {LoginPageStyle.topBar}>
                                    <Text style = {LoginPageStyle.topBarText}> Account Page </Text> 
                                </View>
                        <TextInput
                            placeholder="Username"
                            onChangeText={(v) => setMembername(v)}
                            style={LoginPageStyle.textInput}
                            
                        />
                        <TextInput
                            placeholder="Password"
                            onChangeText={(v) => setpassword(v)}
                            style={LoginPageStyle.textInput}
                            
                        />
                        <TouchableOpacity style = {LoginPageStyle.Suggestions} onPress={() => {login(username, password); navigation.navigate("router")}}>
                                <Text style = {LoginPageStyle.cleartext}>
                                    Login
                                </Text>
                        </TouchableOpacity>
                        <TextInput
                            placeholder="Username"
                            onChangeText={(v) => setMembername(v)}
                            style={LoginPageStyle.textInput}
                            
                        />
                        <TextInput
                            placeholder="Password"
                            onChangeText={(v) => setpassword(v)}
                            style={LoginPageStyle.textInput}
                            
                        />
                        <TextInput
                            placeholder="Weight (kg): "
                            onChangeText={(v) => setweight(v)}
                            style={LoginPageStyle.textInput}
                            
                        />
                        <TextInput
                            placeholder="Height (cm): "
                            onChangeText={(v) => setheight(v)}
                            style={LoginPageStyle.textInput}
                            
                        />
                        <TouchableOpacity style = {LoginPageStyle.Suggestions} onPress= {() => {register(username, password, height, weight); navigation.navigate("router")}}>
                                <Text style = {LoginPageStyle.cleartext}>
                                    Register
                                </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </ImageBackground>
        
        
            
        // </TouchableWithoutFeedback>
        
        
    )
    
}
export default Login;




const LoginPageStyle = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center" 
      },
    topBarText: {
        color: 'white',
        fontSize: totalWidth * 0.053//20
    },
    topBar: {
        
        backgroundColor: '#264653', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height: 0.1035 * totalHeight, // 70
        width: totalWidth, // 375
        paddingHorizontal: 0,
        paddingVertical: totalHeight*0.032, // 23
       
        
        marginTop: 0.015 * totalHeight,
        marginBottom: 0.015 * totalHeight,
    
    },
    Viewstyle: {
        flex: 1,
        alignItems: 'center'
    },
    Suggestions:{
        
        backgroundColor: '#24AA18', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height: totalHeight * 0.0825, //55
        width: totalWidth*0.8, //300
        paddingLeft: 0.0133333 * totalWidth, //5
        paddingVertical: totalHeight * 0.01199, //8
        
        marginHorizontal: 0.0987 * totalWidth, //37
         
        marginTop: totalHeight * 0.014993, //10
        marginBottom: totalHeight * 0.014993,
    },
    cleartext: {
        color: 'white',
        fontSize: 0.04267 * totalWidth, // 16
        // marginVertical: 20,
    },
    textInput:{
        width: totalWidth * 0.8, //300,
        height: totalHeight * 0.05917, //40,
        marginVertical: totalHeight * 0.008396,//5,
    }
})