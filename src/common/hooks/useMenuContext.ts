import {useContext} from "react";
import {MenuContext} from "../utils/menuState";

export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenuContext must be used within a MenuProvider');
    }
    return context;
};