import {OrderDetails} from "../interfaces/interfaces";
import {Dispatch, SetStateAction} from "react";


export const removingFromCart = (productId: string, setParsedData: Dispatch<SetStateAction<any[]>>) => {
    // Retrieve existing items from local storage
    const existingCartItemsString: string | null = localStorage.getItem('cartItems');

    if (existingCartItemsString) {
        // Parse the existing items into an array
        const existingCartItems: Array<OrderDetails> = JSON.parse(existingCartItemsString);

        // Find the index of the item to remove
        const indexToRemove = existingCartItems.findIndex((item) => item.productID === productId);

        if (indexToRemove !== -1) {
            // Remove the item from the array
            existingCartItems.splice(indexToRemove, 1);

            // Update local storage with the modified array
            localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
            setParsedData(existingCartItems);
        }else if (existingCartItems.length === 0) {
            setParsedData([]);
        }
    }
};