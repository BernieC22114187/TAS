import React from 'react';
import { View, Text} from 'react-native';
import { ProgressChart, BarChart, LineChart, PieChart} from "react-native-chart-kit";
import { Dimensions } from "react-native"


const TASCharts = (props) => {

    const width = Dimensions.get('window').width * 0.9

    const chartConfig = {
        backgroundGradientFrom: "oldlace",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "oldlace",
        backgroundGradientToOpacity: 1.0,
        color: (opacity = 1) => `rgba(141, 41, 229, ${opacity})`,
        strokeWidth: 5, // optional, default 3
        barPercentage: 1.0,
        useShadowColorFromDataset: false // optional
    };      

    if (props.type == "Progress") {
        return(<TASProgressChart data = {props.data} config = {chartConfig} width = {width}></TASProgressChart>)
    } else if (props.type == "Pie") {
        return(<TASPieChart data = {props.data} config = {chartConfig} width = {width}></TASPieChart>)
    } else if (props.type == "Bar") {
        return(<TASBarChart data = {props.data} config = {chartConfig} width = {width}></TASBarChart>)
    } else if (props.type == "Line") {
        return(<TASLineChart data = {props.data} config = {chartConfig} width = {width}></TASLineChart>)
    }
}

const TASBarChart = ({data, config, width}) => {
    return(
        <BarChart
            data={data}
            width={width}
            height={250}
            strokeWidth={15}
            radius={15}
            chartConfig={config}
            hideLegend={false}
        />
    )
}

const TASPieChart = ({data, config, width}) => {
    return(
        <PieChart
            data={data}
            width={width}
            height={250}
            chartConfig={config}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"10"}
            center={[10, 10]}
            absolute
        />
    )
}

const TASLineChart = ({data, config, width}) => {
    return(
        <LineChart
            data={data}
            width={width}
            height={300}
            chartConfig={config}
        />
    )
}

const TASProgressChart = ({data, config, width}) => {
    return(
        <ProgressChart
            data={data}
            width={width}
            height={300}
            strokeWidth={15}
            radius={15}
            chartConfig={config}
            hideLegend={false}
        />
    )
}

export default TASCharts;