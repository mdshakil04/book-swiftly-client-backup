import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import Offers from "../Offers/Offers";
import ReactTabs from "../Tabs/ReactTabs";
import SearchFunctionality from "../SearchFunctionality/SearchFunctionality";
import Recommended from "../Recommended/Recommended";
import Statistics from "../Statistics/Statistics";
import WhereToNext from "../WhereToNext/WhereToNext";
import MainServices from "../MainServices/MainServices";
import Newslatter from "../Newslatter/Newslatter";
// import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>
                    Book Swiftly | Home
                </title>
            </Helmet>
            <div  className=" ">
            <Banner></Banner>
            <WhereToNext></WhereToNext>
            {/* <SearchFunctionality></SearchFunctionality> */}
            <Recommended></Recommended>
            <Statistics></Statistics>
            <MainServices></MainServices>
            <ExtraSection></ExtraSection>
            <ReactTabs></ReactTabs>
            <Offers></Offers>
            <Newslatter></Newslatter>
            
        </div>
        </>
    );
};

export default Home;