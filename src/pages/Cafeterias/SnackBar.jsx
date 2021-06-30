import React, { useState }from 'react';
import { Dimensions, Image, ImageBackground, View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, RefreshControl, ScreenContainer, TouchableWithoutFeedback, SafeAreaViewBase} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native' ;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CheckBox } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import BotBar from '../../components/BotBu';

import index from '../index'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const image = {uri : "https://wallpaperaccess.com/full/694921.jpg"}
const nutritionFacts = {uri : "https://www.fda.gov/files/calories_on_the_new_nutrition_facts_label.png"}

var totalWidth = Dimensions.get('window').width;
var totalHeight = Dimensions.get('window').height;
var a = [0,0,0,0,0,0,0,0,0]
const SnackBar = () => {
    // function onchecked(id){
    
    //     const data = this.state.data
    //     const index = data.findIndex(x=>x.id==id);
    //     data[index].checked = !data[index].checked
    //     this.setState(data)
    // }
    // function checkBoxTest(){
    //     checked = {True}
    // }
    const [isSelected, setSelection] = useState(a);
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
      }, []); 
    return(
        <ImageBackground source={image} style={styles.image}>
            <ScrollView>
                <SafeAreaView>
                    <View>
                        <Text style = {styles.text}> Dishes </Text>
                    </View>
                    <View  style = {styles.viewStyle}>

                        <TouchableOpacity style = {styles.item} onPress = {() => {if (a[0] === 0) {a[0] = 1} else if (a[0] === 1) {a[0] = 0}  setSelection(!isSelected); console.log(a)}}>
                            <View style = {styles.itemLeft}>
                                
                                
                                <Text style = {styles.itemText}> Dish 1 </Text>
                                <Ionicons name = {a[0] === 1? 'checkbox': 'checkbox-outline'} ></Ionicons>
                            </View>
                        </TouchableOpacity>
        
                        <TouchableOpacity style = {styles.item} onPress = {() => {if (a[1] === 0) {a[1] = 1} else if (a[1] === 1) {a[1] = 0}  setSelection(!isSelected); console.log(a)}}>
                            <View style = {styles.itemLeft}>
                                
                                
                                <Text style = {styles.itemText}> Dish 2 </Text>
                                <Ionicons name = {a[1] === 1? 'checkbox': 'checkbox-outline'} ></Ionicons>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.item} onPress = {() => {if (a[2] === 0) {a[2] = 1} else if (a[2] === 1) {a[2] = 0}  setSelection(!isSelected); console.log(a)}}>
                            <View style = {styles.itemLeft}>
                                
                                
                                <Text style = {styles.itemText}> Dish 3 </Text>
                                <Ionicons name = {a[2] === 1? 'checkbox': 'checkbox-outline'} ></Ionicons>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.item} onPress = {() => {if (a[3] === 0) {a[3] = 1} else if (a[3] === 1) {a[3] = 0}  setSelection(!isSelected); console.log(a)}}>
                            <View style = {styles.itemLeft}>
                                
                                <Text style = {styles.itemText}> Dish 4 </Text>
                                <Ionicons name = {a[3] === 1? 'checkbox': 'checkbox-outline'} ></Ionicons>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.item} onPress = {() => {if (a[4] === 0) {a[4] = 1} else if (a[4] === 1) {a[4] = 0}  setSelection(!isSelected); console.log(a)}}>
                            <View style = {styles.itemLeft}>
                                
                                <Text style = {styles.itemText}> Dish 5 </Text>
                                <Ionicons name = {a[4] === 1? 'checkbox': 'checkbox-outline'} ></Ionicons>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.item} onPress = {() => {if (a[5] === 0) {a[5] = 1} else if (a[5] === 1) {a[5] = 0}  setSelection(!isSelected); console.log(a)}}>
                            <View style = {styles.itemLeft}>
                                
                                <Text style = {styles.itemText}> Dish 6 </Text>
                                <Ionicons name = {a[5] === 1? 'checkbox': 'checkbox-outline'} ></Ionicons>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.item} onPress = {() => {if (a[6] === 0) {a[6] = 1} else if (a[6] === 1) {a[6] = 0}  setSelection(!isSelected); console.log(a)}}>
                            <View style = {styles.itemLeft}>
                                
                                <Text style = {styles.itemText}> Dish 7 </Text>
                                <Ionicons name = {a[6] === 1? 'checkbox': 'checkbox-outline'} ></Ionicons>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.item} onPress = {() => {if (a[7] === 0) {a[7] = 1} else if (a[7] === 1) {a[7] = 0}  setSelection(!isSelected); console.log(a)}}>
                            <View style = {styles.itemLeft}>
                                
                                <Text style = {styles.itemText}> Dish 8 </Text>
                                <Ionicons name = {a[7] === 1? 'checkbox': 'checkbox-outline'} ></Ionicons>
                            </View>
                        </TouchableOpacity>

                        
                    
                    </View>
                    {/* <View style = {styles.blackBox}>
                    </View> */}
                    <Image source = {nutritionFacts} style = {styles.Facts}>

                    </Image>
                    <TouchableOpacity style = {styles.clear} refreshControl = {
                            <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            />
                        } onPress = {() => {
                        if (a.includes(1)) {
                            for (let i = 0; i < a.length; i++){a[i] = 0}} 
                        else {for (let i = 0; i < a.length; i++){a[i] = 1} 
                            
                            } setSelection(!isSelected); console.log(a)} }  >
                        <Text style = {styles.cleartext}>
                            Select/De-Select All
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
export default SnackBar;