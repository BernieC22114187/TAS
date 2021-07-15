import React, { useState }from 'react';
import { Image, Dimensions, ImageBackground, View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, RefreshControl, ScreenContainer, TouchableWithoutFeedback, SafeAreaViewBase} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native' ;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CheckBox } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import BotBar from '../../components/BotBu';

import index from '../index'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements/dist/icons/Icon';

import { getDailyMenu } from '../../api/menu_api'
import { save } from '../../api/saveNutritionInfo_api';

var totalWidth = Dimensions.get('window').width;
var totalHeight = Dimensions.get('window').height;
const image = {uri : "https://paperpirateship.files.wordpress.com/2020/04/iphone-x-wallpapers-ramen.png"}
var a = [0,0,0,0,0,0,0,0,0]




//{"Dish1" : 0, "Dish2" : 0, "Dish3" : 0, "Dish4" : 0, "Dish5" : 0, "Dish6": 0};
const nutritionFacts = {uri : "https://www.fda.gov/files/calories_on_the_new_nutrition_facts_label.png"}

const TrayLunch = () => {
    // function onchecked(id){
    
    //     const data = this.state.data
    //     const index = data.findIndex(x=>x.id==id);
    //     data[index].checked = !data[index].checked
    //     this.setState(data)
    // }
    // function checkBoxTest(){
    //     checked = {True}
    // }
    const currentDate = new Date();
    const timestamp = currentDate.getTime();    
    var rawData = getDailyMenu(timestamp) 
    var dict = {};
    for (var i = 0; i < rawData.length; i++){
        dict[rawData[i][0]] = 0;

    }
    const [isSelected, setSelection] = useState(a);
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
      }, []); 
    const buttonNumber = () => {
        
        const collection =  Object.entries(dict).map(([key, value]) => 
            <TouchableOpacity
                key={key}
                style={
                    styles.item
                }
                onPress = {() => {if (dict[key] === 0) {dict[key] = 1} else if (dict[key] === 1) {dict[key] = 0}  setSelection(!isSelected); console.log(dict)}}
            >
                <View style = {styles.itemLeft}>   
                    <Text style = {styles.itemText}> {key} </Text>
                    <Ionicons name = {dict[key] === 1? 'checkbox': 'checkbox-outline'} ></Ionicons>
                </View>
                
            </TouchableOpacity>
            
           
            
        );
        return collection;
    }
    // function buttonList(props) {
    //     const listItems = dict.map((number) =>
    //       <li>{number}</li>
    //     );
    //     return (
    //       <ul>{listItems}</ul>
    //     );
    // }
      
    return(
        <ImageBackground source={image} style={styles.image}>
            <ScrollView>
                <SafeAreaView>
                    <View>
                        <Text style = {styles.text}> Dishes </Text>
                    </View>
                    <View  style = {styles.viewStyle}>
                        
                        {buttonNumber()}
                                           
                    </View>
                    {/* <View style = {styles.blackBox}>
                    </View> */}
                    <Image source = {nutritionFacts} style = {styles.Facts}></Image>
                    
                    <TouchableOpacity style = {styles.clear} refreshControl = {
                            <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            
                            />
                        } onPress = {() => {
                        var x = false;
                        for (var key in dict){ if (dict[key] == 0) {x = true; break;} } 
                        if (x) { 
                            for (var key in dict){dict[key] = 1}
                            
                        } 
                        else {
                            for (var key in dict){dict[key] = 0 } 
                        } 
                        
                        setSelection(!isSelected); console.log(dict)} }  >
                        <Text style = {styles.cleartext}>
                            Select/De-Select All
                        </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style = {styles.addToPlate} onPress = {()=>{  save(dict)     }}>
                        <Text style = {styles.cleartext}>
                            Add to Plate
                        </Text>
                    </TouchableOpacity>
                </SafeAreaView>
                            
            </ScrollView>
            
        </ImageBackground>
        
    )

}
const styles = StyleSheet.create({
    Facts: {
        flex : 1,
        width: totalWidth * 0.853,
        height: 0.74962*totalHeight, //500,
        marginHorizontal: totalWidth * 0.08,
        marginVertical: 0.01499*totalHeight, //10,
        
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    viewStyle:{
        flexDirection: 'row',   
        flexWrap: 'wrap',
        marginLeft:30,
    },
    item:{
        backgroundColor: '#FFF',
       
        // borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 0.007496*totalHeight, //5,   
        borderRadius: 0.024*totalWidth, //9,
        width: 0.408*totalWidth, //153,
        height: 0.07496*totalHeight, //50,
        marginLeft: 0.008*totalWidth, //3,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        // flexWrap: 'wrap', 

    },
    // square:{
    //     width: 24,
    //     height: 24,
    //     backgroundColor: '#55BCF6',
    //     opacity: 0.4,
    //     borderRadius:5,
    //     marginRight: 0, 

    // },
    itemText: {
        maxWidth: '80%',
        fontSize: 0.02929*totalWidth, //30,
        marginRight: 0.186666*totalWidth, //70, 
        marginLeft: 0.02929*totalWidth, //30,
        
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
        // margin: 5,
        marginHorizontal: 0.09866*totalWidth, //37,
        paddingVertical: 0.01499250*totalHeight, //10,
        paddingHorizontal: 0.026666*totalWidth, //10,
        paddingTop: 0.01499250*totalHeight, //10,
        height: 0.1049475*totalHeight, //70,
        borderRadius: 0.024*totalWidth, //9,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        width: 0.8*totalWidth, //300,
    
        
    },
    cleartext: {
        color: 'white',
        fontSize: 0.042666*totalWidth, //16,
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
        
        fontSize: totalWidth * 0.0453,//17
        paddingLeft: 0.33 * totalWidth, 
        marginHorizontal: totalWidth * 0.08, // 30
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#6C757D',
        marginVertical: totalHeight * 0.014992, // 10
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
export default TrayLunch;