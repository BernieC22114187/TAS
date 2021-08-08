import React ,{useState, useEffect } from 'react';
import { RefreshControl, ImageBackground, View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {Dimensions} from "react-native";
import BotBar from '../components/BotBu';
import {CONNECTIONURL} from "../../App"
// import {memberData} from "../../router"
import {nutritionData} from "./Login"
const image = { uri: "https://r1.ilikewallpaper.net/iphone-11-wallpapers/download/79815/Clementines-with-leaves-iphone-11-wallpaper-ilikewallpaper_com.jpg" };
const infographic = {uri: "https://thumbs.dreamstime.com/z/healthy-vegetables-infographics-chart-graph-healthy-vegetables-infographics-chart-graph-quality-vector-99710155.jpg"};
import { createStackNavigator } from '@react-navigation/stack';
import {MEMBERID} from "./Login"
import calc from "../utils/calculator"
import { useNavigation } from "@react-navigation/native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
var totalWidth = Dimensions.get('window').width;
var totalHeight = Dimensions.get('window').height;

const chartConfig = {
    backgroundGradientFrom: "#264653",
    // backgroundGradientFromOpacity: 0,
    // backgroundGradientTo: "#08130D",
    // backgroundGradientToOpacity: 0.5,
    // backgroundColor: "#e26a00",
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.8,
    useShadowColorFromDataset: false // optional
  };
const chartConfigLine = {
    backgroundGradientFrom: "#1E2923",
    // backgroundGradientFromOpacity: 0,
    // backgroundGradientTo: "#08130D",
    // backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};
const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 100],
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };
var allData = {"Progress" : ProgressData}
var ProgressData; 
var progressArray = [];
var lineArray = [0,0,0,0,0,0,0]; 


