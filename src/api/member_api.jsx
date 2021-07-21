
import {CONNECTIONURL} from "../../App"
const domain = 'http://localhost:8080/' //try to put domain outside 
var MEMBERID = "";
export const login = async(Account, Password) => {
    try {
        let response = await fetch (
            CONNECTIONURL + '/member/login', {//actual is not this url 
                method: 'POST',
                headers:{
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    account: Account,
                    password: Password,
                })
            } 
            
        )
        let json = await response.json();
        MEMBERID = json["id"];
        
        return json
    } catch(error){
        console.error(error); 
    }
    
}



export const register = async(Account, Password, Height, Weight) => {
    try {
        let response = await fetch (
            CONNECTIONURL + '/member/register', {//actual is not this url 
                method: 'POST',
                headers:{
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    account: Account,
                    password: Password,
                    weight: Weight,
                    height: Height,
                    
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
    const currentDate = new Date();
    const timestamp = currentDate.getTime();   
    try {
        let response = await fetch (
            CONNECTIONURL + '/nutritioninfo/get/' + "12345/" + "2222", { //MEMBERID timestamp
                method: 'GET',
            }
 
        )
        let json = await response.json();
        MEMBERID = json["id"];
        
        // console.log("JSON" + json["id"])
        return json
    } catch(error){   
        console.error(error);
    }
    
}
export default MEMBERID

// export const getData = async() => {

//     const date = Date.now().toString();

//     console.log(date);
//     // member_id = "6084e2b31af0dddf9cf68d02";
//     axios({
//         method: 'GET',
//         baseURL: 'http://localhost:8080',
//         url: '/nutritioninfo/get?' + "6084e2b31af0dddf9cf68d02" + '/' + date, // change to date 
//         //http://localhost:8081/dailyMenu/get?date=2021-06-03T00:00:00.000+00:00
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     .then(function(response){
//         var d = JSON.stringify(response.data);
//         d = JSON.parse(d);
//         return d;
//         //things below should be called when home page reloads, not here
//         let totalCal = d["dailyCalories"];
//         let totalCholesterol = d["dailyCholesterol"];
//         let totalProtein = d["dailyProtein"];
//         let totalSodium = d["dailySodium"];
//         let totalCarbs = d["dailyCarbs"];
//         let Total_Fat = d["dailyFat"];
        
//     })
//     .catch(function (error){
//         alert(error.message);
        
//     })

    
// }