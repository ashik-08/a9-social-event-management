import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const { name, image, price, short_description } = service;

  return (
    <div>
      <div className="flex">
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
          <button className="bg-special text-white text-sm lg:text-base xl:text-lg font-medium md:font-semibold px-2 py-1 md:px-2.5 md:py-1.5 xl:px-4 xl:py-2 rounded">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
