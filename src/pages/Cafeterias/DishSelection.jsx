import React from 'react';
import { View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ScreenContainer, TouchableWithoutFeedback} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native' ;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CheckBox } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import BotBar from '../../components/BotBu';
import TrayLunch from './TrayLunch'
import index from '../index'
  



const DishSelection = (props) => {
    // function onchecked(id){
    
    //     const data = this.state.data
    //     const index = data.findIndex(x=>x.id==id);
    //     data[index].checked = !data[index].checked
    //     this.setState(data)
    // }
    function checkBoxTest(){
        alert("value changed")
    }
    return(
        <ScrollView>
            <SafeAreaView>
                <View>
                    <Text style = {styles.text}> Dishes </Text>
                </View>
               
                <TouchableOpacity style = {styles.item}>
                    <View style = {styles.itemLeft}>
                        <View style = {styles.square}></View>
                        <Text style = {styles.itemText}> Dish 1 </Text>
                    </View>
                    <CheckBox checkedIcon = 'checkmark-circle' value = {false} onChange = {() => this.checkBoxTest}></CheckBox>
                    
                </TouchableOpacity>
                        
                
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
            </SafeAreaView>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    item:{
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,   
        width: 300,
        height: 50,
        marginLeft: 35,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius:5,
        marginRight: 15, 

    },
    itemText: {
        maxWidth: '80%' 
    },
    circular: {
        width: 20,
        height: 20,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,   
    },
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
        fontSize: 16,
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
        paddingHorizontal: 50, 
        
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
export default DishSelection;