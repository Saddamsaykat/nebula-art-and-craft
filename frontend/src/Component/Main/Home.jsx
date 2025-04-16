import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Card from "./Card/Card";
import Map from "./Map/Map";
import Slider from "./Slider/Slider";
import CardInHome from "./CardInHome/CardInHome";
import HomeCatagories from "./HOmeCatagories/HomeCatagories";
import Slat from "./Slat/Slat";
import AwesomeReveal from "./AwesomeReveal/AwesomeReveal";


const Home = () => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Slider></Slider>
            <Banner></Banner>
            <Card></Card>
            <CardInHome></CardInHome>
            <HomeCatagories></HomeCatagories>
            <Map></Map>
            <AwesomeReveal></AwesomeReveal>
            <Slat></Slat>
         

        </div>
    );
};

export default Home;