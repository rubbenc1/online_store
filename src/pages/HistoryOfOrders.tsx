import {useRecoilValue} from "recoil";
import {authTokenState} from "../common/utils/authAtom";
import {idState} from "../common/utils/idAtom";
import {useQuery} from "react-query";
import historyOrdersRequest from "../common/api/historyOrdersRequest";
import {useEffect} from "react";
import {MenuProvider} from "../common/utils/menuState";
import LogoAndAuth from "../components/LogoAndAuth";
import NavigationBar from "../components/NavigationBar";


const HistoryOfOrders = () => {
    const token = useRecoilValue(authTokenState);
    const id = useRecoilValue(idState);
    const { data, isLoading, isError, refetch } = useQuery(
        'yourQueryKey',
        () => historyOrdersRequest(id || '', token || ''),
        {
            enabled: false, // Disable automatic fetching on mount
        }
    );

    useEffect(() => {
        // Manually trigger the query when the component mounts or when dependencies change
        refetch();
    }, [id, token, refetch]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error loading data</p>;
    }

    return (
        <MenuProvider>
            <LogoAndAuth />
            <NavigationBar />
            <h2 style = {{marginBottom: "40px"}}>Pending orders</h2>
            {data?.map((order: any, id: number) => (
                <div key = {id}>
                    {order.orderItems.map((details: any, id: number)=>(
                        <div className="historyOfOrders" key = {id}>
                            <div className='nameOfItem'>
                                <p style = {{width: "60px"}}>{details.product.name}</p>
                            </div>
                            <div className = "imgOfItem">
                                <img src={details.product.image} style = {{width: "50px", height: "50px"}}/>
                            </div>
                            <div className = 'status'>
                                <p>Status: </p>
                                <p>{order.status}</p>
                            </div>
                            <div className="quantityOfItem">
                                <p>Quantity: </p>
                                <p>{details.quantity}</p>
                            </div>
                            <div className="priceOfItem">
                                <p>Price: </p>
                                <p>${details.product.price}</p>
                            </div>
                            <div className="totalOfOrder">
                                <p>Total: </p>
                                <p>${order.totalPrice}</p>
                            </div>
                            <div className="itemAddress">
                                <p>Address: </p>
                                <p>{order.shippingAddress1}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}

        </MenuProvider>
    );
};

export default HistoryOfOrders;