import React from 'react';
import { View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';

const Add = () => {
    return (
        <ScrollView>
             
                <View style = {styles.container}>
                    <Text style = {styles.text}> Cafeteria </Text>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttontext}>
                            Tray Lunch
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttontext}>
                            Salad bar
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttontext}>
                            Pizza Bar
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttontext}>
                            Snack bar
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttontext}>
                            Fitness Cafe
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttontext}>
                            Fitness Cafe
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttontext}>
                            Fitness Cafe
                            </Text>
                    </TouchableOpacity>
                    
                </View>
            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    text: {
        fontSize: 17,
        paddingLeft: 190,
        justifyContent: 'center',
        color: 'black',
        backgroundColor: '#6C757D'
    },
    button: {
        margin: 2,
        marginHorizontal: 100,
        padding: 10,
        paddingTop: 20,
        height: 100,
        borderRadius: 9,
        backgroundColor: '#D0D0D0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        padding: 10,
        justifyContent: 'center',
        color: 'black',
        fontSize: 17,
    }
})

export default Add;