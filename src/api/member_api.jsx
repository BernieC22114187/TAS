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
