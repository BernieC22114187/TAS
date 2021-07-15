
const domain = 'http://localhost:8080/' //try to put domain outside 

// export const getDailyMenu1 = async() => {
    
//     axios({
//         method: 'GET',
//         baseURL: 'http://localhost:8080',
//         url: '/dailyMenu/get?' +  timestamp, // change to date 
//         //http://localhost:8081/dailyMenu/get?date=2021-06-03T00:00:00.000+00:00
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     .then(function(response){
//         var d = JSON.stringify(response.data);
//         d = JSON.parse(d);
        
//         return d;
//         let trayLunchMenu = [];
//         for(let i = 0; i < d.length;i++){
//             trayLunchMenu[i] = d[i][0];
//         }
        
        
        
//     })
//     .catch(function (error){
//         alert(error.message);
        
//     })
// }
var food;
export const getDailyMenu = async(timestamp) => {
    try {
        let response = await fetch (
            'http://localhost:8080/dailyMenu/get/' + timestamp, {
                method: 'GET',
            } 
            
        )
        let json = await response.json();
        var a = json["Main"];
        var b = json["Side"];
        var c = json["Fruit"];
        food = Object.assign({}, a, b, c);
        return food;
        
    } catch(error){
        console.error(error);
    }
}
export const getConstMenu = async(restName) =>{ // snackBar/saladBar....
    try {
        let response = await fetch (
            'http://localhost:8080/otherRest/get/' + restName , { // don't really want to use restName to filter in backend
                method: 'GET',

            } 
        )
        let json = await response.json();
        if (restName == "SnackBar"){
            var a = json["snackBarPastries"];
            // console.log("snackBarPastries: " + a);
            var b = json["snackBarCookies"];  
            var c = json["snackBarOther"];
            var d = json["snackBarDesserts"];
            var e = json["snackBarPies"];
            var f = json["snackBarMisc"];
            food = a + b + c + d + e + f;
            // food = Object.assign({}, a, b, c, d, e, f); // connects all into one
            // console.log("food: " + food);
            return food
        }
        else if (restName == "SaladBar"){ 
            return json["saladBar"]
        }
        else if(restName == "PizzaBar"){
            return json["pizzaBar"];
        }
    }
    catch (error){
        console.error(error);
    }
}

// export const getConstMenu = async() => {
    
//     axios({
//         method: 'get',
//         baseURL: 'http://localhost:8080',
//         url: '/otherRest/get?', // change to date 
//         //http://localhost:8081/dailyMenu/get?date=2021-06-03T00:00:00.000+00:00
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     .then(function(response){
//         var d = JSON.stringify(response.data);
//         d = JSON.parse(d);
        
//         return d;
//         let trayLunchMenu = [];
//         for(let i = 0; i < d.length;i++){
//             trayLunchMenu[i] = d[i][0];
//         }
        
        
        
//     })
//     .catch(function (error){
//         alert(error.message);
        
//     })

    
// }