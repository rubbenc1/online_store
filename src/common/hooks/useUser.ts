import { useMutation} from "react-query";
import createUserRequest from "../api/createUserRequest";
import loginUserRequest from "../api/loginUserRequest";
import createOrderRequest from "../api/createOrderRequest";



export const useCreateUser = () => {
    const {mutate: createUser} = useMutation(createUserRequest);
    return createUser
}

export const useLoginUser = () => {
    const {mutate: loginUser} = useMutation(loginUserRequest);
    return loginUser
}

export const useCreateOrder = () => {
    const { mutate: createOrder } = useMutation(createOrderRequest);
    return createOrder;
};