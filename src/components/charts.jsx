import React from 'react';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
const allCharts = (props) => {
    const chartConfig = {
        backgroundGradientFrom: "WHITE",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "WHITE",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    if (props.type == "ProgressRing"){
        return (<progressRing inputdata = {props.data} chartConfig = {chartConfig} width = {props.width} > </progressRing>)
    }
    else{
        return (<lineChart inputdata = {props.data} chartConfig = {chartConfig} width = {props.width} > </lineChart>)
    }

}
const progressRing = ({inputdata, chartConfig, width}) => {
    return (
        <ProgressChart
            data={inputdata}
            width={width}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
        />
    )
}
const lineChart = ({inputdata, chartConfig, width}) => {
    return (
        <LineChart
            data={data}
            width={width}
            height={256}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier
      />
    )
    
}
export default allCharts