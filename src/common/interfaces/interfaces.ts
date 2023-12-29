import {ReactNode} from "react";

export interface User {
    email: string;
    password: string;
}

export interface HamburgerMenuProps {
    isOpen: boolean;
    setToOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RegistrationForm {
    name: string;
    email: string;
    password: string;
    phone: string;
    isAdmin: boolean | null | undefined;
    street: string | null | undefined;
    apartment?: string | null | undefined;
    zip: string | null | undefined;
    city: string;
    country: string;
}

export interface MenuProviderProps {
    children: ReactNode;
}

export interface CategoriesProps {
    showImg?: boolean;
    style?: React.CSSProperties;
    showProducts?: boolean;
    style1?: React.CSSProperties
}

export interface StarRatingProps {
    rating: number;
}

export interface OrderDetails {
    productID: string | null | undefined;
    selectedOption: number | string
}

export interface OrderInfo {
    orderItems: {
        quantity: number;
        product: string;
    }[];
    shippingAddress1: string;
    shippingAddress2: string;
    city: string;
    zip: string;
    country: string;
    phone: string;
    user: string;
}