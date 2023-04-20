import axios from 'axios';
const URL = "http://localhost:8000";

export const authenticateSignup = async (data) => {
    try{
        return await axios.post(`${URL}/signup` , data) //minimum 2 arguments backend url , 2nd is the body
    }catch(err){
        console.log("Error: " ,err);
    }
}

export const authenticateLogin = async (data) => {
    try{
        return await axios.post(`${URL}/login` , data) //minimum 2 arguments backend url , 2nd is the body
    }catch(err){
        console.log("Error: " ,err);
        return err.response;
    }
}
