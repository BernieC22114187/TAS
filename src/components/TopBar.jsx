import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const TopBar = () => { // const (constant thing that doesn't really change)
                        /*don't need quotations in Text defined class*/
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}> Add </Text> 
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#264653', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: 450,
        paddingHorizontal: 50,
        paddingTop: 10,
        
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})

export default TopBar;


// (input) => {output}