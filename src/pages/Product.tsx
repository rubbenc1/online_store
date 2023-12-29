import {MenuProvider} from "../common/utils/menuState";
import LogoAndAuth from "../components/LogoAndAuth";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetails";



const Product = () => {

    return (
        <MenuProvider>
            <LogoAndAuth />
            <NavigationBar />
            <ProductDetail />
            <Footer />
        </MenuProvider>
    )

}

export default Product;