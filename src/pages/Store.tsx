import {MenuProvider} from "../common/utils/menuState";
import LogoAndAuth from "../components/LogoAndAuth";
import NavigationBar from "../components/NavigationBar";
import SearchBar from "../components/SearchBar";
import PremiumMember from "../components/PremiumMember";
import Categories from "../components/Categories";
import Footer from "../components/Footer";


const Store = () => {
    return (
        <MenuProvider>
            <LogoAndAuth />
            <NavigationBar />
            <SearchBar />
            <PremiumMember />
            <Categories showImg={false} style={{display: "flex"}} showProducts={true}/>
            <Footer />
        </MenuProvider>
    )
}

export default Store;