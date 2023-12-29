import {FC, useEffect, useState} from "react";
import {CategoriesProps} from "../common/interfaces/interfaces";
import {Link, useParams} from "react-router-dom";
import {useCategories, useProducts} from "../common/hooks/useCategoriesAndProducts";
import StarRating from "./StarRating";

const Categories: FC<CategoriesProps> = ({showImg = true, style, showProducts = false, style1}) => {
    const { categoryID, productID } = useParams<{ categoryID: string; productID: string }>();
    const { dataC, isLoadingC, isErrorC } = useCategories();
    const {dataP, isLoadingP, isErrorP} = useProducts();
    const [currentCategory, setCurrentCategory] = useState<string | null>(null);


    useEffect(() => {
        if (categoryID) {
            setCurrentCategory(categoryID)
        }
    }, [categoryID]);


    if (isLoadingC || isLoadingP) {
        return <p>Loading...</p>;
    }

    if (isErrorC || isErrorP) {
        return <p>Error loading data</p>;
    }

    return (
        <div className='all-categories' style = {style}>
            <div className="left-side-store" style = {style1}>
                {showProducts && (<h2 style={{fontSize: "20px",}}>CATEGORIES</h2>)}
                {dataC?.map((category: any) => (
                        <Link key ={category._id} to={`/store/${category._id}`} style = {{textDecoration: "none", color: currentCategory === category._id ? "#4C8787" : "#222"}}>
                            {showImg && <img src={category.icon} alt={category.name}/>}
                            <p style={{fontSize: '16px', marginTop: "10px", fontWeight: "500"}}>{category.name}</p>
                        </Link>

                ))}
            </div>
            {(showProducts && currentCategory === null) &&(
            <div className="right-side-store" >
                {dataP?.map((product: any, id: number)=>(
                    <div className="product-container" key = {id} style={{display: "flex", flexDirection:"column", gap: "10px"}}>
                        <Link to={`/store/${product.category?._id}/${product.id}`} style={{textDecoration: "none", color: "#222"}}>
                            <img src = {product.image} alt = {product.name} style = {{width: "200px", height: "200px"}}/>
                        </Link>
                        <p>{product.name}</p>
                        <StarRating rating={product.rating} />
                        <p>&#36;{product.price}</p>
                    </div>
                ))}
            </div>
            )}
            {(currentCategory !== undefined) &&
                (<div className="right-side-store" >
                        {dataP?.filter((product: any) => product.category?._id === currentCategory)
                    .map((product: any, productId: number) => (
                    <div key={productId}>
                        <Link to={`/store/${product.category?._id}/${product.id}`} style={{textDecoration: "none", color: "#222"}}>
                            <img src={product.image} alt={product.name} style={{ width: "200px", height: "200px" }} />
                        </Link>
                        <p>{product.name}</p>
                        <StarRating rating={product.rating} />
                        <p>&#36;{product.price}</p>
                    </div>

            ))}
                </div>
                )}
        </div>
    );
};

export default Categories;