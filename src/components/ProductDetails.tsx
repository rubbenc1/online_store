import {useProducts} from "../common/hooks/useCategoriesAndProducts";
import {ChangeEvent, useState} from "react";
import {AddingToCart} from "../common/utils/AddingToCart";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {authTokenState} from "../common/utils/authAtom";


const ProductDetail= () => {
    const { dataP, isLoadingP, isErrorP } = useProducts();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | number>('');
    const token = useRecoilValue(authTokenState)
    const navigate = useNavigate();
    const {categoryID, productID} = useParams<{ categoryID: string; productID: string }>();
    if (isLoadingP) {
        return <p>Loading...</p>;
    }

    if (isErrorP) {
        return <p>Error loading data</p>;
    }
    // Downloading data
    const product = dataP?.find((product: any) => product.id === productID);

    const featuredData = dataP?.filter((detail: any) => (detail.isFeatured === true));

    if (!product) {
        return <p>Product not found</p>;
    }

    let images = [];

    try {
        if (product.images !== undefined) {
            const parsedImages = JSON.parse(product.images);

            if (Array.isArray(parsedImages)) {
                images = parsedImages;
            } else {
                console.error('Invalid JSON format: images is not an array', product.images);
                // Handle the error, e.g., show a default image or a placeholder
            }
        }
    } catch (error) {
        // console.error('Error parsing JSON:', error, product.images);
    }

    const options = [<option key='count' value='count'>COUNT</option>];
    for (let count = 1; count <= product.countInStock; count++) {
        options.push(<option key={count} value={count}>{count}</option>);
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) =>{
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);
    };

    // slider
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>(prevIndex + 1) % featuredData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>(prevIndex - 1 + featuredData.length) % featuredData.length);
    }

    return (
        <>
            <div className="product-container" style={{ display: 'flex', justifyContent: 'space-around', margin:'40px 20px', }}>
                <div className="left-side-product" style = {{display: "flex", flexDirection: 'column', width: "100%", gap: "40px"}}>
                    <div className='images' style = {{display: 'flex', flexWrap: 'wrap', gap: "10px"}}>
                        <img src={product.image} alt={product.name} style={{ width: "200px", height: "200px" }} />
                        {images.length > 0 &&
                            images.map((image: string, index: number) => (
                                <img key={index} src={image} alt={product.name} style={{ width: "200px", height: "200px" }} />
                            ))}
                    </div>
                    <div style = {{background: '#F9D370', padding: '40px'}}>
                        <p>{product.richDescription} </p>
                    </div>
                </div>
                <div className="right-side-product" style={{ width: '100%', display: 'flex', flexDirection: "column", gap: '10px'}}>
                    <h3 style={{fontSize: '28px', fontWeight: '500'}}>{product.name}</h3>
                    <p style={{fontSize: '28px', fontWeight: '500', marginBottom: '30px'}}>&#36;{product.price}</p>
                    <img src={product.image} alt={product.name} style={{ width: "50px", height: "50px" }} />
                    <div className='func-btns' style = {{display: 'flex', flexDirection: 'column', gap: "10px"}}>
                        <select style = {{width: "300px", height: "40px"}} onChange={handleSelectChange}>{options}</select>
                        <button style = {{width: "300px", height: "40px" }} onClick={() => {
                            if (selectedOption !== '' && selectedOption !== 'option' ) {
                                if (!token){
                                    navigate('/users/register')
                                }else {
                                    AddingToCart({productID, selectedOption});
                                    navigate('/shopping_bag')
                                }
                            }
                            }}>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <h3>Also you Make Like</h3>
            <div className='featured-container'>
                <button className='left-arrow' onClick={prevSlide}>&#8592;</button>
                <div className='featured-slider'>
                    {featuredData.slice(currentIndex, currentIndex + 4).map((filteredDetail: any, id: number) => (
                        <div key={id} className={`featured-item`}>
                            <Link to={`/store/${filteredDetail.category._id}/${filteredDetail.id}`}>
                                <img src={filteredDetail.image} alt={filteredDetail.name} style={{ width: '200px', height: '200px' }} />
                            </Link>
                            <p>{filteredDetail.name}</p>
                        </div>
                    ))}
                </div>
                <button className='right-arrow' onClick={nextSlide}>&#8594;</button>
            </div>
        </>
    );
};

export default ProductDetail;