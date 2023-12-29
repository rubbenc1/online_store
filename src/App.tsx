import React, {useEffect} from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./components/HomePage";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import HistoryOfOrders from "./pages/HistoryOfOrders";
import {useSetRecoilState} from "recoil";
import {authTokenState} from "./common/utils/authAtom";
import {idState} from "./common/utils/idAtom";
import Store from "./pages/Store";
import Product from "./pages/Product";
import ShoppingBag from "./pages/ShoppingBag";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/users/login',
        element: <LogIn />
    },
    {
        path: 'users/register',
        element: <SignUp />
    },
    {
        path: '/store',
        element: <Store />
    },
    {
        path: '/store/:categoryID',
        element: <Store />
    },
    {
        path: 'store/:categoryID/:productID',
        element: <Product />
    },
    {
        path: 'store/living_room',
        element: <div>Living Room</div>
    },
    {
        path: 'store/bedsheet_sets',
        element: <div>Bedsheet sets</div>
    },
    {
        path: '/shopping_bag',
        element: <ShoppingBag />
    },
    {
        path: '/history_of_orders',
        element: <HistoryOfOrders />
    },
    {
        path: '/categories'
    },
    {
        path: '/brand'
    },
    {
        path: '/pages'
    },
    {
        path: '/about'
    },
    {
        path: '/news'
    },
    {
        path: '/contact'
    },
    {
        path: '*',
    }
])

const App = () =>{
    const setToken = useSetRecoilState(authTokenState);
    const setId = useSetRecoilState(idState);

    useEffect(() => {
        // Read from localStorage and set Recoil state
        setToken(localStorage.getItem('token') || '');
        setId(localStorage.getItem('id') || '');
    }, [setToken, setId]);
    return (
        <RouterProvider router={router}/>
    )
}

export default App;