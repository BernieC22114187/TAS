import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
var totalWidth = Dimensions.get('window').width;
var totalHeight = Dimensions.get('window').height;
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
        
        marginVertical: 0.0074962*totalHeight,//5,
        marginTop: 0.029985*totalHeight, //20,
        marginHorizontal: 0.112*totalWidth, //42,
        paddingVertical: 0.014992*totalHeight, //10,
        paddingHorizontal: 0.0266666*totalWidth, //10,
        paddingTop: 0.014992*totalHeight, //10,
        height: 0.10494*totalHeight,//70,
        borderRadius: 0.024*totalWidth, //9,
        backgroundColor: '#3AE041',
        justifyContent: 'center',
        alignItems: 'center',
        width: 0.8*totalWidth, //300,
    
        
    },
    text: {
        color: 'white',
        fontSize: 16
    }
})

export default BotBar;

// (input) => {output}