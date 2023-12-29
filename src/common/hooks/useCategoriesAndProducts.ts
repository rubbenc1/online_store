import {useQuery} from "react-query";
import categoriesRequest from "../api/categoriesRequest";
import productsRequest from "../api/productsRequest";



export const useCategories = () => {
    const { data: dataC, isLoading: isLoadingC, isError: isErrorC } = useQuery(
        'category',
        categoriesRequest,
        {
            staleTime: 30000
        }
    );
    return {dataC, isLoadingC, isErrorC}
}

export const useProducts = () => {
    const { data: dataP, isLoading: isLoadingP, isError: isErrorP } = useQuery(
        'products',
        productsRequest,
        {
            staleTime: 30000
        }
    );
    return {dataP, isLoadingP, isErrorP}
}