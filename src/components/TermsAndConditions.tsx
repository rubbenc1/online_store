import Shipping from './../images/Shipping.png'
import Refund from './../images/Refund.png'
import Support from './../images/Support.png'

const TermsAndConditions = () =>{
    return (
        <div className='terms-and-conditions-container'>
            <div>
                <img src = {Shipping} alt = 'shipping Icon'/>
                <p>FREE SHIPPING</p>
            </div>
            <div>
                <img src = {Refund} alt = 'refund icon' />
                <p>REFUND</p>
            </div>
            <div>
                <img src = {Support} alt = 'support icon'/>
                <p>CONTACT US</p>
            </div>
        </div>
    )
}

export default TermsAndConditions;
