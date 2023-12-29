import {productsUrl} from "../envs/allEnvs";


const productsRequest = async () =>{
    try {
        const response = await fetch(productsUrl, {
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

export default productsRequest;