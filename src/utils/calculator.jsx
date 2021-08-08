
import { MEMBERHEIGHT, MEMBERWEIGHT } from "../pages/Login"

const calc = () =>{
    console.log("height " + MEMBERHEIGHT)
    console.log("weight  " + MEMBERWEIGHT)
    var BMI = MEMBERWEIGHT/(MEMBERHEIGHT^2)
    var RMR = 24 - 0.01807 * 17 - 0.1448 * MEMBERWEIGHT + 0.03797 * MEMBERHEIGHT    
    var calorieNeed = MEMBERWEIGHT * RMR * 1.5
    var database = [
        [0, 1200, 1500, 1800, 2000, 2200, 2500, 2700 ],
        ["starch (bowls)", 1.5, 2.5, 3,3,3.5,4,4],
        ["Protein (portions)", 3,4,5,6,6,7,8],
        ["Dairy (cup)", 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 2],
        ["Vegetables (portions)", 3, 3, 3, 4, 4, 5, 5],
        ["Fruits (portions)", 2, 2, 2, 3, 3.5, 4, 4],
        ["Nuts (portions)", 4, 4, 5, 6, 6, 7, 8]
    ];
    var level = 0;
    for (var i = 0; i < 7; i++){
        if (calorieNeed >= database[0][i] && calorieNeed <= database[0][i+1]){
            level = i;
            break;
        }
    }
    var ratio = 1 + ( ( calorieNeed - database[0][level] ) / ( database[0][level+1] - database[0][level] ) )

    var nutritionSuggestion = {
        "calories": calorieNeed, 
        "starch (bowls)": database[1][level] * ratio,
        "Protein (portions)": database[2][level] * ratio,
        "Dairy (cup)": database[3][level] * ratio,
        "Vegetables (portions)": database[4][level] * ratio,
        "Fruits (portions)": database[5][level] * ratio,
        "Nuts (portions)": database[6][level] * ratio,
    };
    console.log("nutrition Suggestion: " + nutritionSuggestion)
    
    return nutritionSuggestion;
}
export default calc;