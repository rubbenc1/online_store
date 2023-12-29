import {OrderInfo} from "../interfaces/interfaces";
import {orderCreationUrl} from "../envs/allEnvs";
import {MutationFunction} from "react-query";


const createOrderRequest: MutationFunction<any, [OrderInfo, string]> = async (
    [newOrder, token]: [OrderInfo, string]
) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        };

        const response = await fetch(orderCreationUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(newOrder),
        });

        if (!response.ok) {
            // If the response status is not OK (e.g., 4xx or 5xx), throw an error
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        return response.json(); // Assuming the response is in JSON format
    } catch (error: any) {
        console.error('An error occurred:', error.message);
        throw error;
    }
};

export default createOrderRequest;