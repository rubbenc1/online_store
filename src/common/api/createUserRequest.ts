import {registrationUrl} from "../envs/allEnvs";
import {RegistrationForm} from "../interfaces/interfaces";


const createUserRequest = async (newPostData: RegistrationForm) => {
    try {
        const response = await fetch(registrationUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPostData),
        });

        if (!response.ok) {
            // If the response status is not OK (e.g., 4xx or 5xx), throw an error
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        return response;
    } catch (error: any) {
        console.error('An error occurred:', error.message);
        throw error;
    }
};

export default createUserRequest;