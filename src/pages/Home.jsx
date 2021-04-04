import React from 'react';
import { View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {Dimensions} from "react-native";
import BotBar from '../components/BotBu';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
var width = Dimensions.get('window').width;
const chartConfig = {
    // backgroundGradientFrom: "#1E2923",
    // backgroundGradientFromOpacity: 0,
    // backgroundGradientTo: "#08130D",
    // backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.8,
    useShadowColorFromDataset: false // optional
  };
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };
  const data2 = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };
const Home = () => {
    return (
        // <View>
        //     <Text>Bezier Line Chart</Text>
        //     <LineChart
        //         data={data}
        //         width={Dimensions.get('window').width} 
        //         height={220}
        //         chartConfig={chartConfig}
        //     />
        //     <BarChart
        //         // style={graphStyle}
        //         data={data2}
        //         width={
        //             Dimensions.get('window').width
        //             }
        //         height={220}
        //         yAxisLabel="$"
        //         chartConfig={chartConfig}
        //         verticalLabelRotation={30}
        //     />
        // </View>
        
        <ScrollView>
            <SafeAreaView>
                <View style = {styles.container}>
                    
                    <View style = {styles.topBar}>
                        <Text style = {styles.topBarText}> Home </Text> 
                    </View>
                    
                    
                    <Text style = {styles.text}> Stats </Text>
                    <View style = {styles.blackBox}>
                    </View>
                    <View style = {styles.blackBox}>
                    </View>
                    <TouchableOpacity style = {styles.Suggestions}>
                        <Text style = {styles.cleartext}>
                            Suggestions
                        </Text>
                    </TouchableOpacity>
                    <View style = {styles.grayBox}>
                        <TouchableOpacity style = {styles.dish}>
                             
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.dish}>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.dish}>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style = {styles.dish}>
                        </TouchableOpacity>
                    </View>

                    
                </View>
                
            </SafeAreaView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    grayBox:{
        flex: 1,
        backgroundColor: '#EBEBEB', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: 320,
        paddingVertical: 20,
        paddingHorizontal: 100, 
        
        marginHorizontal: 29,
        marginTop: 10,
        marginBottom: 10,
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
    Suggestions:{
        flex: 1,
        backgroundColor: '#24AA18', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height:55,
        width: 300,
        paddingLeft: 5,
        paddingVertical: 8,
        
        marginHorizontal: 37,
         
        marginTop: 10,
        marginBottom: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        width: width, 

    },
    text: {
        fontSize: 17,
        paddingLeft: 130,
        marginHorizontal: 30,
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#6C757D'
    },
    button: {
        flex: 1,
        backgroundColor: '#48CAE4', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height:50,
        width: 300,
        paddingLeft: 10,
        paddingRight: 10, 
        paddingVertical: 13,
        paddingHorizontal: 4, 
        marginHorizontal: 58,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5,
        
    },
    lastbutton:{
        margin: 5,
        marginHorizontal: 100,
        padding: 10,
        paddingTop: 10,
        height: 50,
        borderRadius: 9,
        backgroundColor: '#D0D0D0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: 'black',
        justifyContent: 'center',
        fontSize: 20,
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
    clear: {
        flex: 1,
        backgroundColor: '#9B9349', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height:100,
        width: 300,
        paddingLeft: 5,
        paddingVertical: 8,
        
        marginHorizontal: 58,
         
        marginTop: 10,
        marginBottom: 10,
    
        
    },
    cleartext: {
        color: 'white',
        fontSize: 16
    },
    topBarText: {
        color: 'white',
        fontSize: 20
    }
})

export default Home;