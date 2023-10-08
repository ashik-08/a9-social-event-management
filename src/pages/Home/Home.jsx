import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../../components/Services/Services";
import Slider from "../../components/Slider/Slider";
import FollowUs from "../../components/FollowUs/FollowUs";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const ourServices = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar></Navbar>
      {user && (
        <h2
          className="text-2xl fond-bold italic text-center mt-6 md:mt-10"
          data-aos="zoom-in-up"
          data-aos-offset="500"
          data-aos-easing="ease-in-out-sine"
          data-aos-duration="1500"
        >
          Welcome <span className="text-special ">{user.displayName} !</span>
        </h2>
      )}
      <Slider></Slider>
      <Services eventServices={ourServices}></Services>
      <FollowUs></FollowUs>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
