import {ChangeEvent, useEffect, useState} from "react";
import {useProducts} from "../common/hooks/useCategoriesAndProducts";
import {removingFromCart} from "../common/utils/removingFromCart";

const ShoppingDetails = () => {
    const { dataP, isLoadingP, isErrorP } = useProducts();
    const [parsedData, setParsedData] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);

    useEffect(() => {
        const storedData: string | null = localStorage.getItem('cartItems');
        if (storedData) {
            setParsedData(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        // Update filteredData when parsedData changes
        if (dataP && parsedData.length > 0) {
            const newData = dataP.filter((detailP: any) =>
                parsedData.some((detailS: any) => detailP.id === detailS.productID)
            );
            setFilteredData(newData);
        }
    }, [parsedData]);

    const handleSelectChanges = (e: ChangeEvent<HTMLSelectElement>, productId: string) => {
        const selectedValue = e.target.value;

        // Find the index of the item in parsedData
        const index = parsedData.findIndex((item) => item.productID === productId);

        if (index !== -1) {
            // Update the selectedOption property
            const updatedData = [...parsedData];
            updatedData[index].selectedOption = selectedValue;

            // Update the local storage with the modified data
            localStorage.setItem('cartItems', JSON.stringify(updatedData));

            // Update the state to trigger a re-render
            setParsedData(updatedData);
        }
    };

    if (isLoadingP) {
        return <p>Loading...</p>;
    }

    if (isErrorP) {
        return <p>Error loading data</p>;
    }

    return (
        <div>
            <h2>SHOPPING CART</h2>
            {filteredData?.map((filtered: any) => {
                // Find the corresponding parsedData item
                const parsedDataItem = parsedData.find((item) => item.productID === filtered.id);

                return (
                    <div className="shopping-container" key={filtered.id} style={{ display: 'flex', marginTop: '20px', padding: '20px', width: '500px'}}>
                        <div className="left-side-shopping" style={{ display: 'flex', width: '100%', justifyContent:'space-between'}}>
                            <div className="left-side-of-left-side">
                                <img src={filtered.image} alt={filtered.name} style={{ width: "150px", height: "150px" }} />
                            </div>
                            <div className='right-side-of-left-side' style={{display: 'flex', gap: "20px", width: '100%', justifyContent: 'space-between'}}>
                                <div className='section1' style = {{display: "flex", flexDirection: "column", gap: "20px"}}>
                                    <div className='name_and_price'>
                                        <h3>{filtered.name}</h3>
                                        <p>&#36;{filtered.price}</p>
                                    </div>
                                    <div className='more_details'>
                                        <p>{filtered.description}</p>
                                    </div>
                                    <div>
                                        <select
                                            value={parsedDataItem?.selectedOption}
                                            onChange={(e) => handleSelectChanges(e, filtered.id)}
                                        >
                                            {Array.from({ length: filtered.countInStock }, (_, index) => (
                                                <option key={index + 1} value={index + 1}>
                                                    {index + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className='section2'>
                                    <button onClick={()=>removingFromCart(filtered.id, setParsedData)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M1 1L17.3167 17.3167" stroke="#323334"/>
                                            <path d="M17.3167 1L0.999998 17.3167" stroke="#323334"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="right-side-shopping">

                        </div>
                    </div>
                );
            })}
            <div className='checkout'>
                <button>CONTINUE TO CHECKOUT</button>
            </div>
        </div>
    );
};

export default ShoppingDetails;