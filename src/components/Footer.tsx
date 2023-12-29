import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-top'>
                <div className='first-column-footer'>
                    <h1 style={{color:'#F3F6FF', fontSize: '28px'}}>BRAND NAME</h1>
                    <p style={{color:'rgba(255, 255, 255, 0.50)', fontSize: '16px', fontWeight: '400', lineHeight: '22px'}}>
                        Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit, sed do eiusmod tempor.
                    </p>
                    <p style={{color:'#F3F6FF', fontSize: '16px', lineHeight: '22px'}}>121 king street, Melbourne 3000</p>
                    <p style={{color:'#F3F6FF', fontSize: '16px', lineHeight: '22px'}}>+12 3 0000 0000</p>
                    <p style={{color:'#F3F6FF', fontSize: '16px', lineHeight: '22px'}}>contact@brandemail.com</p>
                    <div className='social-networks'>
                        <FontAwesomeIcon icon={faFacebook}/>
                        <FontAwesomeIcon icon={faTwitter}/>
                        <FontAwesomeIcon icon={faInstagram}/>
                        <FontAwesomeIcon icon={faYoutube}/>
                    </div>
                </div>
                <div className='second-column-footer'>
                    <h2>SHOPPING</h2>
                    <p style ={{fontWeight: '300'}}>Your cart</p>
                    <p style ={{fontWeight: '300'}}>Your orders</p>
                    <p style ={{fontWeight: '300'}}>Compared items</p>
                    <p style ={{fontWeight: '300'}}>Wishlist items</p>
                    <p style ={{fontWeight: '300'}}>Shipping detail</p>
                </div>
                <div className='third-column-footer'>
                    <h2>MORE LINK</h2>
                    <p style ={{fontWeight: '300'}}>Blog</p>
                    <p style ={{fontWeight: '300'}}>Gift Center</p>
                    <p style ={{fontWeight: '300'}}>Buying Guides</p>
                    <p style ={{fontWeight: '300'}}>New Arrivals</p>
                    <p style ={{fontWeight: '300'}}>Clearance</p>
                </div>
                <div className='fourth-column-footer'>
                    <h2 style={{color:'#F3F6FF', fontSize: '16px'}}>PROMO UPDATE</h2>
                    <div className='fourth-column-first-row'>
                        <p style={{color:'rgba(255, 255, 255, 0.50)', fontSize: '24px', fontWeight: '400', lineHeight: 'normal'}}>14<span style={{fontSize: '14px'}}> May</span></p>
                        <p style={{color:'#F3F6FF', fontSize: '16px', lineHeight: '22px'}}>
                            Lorem ipsum dolor sit amet, consectetur
                            <br/>adipiscing elit.
                        </p>
                        <p style = {{color:'rgba(255, 255, 255, 0.50)', fontSize: '14px', fontWeight: '400'}}>3 comments</p>

                    </div>
                    <div className='fourth-column-second-row'>
                        <p style={{color:'rgba(255, 255, 255, 0.50)', fontSize: '24px', fontWeight: '400', lineHeight: 'normal'}}>15<span style={{fontSize: '14px'}}> July</span></p>
                        <p style={{color:'#F3F6FF', fontSize: '16px', lineHeight: '22px'}}>
                            Lorem ipsum dolor sit amet, consectetur
                            <br/>adipiscing elit.
                        </p>
                        <p style = {{color:'rgba(255, 255, 255, 0.50)', fontSize: '14px', fontWeight: '400'}}>3 comments</p>

                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                Brand Registered Name &copy; – All rights reserved
            </div>
        </div>
    )
}

export default Footer;