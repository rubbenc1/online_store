import LogoAndAuth from "./LogoAndAuth";
import NavigationBar from "./NavigationBar";
import TermsAndConditions from "./TermsAndConditions";
import Slider from "./Slider";
import SearchBar from "./SearchBar";
import Subscription from "./Subscription";
import Footer from "./Footer";
import BedSheet from "./BedSheet";
import {MenuProvider} from "../common/utils/menuState";
import StaticItems from "./StaticItems";
import Categories from "./Categories";

const HomePage = () =>{

    return (
        <MenuProvider>
            <>
                <LogoAndAuth />
                <NavigationBar />
                <SearchBar/>
                <TermsAndConditions />
                <Slider />
                <StaticItems />
                <Categories style ={{display: "flex", justifyContent: "center"}} style1 = {{display: "flex", flexWrap: "wrap", justifyContent:"center", gap: "5px"}} />
                <BedSheet />
                <Subscription />
                <Footer />
            </>
        </MenuProvider>
    )
}

export default HomePage;