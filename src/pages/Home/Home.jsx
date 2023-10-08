import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../../components/Services/Services";
import Slider from "../../components/Slider/Slider";
import FollowUs from "../../components/FollowUs/FollowUs";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const ourServices = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Services eventServices={ourServices}></Services>
      <FollowUs></FollowUs>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
