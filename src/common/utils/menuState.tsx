import {FC, useState} from "react";
import {HamburgerMenuProps, MenuProviderProps} from "../interfaces/interfaces";
import {createContext} from "react";

export const MenuContext = createContext<HamburgerMenuProps | undefined>(undefined);

export const MenuProvider: FC<MenuProviderProps> = ({children}) =>{
    const [isOpen, setToOpen] = useState(true)

    const contextValue: HamburgerMenuProps = {
        isOpen,
        setToOpen
    }

    return (
        <MenuContext.Provider value = {contextValue}>
            {children}
        </MenuContext.Provider>
    )
}

