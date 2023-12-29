import CartLogo from '../images/CartLogo.png'
import LoginLogo from '../images/LoginLogo.png'
import {Link} from "react-router-dom";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import {FC} from "react";
import {useMenuContext} from "../common/hooks/useMenuContext";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {authTokenState} from "../common/utils/authAtom";
import historyOfOrders from "../images/history_of_orders.png"
import logout from "../images/logout_icon.svg"
import {idState} from "../common/utils/idAtom";


const LogoAndAuth: FC = () =>{

    const {isOpen, setToOpen} = useMenuContext()
    const token = useRecoilValue(authTokenState);
    const setToken = useSetRecoilState(authTokenState);
    const setId = useSetRecoilState(idState);
    const handleLogout = () => {

        localStorage.removeItem('token');
        localStorage.removeItem('id');

        // Update Recoil state
        setToken(null);
        setId(null);
    };

    return (
        <div className='logo-and-auth-container'>
            <Logo/>
            <div className='left-side'>
                <button onClick={handleLogout}>
                    {token && (
                        <img src ={logout} alt = 'Logout icon' style={{width: "30px", height: "30px"}}/>
                        )
                    }
                </button>
                <Link to='/users/login'>
                    {!token &&
                        (
                            <img src={LoginLogo} alt='Login Logo' style={{width: "30px", height: "30px"}}/>
                        )
                    }
                </Link>
                <Link to='/shopping_bag'>
                    <img src = {CartLogo} alt = 'Cart logo'/>
                </Link>
                <Link to='/history_of_orders'>
                    {token && (<img src = {historyOfOrders} alt = "history of orders icon" style={{width: "30px", height: "30px"}}/>)}
                </Link>
                <HamburgerMenu isOpen={isOpen} setToOpen={setToOpen}/>
            </div>

        </div>
    )
}

export default LogoAndAuth;