import React from 'react';
import { TextInput, View, VirtualizedList, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
// import Input from '../components/TextInput';
import { Input } from 'react-native-elements';

//import CustomizedTables from '../components/TableComp'

const Other = () => {
    return (
        <ScrollView> 
            
            <SafeAreaView>
                <View style = {styles.container}>

                    <Text style = {styles.text}> Total </Text>
                    <View style = {styles.grayBox}>
                        <TouchableOpacity style = {styles.setting}> 
                            <Text style = {styles.labels}>Total Fat: </Text>
                            <TextInput placeholder='Amount in g ' style = {styles.inputBox}></TextInput>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.setting}>
                            <Text style = {styles.labels}>Cholesterol: </Text>
                            <TextInput placeholder='Amount in mg' style = {styles.inputBox}/>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.setting}>
                            <Text style = {styles.labels}>Sodium: </Text>
                            <TextInput placeholder='Amount in mg ' style = {styles.inputBox}/>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.setting}>
                            <Text style = {styles.labels}>Total Carbs: </Text>
                            <TextInput placeholder='Amount in g' style = {styles.inputBox}/>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.setting}>
                            <Text style = {styles.labels}>Protein: </Text>
                            <TextInput placeholder='Amount in g' style = {styles.inputBox}/>
                        </TouchableOpacity>
                        
                         
                        
                    </View>
                    <View style = {styles.blackBox}>
                    </View>
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
    )
}


const styles = StyleSheet.create({
    inputBox: {
        width: 100,
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
        height: 400,
        width: 320,
        paddingVertical: 10,
        paddingHorizontal: 100, //why does increasing padding increase size?
        marginLeft: 28, 
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 2,
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
        marginTop: 20,
        paddingLeft: 130, 
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

export default Other;