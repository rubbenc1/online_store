import {FC} from "react";
import {HamburgerMenuProps} from "../common/interfaces/interfaces";


const HamburgerMenu: FC<HamburgerMenuProps> = ({isOpen, setToOpen})=>{


    return (
        <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={()=>setToOpen && setToOpen(!isOpen)}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
    )
}

export default HamburgerMenu;