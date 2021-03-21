import React from 'react';
import { TextInput, View, VirtualizedList, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
// import Input from '../components/TextInput';
import { Input } from 'react-native-elements';
import BotBar from '../components/BotBu';
//import CustomizedTables from '../components/TableComp'

const Settings = () => {
    return (
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
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.setting}>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.setting}>
                        </TouchableOpacity>
                        
                    </View>
                    <View style = {styles.blackBox}>
                    </View>
                    <TouchableOpacity style = {styles.save}>
                        <Text style = {styles.saveText}>
                            Save
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.reset}>
                        <Text style = {styles.saveText}>
                            Reset
                        </Text>
                    </TouchableOpacity>
                    
                    
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    inputBox: {
        width: 100,
        marginHorizontal: 50,
    },
    save:{
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
        backgroundColor: '#FFFFFF', // # + color code 
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 10,
        height: 30,
        width: 300,
        // paddingLeft: 0,
        // paddingBottom: 10,
        marginHorizontal: 58,
        marginVertical: 5,
        
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
        height: 600,
        width: 320,
        paddingVertical: 30,
        paddingHorizontal: 100, //why does increasing padding increase size?
        marginLeft: 28, 
        marginHorizontal: 20,
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
        paddingLeft: 97,
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

export default Settings;