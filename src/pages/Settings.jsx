import React from 'react';
import { TextInput, View, VirtualizedList, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import Input from '../components/TextInput';
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
                            <Input/>
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
    setting:{
        flex: 1,
        backgroundColor: '#FFFFFF', // # + color code 
        alignItems: 'center',
    
        height:100,
        width: 300,
        paddingLeft: 50,
        paddingBottom: 10,
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
        height: 200,
        width: 320,
        paddingVertical: 20,
        paddingHorizontal: 100, //why does increasing padding increase size?
        marginLeft: 50, 
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