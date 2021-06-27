import { member } from '.../models/member'
const domain = 'http://localhost:8080/' //try to put domain outside 

export const getDailyMenu = async() => {
    
    axios({
        method: 'GET',
        baseURL: 'http://localhost:8080',
        url: '/dailyMenu/get?' +  timestamp, // change to date 
        //http://localhost:8081/dailyMenu/get?date=2021-06-03T00:00:00.000+00:00
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(function(response){
        var d = JSON.stringify(response.data);
        d = JSON.parse(d);
        
        return d;
        let trayLunchMenu = [];
        for(let i = 0; i < d.length;i++){
            trayLunchMenu[i] = d[i][0];
        }
        
        
        
    })
    .catch(function (error){
        alert(error.message);
        
    })

    
}

export const getConstMenu = async() => {
    
    axios({
        method: 'get',
        baseURL: 'http://localhost:8080',
        url: '/otherRest/get?', // change to date 
        //http://localhost:8081/dailyMenu/get?date=2021-06-03T00:00:00.000+00:00
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(function(response){
        var d = JSON.stringify(response.data);
        d = JSON.parse(d);
        
        return d;
        let trayLunchMenu = [];
        for(let i = 0; i < d.length;i++){
            trayLunchMenu[i] = d[i][0];
        }
        
        
        
    })
    .catch(function (error){
        alert(error.message);
        
    })

    
}