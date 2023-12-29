import {loginUrl} from "../envs/allEnvs";
import {User} from "../interfaces/interfaces";

const loginUserRequest = async (user: User) =>{
    try {
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        if (!response.ok) {
            // If the response status is not OK (e.g., 4xx or 5xx), throw an error
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        const token = data.token;
        const id = data.userID;
        return {token, id}
    }catch(error: any){
        console.error('An error occurred:', error.message);
        throw error;
    }
};


export default loginUserRequest;
