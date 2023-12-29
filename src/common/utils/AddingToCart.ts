import {OrderDetails} from "../interfaces/interfaces";


export const AddingToCart = ({productID, selectedOption}: OrderDetails) => {

    const existingCartItemsString: string | null = localStorage.getItem('cartItems');

    const existingCartItems: Array<OrderDetails> = existingCartItemsString
        ? JSON.parse(existingCartItemsString)
        : [];

    const newCartItem: OrderDetails = {
        productID: productID,
        selectedOption: selectedOption,
    }

    const itemExisted = existingCartItems.some((item: any) =>item.productID === String(productID));
    if (!itemExisted) {
        const updatedCartItems: Array<OrderDetails> = [...existingCartItems, newCartItem];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    }
}