import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ServiceCard = ({ service }) => {
  const { id, name, image, price, short_description } = service;

  return (
    <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-out-sine" data-aos-duration="1000">
      <div className="flex drop-shadow-2xl">
        <figure>
          <img
            className="w-screen h-[160px] lg:h-[200px] xl:h-[240px] rounded-l-lg"
            src={image}
            alt={`${name} images`}
          />
        </figure>
        <div className="bg-service-bg flex flex-col justify-center items-start p-2 md:p-3 xl:p-5 space-y-0.5 md:space-y-1.5 xl:space-y-3 rounded-r-lg w-screen h-[160px] lg:h-[200px] xl:h-[240px]">
          <p className="text-pri-text text-sm lg:text-lg xl:text-2xl font-semibold">
            {name}
          </p>
          <p className="text-des-text text-xs lg:text-sm font-medium">
            {short_description}
          </p>
          <p className="text-special text-sm font-medium lg:text-base xl:text-lg xl:font-semibold">
            ${price}
          </p>
          <Link to={`/service/${id}`} className="bg-special text-white text-sm lg:text-base xl:text-lg font-medium md:font-semibold px-2 py-1 md:px-2.5 md:py-1.5 xl:px-4 xl:py-2 rounded">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
