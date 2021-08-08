import React ,{useState, useEffect } from 'react';
import { RefreshControl, ImageBackground, Image, View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {Dimensions} from "react-native";
import BotBar from '../components/BotBu';
import {CONNECTIONURL} from "../../App"
// import {memberData} from "../../router"
import {nutritionData} from "./Login"
const image = { uri: "https://www.accu-chek.com/sites/g/files/iut341/f/article_images/super-foods-infographic.jpg" };


import {MEMBERID} from "./Login"
import calc from "../utils/calculator"
import { useNavigation } from "@react-navigation/native";

var totalWidth = Dimensions.get('window').width;
var totalHeight = Dimensions.get('window').height;

const DiabetesSuggestions = () => {
    return (
        
        <ScrollView>
            <SafeAreaView>
                <Image source={image} style={styles.image}/>

            </SafeAreaView>
        </ScrollView>
        
        
    )
}
const styles = StyleSheet.create({
    image: {
        flex : 1,
        width: totalWidth,
        height: (totalWidth / 768 ) * 1458, //500,
        // marginHorizontal: totalWidth * 0.08,
        // marginVertical: 0.01499*totalHeight, //10,
    },
})
export default DiabetesSuggestions;