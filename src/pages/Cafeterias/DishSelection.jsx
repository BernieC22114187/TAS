import React, { useState }from 'react';
import { View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, RefreshControl, ScreenContainer, TouchableWithoutFeedback} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native' ;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CheckBox } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import BotBar from '../../components/BotBu';
import TrayLunch from './TrayLunch'
import index from '../index'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements/dist/icons/Icon';


var a = [0,0,0,0,0]


const DishSelection = () => {
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
        <ScrollView>
            <SafeAreaView>
                <View>
                    <Text style = {styles.text}> Dishes </Text>
                </View>
               
                <TouchableOpacity style = {styles.item} onPress = {() => {if (a[0] === 0) {a[0] = 1} else if (a[0] === 1) {a[0] = 0}  setSelection(!isSelected); console.log(a)}}>
                    <View style = {styles.itemLeft}>
                        
                        <View style = {styles.square}></View>
                        <Text style = {styles.itemText}> Dish 1 </Text>
                        <Ionicons name = {a[0] === 1? 'checkbox': 'checkbox-outline'} ></Ionicons>
                    </View>
                </TouchableOpacity>
 
                <TouchableOpacity style = {styles.item} onPress = {() => {if (a[1] === 0) {a[1] = 1} else if (a[1] === 1) {a[1] = 0}  setSelection(!isSelected); console.log(a)}}>
                    <View style = {styles.itemLeft}>
                        
                        <View style = {styles.square}></View>
                        <Text style = {styles.itemText}> Dish 2 </Text>
                        <Ionicons name = {a[1] === 1? 'checkbox': 'checkbox-outline'} ></Ionicons>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.item} onPress = {() => {if (a[2] === 0) {a[2] = 1} else if (a[2] === 1) {a[2] = 0}  setSelection(!isSelected); console.log(a)}}>
                    <View style = {styles.itemLeft}>
                        
                        <View style = {styles.square}></View>
                        <Text style = {styles.itemText}> Dish 3 </Text>
                        <Ionicons name = {a[2] === 1? 'checkbox': 'checkbox-outline'} ></Ionicons>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.item} onPress = {() => {if (a[3] === 0) {a[3] = 1} else if (a[3] === 1) {a[3] = 0}  setSelection(!isSelected); console.log(a)}}>
                    <View style = {styles.itemLeft}>
                        <View style = {styles.square}></View>
                        <Text style = {styles.itemText}> Dish 4 </Text>
                        <Ionicons name = {a[3] === 1? 'checkbox': 'checkbox-outline'} ></Ionicons>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.item} onPress = {() => {if (a[4] === 0) {a[4] = 1} else if (a[4] === 1) {a[4] = 0}  setSelection(!isSelected); console.log(a)}}>
                    <View style = {styles.itemLeft}>
                        <View style = {styles.square}></View>
                        <Text style = {styles.itemText}> Dish 5 </Text>
                        <Ionicons name = {a[4] === 1? 'checkbox': 'checkbox-outline'} ></Ionicons>
                    </View>
                </TouchableOpacity>
                <View style = {styles.blackBox}>
                </View>

                <TouchableOpacity style = {styles.clear} refreshControl = {
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                        />
                    } onPress = {() => {
                    if (a.includes(1)) {for (let i = 0; i < a.length; i++){a[i] = 0}} else{for (let i = 0; i < a.length; i++){a[i] = 1}}}}  >
                    <Text style = {styles.cleartext}>
                        Select/De-Select All
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
        // justifyContent: 'space-between',
        marginVertical: 5,   
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
        maxWidth: '80%',
        marginHorizontal: 10,
        marginRight: 150, 
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