const Home = ({navigation}) => {
    var finalNutritionData = nutritionData;
    var nutritionSuggestion = calc();
    var dailyRecommended = [nutritionSuggestion["calories"], 77, 300, 2300, 325, 56]; // change this to the # recommended per day for each
    console.log("refresh")
    // const [refreshing, setRefreshing] = React.useState(false);
    // const onRefresh = React.useCallback(() => {
    //     setRefreshing(true);
    //     wait(1000).then(() => setRefreshing(false), fetchData());
    // }, []);

    for(var i = 0; i < 6; i++){  
        progressArray[i] = (nutritionData[i]/dailyRecommended[i]);
    }
    
    const [progressDataFinal, SetProgressDataFinal] = useState({
        labels: ["Calories", "Total Fat", "Cholesterol", "Sodium", "Total Carbs", "Protein"], // optional
        data: progressArray 
    });
    const [lineDataFinal, SetLineDataFinal] = useState( { labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                data: lineArray,
                color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ]
    } )
    legend: ["Rainy Days"] // optional);
    useEffect(() => {
    console.log("running useEffect22")
    console.log("Progress" + progressDataFinal.data)
    }, [progressDataFinal]);

    useEffect(() => {

        }, [lineDataFinal]);
    
    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async() =>{   
        var now = new Date();
        var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        var timestamp = startOfDay / 1000;

        console.log("inside fetchData")
        var dayNow = new Date().getDay(); 
        var weekVar = dayNow;
        if (weekVar == 0){
            weekVar = 7;
            dayNow = 7;
        }
        while(weekVar >= 1){
            console.log("weekVar: " + weekVar)
            if(weekVar == dayNow){
                // today
                try {
                    let response = await fetch (
                        CONNECTIONURL + '/nutritioninfo/get/' + MEMBERID + "/" + timestamp.toString(), {//actual is not this url 
                            method: 'GET',
                            headers:{
                                Accept: 'application/json'
                            }
                        } 
                        
                    )
                    let data = await response.json();
                    
                    if  (data["message"] == "Member has no data yet") {
                        var temp = [0, 0, 0, 0, 0, 0];
                        var isSame = true;
                        for (var i = 0 ; i < temp.length; i++){
                            if (temp[i] != finalNutritionData[i]){
                                isSame = false;
                                break;
                            }
                        }
                        if(!isSame){
                            finalNutritionData = temp
                            progressArray = [];
                            
                            for(var i = 0; i < 6; i++){  
                                progressArray.push((finalNutritionData[i])/dailyRecommended[i]);
                            }
                            
                        }
                        var lineA = [0,0,0,0,0,0,0]
                        for(var i = 0; i < 7; i++){  
                            lineA[i] = lineArray[i] 
                        }
                        SetLineDataFinal({ labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            datasets: [
                                {
                                    data: lineA,
                                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`, // optional
                                    strokeWidth: 2 // optional
                                }
                            ]
                        })
                        console.log("123"+ lineA)

                    } else {
                        var a = data["Calories"];
                        var aa = 1;
                        aa = a;
                        lineArray[weekVar-1] = aa;
                        var lineA = [0,0,0,0,0,0,0]
                        for(var i = 0; i < 7; i++){  
                            lineA[i] = lineArray[i] 
                        }
                        SetLineDataFinal({ labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            datasets: [
                                {
                                    data: lineA,
                                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`, // optional
                                    strokeWidth: 2 // optional
                                }
                            ]
                        })
                        var b = data["Total_Fat"];  
                        var c = data["Cholesterol"];
                        var d = data["Sodium"];
                        var e = data["Total_Carbs"]; 
                        var f = data["Protein"];
                        var temp = [a, b, c, d, e, f ];
                        var isSame = true;
                        for (var i = 0 ; i < temp.length; i++){
                            if (temp[i] != finalNutritionData[i]){
                                isSame = false;
                                break;
                            }
                        }
                        if(!isSame){
                            // console.log("!isSame")
                            
                            finalNutritionData = temp
                            
                            progressArray = [];
                            
                            for(var i = 0; i < 6; i++){  
                                progressArray.push((finalNutritionData[i])/dailyRecommended[i]);
                            }
                            
                            
                        }
                    }
                    
                    var progressA = [0,0,0,0,0,0]
                    for(var i = 0; i < 6; i++){  
                        progressA[i] = progressArray[i] 
                    }
                    
                    SetProgressDataFinal( {  labels: ["Calories", "Total Fat", "Cholesterol", "Sodium", "Total Carbs", "Protein"], // optional
                    data: progressA}  )
                    
                    
                } catch(error){
                    console.error(error);  
                } finally {
                    // setRefreshing(false)
                }
            }
            
            else{
                // days before today
                try {
                    let response = await fetch (
                        CONNECTIONURL + '/nutritioninfo/get/' + MEMBERID + "/" + timestamp.toString(), {//actual is not this url 
                            method: 'GET',
                            headers:{
                                Accept: 'application/json'
                            }
                        } 
                        
                    )
                    let data = await response.json();
                    if  (data["message"] == "Member has no data yet") {
                        SetLineDataFinal({ labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            datasets: [
                                {
                                    data: lineArray,
                                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`, // optional
                                    strokeWidth: 2 // optional
                                }
                            ]
                        })
                    } else {
                        var a = data["Calories"];
                        var aa = 1;
                        aa = a;
                        lineArray[weekVar-1] = aa;
                        var lineA = [0,0,0,0,0,0,0]
                        for(var i = 0; i < 7; i++){  
                            lineA[i] = lineArray[i] 
                        }
                        SetLineDataFinal({ labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            datasets: [
                                {
                                    data: lineA,
                                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`, // optional
                                    strokeWidth: 2 // optional
                                }
                            ]
                        })
                        
                    }
                    
                    
                } catch(error){
                    console.error(error);  
                } finally {
                    // setRefreshing(false)
                }
            }
            weekVar--;
            startOfDay = new Date(startOfDay.getFullYear(), startOfDay.getMonth(), startOfDay.getDate()-1)
            timestamp = startOfDay / 1000;
            
        }
        return
        
    }
    
    // fetchData();
    // console.log("hello")
    
    return (
        <ImageBackground source={image} style={styles.image} >
            <ScrollView 
                // refreshControl={
                //     <RefreshControl
                //     refreshing={refreshing}
                //     onRefresh={onRefresh}
                //     />
                // }
            >
                <SafeAreaView>
                    <View style = {styles.container}>
                        
                        <View style = {styles.topBar}>
                            <Text style = {styles.topBarText}> Home </Text> 
                        </View>
                        
                        
                        <Text style = {styles.text}> Stats </Text>
                        {/* {console.log("Refresh Graph " + progressArray)} */}
                        
                        <ProgressChart
                            data={ progressDataFinal}
                            width={totalWidth}
                            height={220}        
                            strokeWidth={10}
                            radius={32}
                            chartConfig={chartConfig}
                            
                            hideLegend={false}
                            style = {styles.progressRing}
                            
                        />
                        {/* <View style = {styles.blackBox}>
                        </View>
                        <View style = {styles.blackBox}>
                        </View>
        
                        {/* <View style = {styles.blackBox}>
                        </View>
                        <View style = {styles.blackBox}>
                        </View> */}
                        {/* <ProgressChart 
                            data = {[0.4, 0.6, 0.8]} 
                            width={Dimensions.get('window').width * 0.7}
                            height={220}
                            >
                        </ProgressChart> */}
                        {/* <View>
                            <TASCharts data={allData["Progress"]} type = {ChartType}></TASCharts>
                        </View> */}
                        <LineChart
                            data={lineDataFinal}
                            width={totalWidth}
                            height={220}
                            chartConfig={chartConfigLine}
                        />
                        <TouchableOpacity style = {styles.Suggestions }onPress = {fetchData} >
                            <Text style = {styles.cleartext}>
                                Refresh
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.Suggestions }>
                            <Text style = {styles.cleartext}>
                                Suggestions
                            </Text>
                        </TouchableOpacity>
                        <View style = {styles.grayBox}>
                            <TouchableOpacity style = {styles.dish} onPress = {() => {navigation.navigate('Sample Plate')}} >
                                <Text>
                                    Sample Plate
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.dish} onPress = {() => {navigation.navigate('Specific Diets')}} >
                                <Text>
                                    Specific Diets
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.dish} onPress = {() => {navigation.navigate('Diabetes Suggestions')}} >
                                <Text>
                                    Diabetes Suggestions
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.dish}>
                                <Text>
                                    calories:  {nutritionSuggestion["calories"].toFixed(2)}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.dish}>
                                <Text>
                                    starch (bowls):  {nutritionSuggestion["starch (bowls)"].toFixed(2)}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.dish}>
                                <Text>
                                    Protein (portions): {nutritionSuggestion["Protein (portions)"].toFixed(2)}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.dish}>
                                <Text>
                                    Dairy (cup):  {nutritionSuggestion["Dairy (cup)"].toFixed(2)}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.dish}>
                                <Text>
                                    Vegetables (portions):  {nutritionSuggestion["Vegetables (portions)"].toFixed(2)}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.dish}>
                                <Text>
                                    Fruits (portions):  {nutritionSuggestion["Fruits (portions)"].toFixed(2)}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.dish}>
                                <Text>
                                    Nuts (portions):  {nutritionSuggestion["Nuts (portions)"].toFixed(2)}
                                </Text>
                            </TouchableOpacity>
                            
                        </View>

                        
                    </View>
                    
                </SafeAreaView>
            </ScrollView>
        </ImageBackground>
        
    )
    
}


