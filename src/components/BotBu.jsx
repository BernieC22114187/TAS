import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const BotBar = () => { // const (constant thing that doesn't really change)
                        /*don't need quotations in Text defined class*/
    return (
        
        <TouchableOpacity style = {styles.container}>
            <Text style = {styles.text}> Finish </Text>
        </TouchableOpacity>
            
        

    )
}
const styles = StyleSheet.create({
    container: {
        margin: 5,
        marginTop: 20,
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
    text: {
        color: 'white',
        fontSize: 16
    }
})

export default BotBar;

// (input) => {output}