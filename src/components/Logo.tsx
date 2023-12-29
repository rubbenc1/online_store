import LogoImg from './../images/LogoImg.png'
import {Link} from "react-router-dom";

const Logo = () =>{
    return (
        <div className='logo-container'>
            <Link to='/'>
                <img src={LogoImg} alt = 'logo'/>
            </Link>
            <Link to='/' style={{textDecoration: 'none'}}>
                <p>BRAND NAME</p>
            </Link>
        </div>
    )
}

export default Logo;