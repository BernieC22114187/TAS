const domain = 'http://localhost:8080/' //try to put domain outside 
import MEMBERID from './member_api'
export const save = async(dictionary) => {
    try {
        var dishes = new Array();
        for(var key in dictionary){
            if (dictionary[key] == 1){
                dishes.push(key)
            }
        }
        const currentDate = new Date();
        const timestamp = currentDate.getTime();
        let response = await fetch (
            'http://localhost:8080/nutritioninfo/get/'  + MEMBERID + '/' + timestamp, { 
                method: 'POST',
                headers:{
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    dishList : dishes,
                })
            } 
            
        )

        let json = await response.json();
        return json
    } catch(error){
        console.error(error);
    }
}