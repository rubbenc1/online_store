import LogoAndAuth from "../components/LogoAndAuth";
import NavigationBar from "../components/NavigationBar";
import {MenuProvider} from "../common/utils/menuState";
import Footer from "../components/Footer";
import ShoppingDetails from "../components/ShoppingDetails";


const ShoppingBag = () => {


    return (
        <MenuProvider>
            <LogoAndAuth />
            <NavigationBar />
            <ShoppingDetails />
            <Footer />
        </MenuProvider>
    )
}

export default ShoppingBag;