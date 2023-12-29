import {Link} from "react-router-dom";
import {FC} from "react";
import {HamburgerMenuProps} from "../common/interfaces/interfaces";
import {useMenuContext} from "../common/hooks/useMenuContext";


const NavigationBar = () =>{
    const {isOpen} = useMenuContext()
    return (
        <div className={`navigation ${isOpen ? '' : 'hidden'}`}>
            <Link to='/'>
                HOME
            </Link>
            <Link to = '/store'>
                STORE
            </Link>
            <Link to = '/categories'>
                CATEGORIES
            </Link>
            <Link to = '/brand'>
                BRAND
            </Link>
            <Link to = '/pages'>
                PAGES
            </Link>
            <Link to = '/about'>
                ABOUT US
            </Link>
            <Link to = '/news'>
                NEWS
            </Link>
            <Link to = '/contact'>
                CONTACT US
            </Link>
        </div>
    )
}

export default NavigationBar;