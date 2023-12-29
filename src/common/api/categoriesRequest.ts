import {categoriesUrl} from "../envs/allEnvs";

const categoriesRequest = async () =>{
    try {
        const response = await fetch(categoriesUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error: any){
        console.error('An error occurred:', error.message);
        throw error;
    }
}

export default categoriesRequest;