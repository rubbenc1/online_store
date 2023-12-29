import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Subscription = ()=>{
    return (
        <div className='subscription-container'>
            <div className='left-side-subscription'>
                <h3>SING UP FOR OUR NEWSLETTER</h3>
                <p>Subscribe for the latest DEALS and promotions</p>
            </div>
            <div className='right-side-subscription'>
                <input type='text' placeholder='Enter your e-mail address'/>
                <FontAwesomeIcon icon={faEnvelope} className='envelope'/>
            </div>
        </div>
    )
}

export default Subscription;