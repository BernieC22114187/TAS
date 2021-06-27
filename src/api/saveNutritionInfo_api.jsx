const domain = 'http://localhost:8080/' //try to put domain outside 

export const register = async(dictionary) => {
    try {
        let response = await fetch (
            'http://localhost:8080/nutritioninfo/'  + member_id + '/' + timestamp, { 
                method: 'POST',
                headers:{
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    dictionary
                })
            } 
            
        )
        let json = await response.json();
        return json
    } catch(error){
        console.error(error);
    }
}