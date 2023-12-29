import {ordersUrl} from "../envs/allEnvs";

const historyOrdersRequest = async (id: string, token: string) =>{
    try {
        const headers = {
            'Content-Type': 'application/json',
            Authorization:`Bearer ${token}`
        };
        const response = await fetch(`${ordersUrl}/${id}`,{
            method: 'GET',
            headers: headers
        })

        if (!response.ok) {
            // If the response status is not OK (e.g., 4xx or 5xx), throw an error
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    }catch (error: any){
        console.error('An error occurred:', error.message);
        throw error;
    }
}

export default historyOrdersRequest;