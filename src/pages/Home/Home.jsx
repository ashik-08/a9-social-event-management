import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../../components/Services/Services";
import Slider from "../../components/Slider/Slider";

const Home = () => {

    const ourServices = useLoaderData();
    console.log(ourServices);

    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Services eventServices={ourServices}></Services>
        </div>
    );
};

export default Home;