const styles = StyleSheet.create({
    graphic:{
        flex : 1,
        width: totalWidth * 0.853,
        height: 375,
        marginHorizontal: totalWidth * 0.08,
        marginTop: 10,
        marginBottom: 10,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center" 
      },
    progressRing:{
        flex: 1,
        // margin: 20,
    },
    grayBox:{
        // flex: 1,
        backgroundColor: '#EBEBEB', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        // height: 0.4999*totalHeight, //200
        width: 0.8533 * totalWidth, //320
        paddingVertical: 0.0299 * totalHeight, //20
        paddingHorizontal: 0.2667 * totalWidth, //100
        
        marginHorizontal: 0.077333 * totalWidth, //29
        marginTop: 0.014993 * totalHeight, //10
        marginBottom: 0.014993 * totalHeight, //10
    },
    dish:{
        flex: 1,
        backgroundColor: '#FFFFFF', // # + color code 
        alignItems: 'center',
        
        // height: 0.05997 * totalHeight, //40
        width: 0.8 * totalWidth, //300
        paddingLeft: 0.0133 * totalWidth, // 5
        paddingVertical: 0.022488 * totalHeight, //15
        
        marginHorizontal: 0.15467 * totalWidth, // 58
         
        marginVertical: 0.007496 * totalHeight, //6
        
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
        
        backgroundColor: '#24AA18', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height: totalHeight * 0.0825, //55
        width: totalWidth*0.8, //300
        paddingLeft: 0.0133333 * totalWidth, //5
        paddingVertical: totalHeight * 0.01199, //8
        
        marginHorizontal: 0.0987 * totalWidth, //37
         
        marginTop: totalHeight * 0.014993, //10
        marginBottom: totalHeight * 0.014993,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        width: totalWidth, 

    },
    text: {
        fontSize: totalWidth * 0.0453,//17
        paddingLeft: 0.3567 * totalWidth, 
        marginHorizontal: totalWidth * 0.08, // 30
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#6C757D',
        marginBottom: 20,
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
    topBarText: {
        color: 'white',
        fontSize: totalWidth * 0.053//20
    },
    topBar: {
        
        backgroundColor: '#264653', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height: 0.1035 * totalHeight, // 70
        width: totalWidth, // 375
        paddingHorizontal: 0,
        paddingVertical: totalHeight*0.032, // 23
       
        
        marginTop: 0.015 * totalHeight,
        marginBottom: 0.015 * totalHeight,
    
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
        fontSize: 0.04267 * totalWidth, // 16
    },
    
})

export default Home;
