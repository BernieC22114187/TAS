import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect } from 'react';
import { Alert, ScrollView, ImageBackground, TouchableWithoutFeedback, TextInput,Dimensions, StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from "@react-navigation/native";

import {login, register} from '../api/member_api'
import {CONNECTIONURL} from '../../App'
var totalWidth = Dimensions.get('window').width;
var totalHeight = Dimensions.get('window').height;
const image = { uri: "https://img.wallpapersafari.com/phone/640/1136/53/22/vmRdMC.jpeg" };

export var nutritionData;
export var MEMBERID = "";
export var MEMBERHEIGHT = 0;
export var MEMBERWEIGHT = 0;
class Member {
    id = String
}
const Login = () =>{    
    const [username, setMembername] = useState("");
    const [password, setpassword] = useState("");
    const [weight, setweight] = useState("");
    const [height, setheight] = useState("");
    var loginORregister = "";
    // const [loginORregister, setType] = useState(""); // 1 is login, 2 is register
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    

    const buttonFunction = async() => {
        if (loginORregister == "1"){
            try {
                console.log("URL: " + CONNECTIONURL)
                let response = await fetch (
                    CONNECTIONURL + '/member/login', {//actual is not this url 
                        method: 'POST',
                        headers:{
                            Accept: 'application/json'
                        },
                        body: JSON.stringify({
                            account: username,
                            password: password,
                        })
                    } 
                    
                )
                if(response.ok){
                    let json = await response.json();
                    MEMBERID = json["id"];
                    MEMBERHEIGHT = json["height"]
                    MEMBERWEIGHT = json["weight"]
                    console.log(MEMBERID)
                    
                }
                else{
                    console.log("Network response was not ok. ")
                    Alert.alert(
                        "Login fail",
                        "Network response was not ok",
                        [
                          
                          { text: "OK", onPress: () => console.log("OK Pressed") }
                        ]
                      );
                    
                    return;
                }
               
                
            } catch(error){
                console.error(error); 
                Alert.alert(
                    "Login fail",
                    "Username or password is not correct.",
                    [
                      
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                  );
                
            }
            
            var now = new Date();
            var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            var timestamp = startOfDay / 1000;
            
            try {
                // console.log("!!!!")
                let response = await fetch (
                    CONNECTIONURL + '/nutritioninfo/get/' + MEMBERID + "/" + timestamp.toString(), {//actual is not this url 
                        method: 'GET',
                        headers:{
                            Accept: 'application/json'
                        }
                    } 
                    
                )
                // console.log("?????")
                let data = await response.json();
                if  (data["message"] == "Member has no data yet") {
                    console.log("special case")
                    nutritionData = [0,0,0,0,0,0]
                    navigation.navigate("router")
                    return nutritionData;
                        
                }
                else{
                    var a = data["Calories"];
                    var b = data["Total_Fat"];  
                    var c = data["Cholesterol"];
                    var d = data["Sodium"];
                    var e = data["Total_Carbs"];
                    var f = data["Protein"]; 
                    nutritionData = [a, b, c, d, e, f ]
                    
                    console.log(nutritionData)
                    navigation.navigate("router")
                    
                    return nutritionData
                }
                
                
            } catch(error){
                console.error(error); 
            }      
        }
        else{
            try {
                let response = await fetch (
                    CONNECTIONURL + '/member/register', {//actual is not this url 
                        method: 'POST',
                        headers:{
                            Accept: 'application/json'
                        },
                        body: JSON.stringify({
                            account: username,
                            password: password,
                            weight: weight,
                            height: height,
                        })
                    } 
                    
                )
                let json = await response.json();
                MEMBERID = json["id"];
                MEMBERHEIGHT = json["height"]
                MEMBERWEIGHT = json["weight"]
                console.log(MEMBERID)
                nutritionData = [0,0,0,0,0,0]
                navigation.navigate("router")
                return nutritionData;
               
            } catch(error){
                console.error(error);  
            }
            
        }

        
        

    }

    
    

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
                        <TouchableOpacity style = {LoginPageStyle.Suggestions} onPress={() => {loginORregister = "1"; buttonFunction();  }}>
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
                        <TouchableOpacity style = {LoginPageStyle.Suggestions} onPress= {() => {loginORregister = "2"; buttonFunction(); }}>
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