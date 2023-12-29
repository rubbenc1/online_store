import {Link} from "react-router-dom";


const PremiumMember = () =>{


    return (
        <div className='PremiumMember'>
            <h3 style = {{fontSize: "38px", fontWeight: "500"}}>Premium Member Exclusive</h3>
            <p style = {{fontSize: "24px", fontWeight: "400"}}>15&#37; OFF EVERYTHING + EXTRA gift card & coupon Offers</p>
            <Link to='/register' style = {{textDecoration: "none", color: 'black'}}>
                <p style = {{fontSize: "18px", fontWeight: "500"}}>Not a member? Join now to shop.</p>
            </Link>
        </div>
    )
}

export default PremiumMember;