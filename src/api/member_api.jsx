import { member } from '.../models/member'
const domain = 'http://localhost:8080/' //try to put domain outside 

export const login = async() => {
    try {
        let response = await fetch (
            'http://localhost:8080/member/login', {//actual is not this url 
                method: 'POST',
                headers:{
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    account: '',
                    password: ''
                })
            } 
            
        )
        let json = await response.json();
        return json
    } catch(error){
        console.error(error);
    }
    
}



export const register = async() => {
    try {
        let response = await fetch (
            'http://localhost:8080/member/register', {//actual is not this url 
                method: 'POST',
                headers:{
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    account: '',
                    password: ''
                })
            } 
            
        )
        let json = await response.json();
        return json
    } catch(error){
        console.error(error);
    }
}

export const getData = async() => {
    
    axios({
        method: 'GET',
        baseURL: 'http://localhost:8080',
        url: '/nutritioninfo/get?' + member_id + '/' + timestamp, // change to date 
        //http://localhost:8081/dailyMenu/get?date=2021-06-03T00:00:00.000+00:00
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(function(response){
        var d = JSON.stringify(response.data);
        d = JSON.parse(d);
        return d;
        //things below should be called when home page reloads, not here
        let totalCal = d["dailyCalories"];
        let totalCholesterol = d["dailyCholesterol"];
        let totalProtein = d["dailyProtein"];
        let totalSodium = d["dailySodium"];
        let totalCarbs = d["dailyCarbs"];
        let Total_Fat = d["dailyFat"];
        
    })
    .catch(function (error){
        alert(error.message);
        
    })

    
}