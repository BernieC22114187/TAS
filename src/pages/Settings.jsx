import React from 'react';
import { Dimensions, ImageBackground, TextInput, View, VirtualizedList, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
// import Input from '../components/TextInput';
import { Input } from 'react-native-elements';
import BotBar from '../components/BotBu';
//import CustomizedTables from '../components/TableComp'
var totalWidth = Dimensions.get('window').width;
var totalHeight = Dimensions.get('window').height;
const image = { uri: "https://i.pinimg.com/originals/0f/b9/c1/0fb9c122d7aa2a4e408e9b893526d1e1.jpg" };
const Settings = () => {
    return (
        <ImageBackground source={image} style={styles.image} >
            <ScrollView>
                <SafeAreaView>
                    <View style = {styles.container}>
                        <View style = {styles.topBar}>
                            <Text style = {styles.topBarText}> Settings </Text> 
                        </View>
                        <Text style = {styles.text}> Profile Name </Text>
                        <View style = {styles.grayBox}>
                            <TouchableOpacity style = {styles.setting}>
                                <Text style = {styles.labels}>Mass: </Text>
                                <TextInput placeholder='mass in kg ' style = {styles.inputBox}></TextInput>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style = {styles.setting}>
                                <Text style = {styles.labels}>Height: </Text>
                                <TextInput placeholder='height in cm' style = {styles.inputBox}/>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.setting}>
                                <Text style = {styles.labels}>Birthdate: </Text>
                                <TextInput placeholder='Birthdate ' style = {styles.inputBox}/>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.setting}>
                                <Text style = {styles.labels}>Gender: </Text>
                                <TextInput placeholder='M/F/Other' style = {styles.inputBox}/>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.setting}>
                                <Text style = {styles.labels}>Body Fat: </Text>
                                <TextInput placeholder='Percentage' style = {styles.inputBox}/>
                            </TouchableOpacity>
                            
                            
                            
                        </View>
                        {/* <View style = {styles.blackBox}>
                        </View> */}
                        {/* <TouchableOpacity style = {styles.save}>
                            <Text style = {styles.saveText}>
                                Save
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.reset}>
                            <Text style = {styles.saveText}>
                                Reset
                            </Text>
                        </TouchableOpacity> */}
                        
                        
                    </View>
                </SafeAreaView>
            </ScrollView>
        </ImageBackground>
        
    )
}


const styles = StyleSheet.create({
    inputBox: {
        width: 100,
        
    },
    image: {
        flex: 1, 
        resizeMode: "cover",
        justifyContent: "center"
    },
    save:{
        margin: 5,
        marginHorizontal: 37,
        padding: 10,
        paddingTop: 10,
        paddingRight: 10,
        height: 70,
        borderRadius: 9,
        backgroundColor: '#3AE041',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
    },
    saveText:{
        color: 'white',
        fontSize: 16,
    },
    reset:{
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
    labels: {
        fontSize: 16,
    },

    setting:{
        flex: 1,
        flexDirection: 'row',  
        justifyContent: "flex-end",
        justifyContent: 'space-between',    
        backgroundColor: '#FFFFFF', // # + color code 
        alignItems: 'center',
        paddingLeft: 0.0133 * totalWidth, //5
        paddingRight: 0.02667 * totalWidth, //10
        height: 0.0449775 * totalHeight,//30
        width: 0.8 * totalWidth, //300
        // paddingLeft: 0,
        // paddingBottom: 10,
        marginHorizontal: 0.15466* totalWidth, //58
        marginVertical: 0.00749625* totalHeight, //5,
        
    },
    
    addToPlate:{
        flex: 1,
        backgroundColor: '#3AE041', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height:300,
        width: 250,
        paddingLeft: 5,
        paddingVertical: 30,
        
        marginHorizontal: 85,
         
        marginTop: 10,
        marginBottom: 10,
    },
    grayBox:{
        flex: 1,
        backgroundColor: '#EBEBEB', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height: 0.5997 * totalHeight, //400
        width: 0.8533 * totalWidth, //320
        paddingVertical: 0.014993 * totalHeight, //10
        paddingHorizontal: 0.2667 * totalWidth, //100
        marginLeft: 0.07466 * totalWidth, //28
        marginHorizontal: 0.0533 * totalWidth, //20
        marginTop: 0.014993 * totalHeight, //10
        marginBottom: 0.014993 * totalHeight, //10
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
        paddingLeft: 0.280 * totalWidth, 
        marginHorizontal: totalWidth * 0.08, // 30
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#6C757D'
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

export default Settings;