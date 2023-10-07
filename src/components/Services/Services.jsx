import ServiceCard from "./ServiceCard";
import PropTypes from "prop-types";

const Services = ({ eventServices }) => {
  return (
    <div className="mt-12 md:mt-20">
      <h2 className="text-special text-3xl md:text-4xl font-bold text-center">
        Our Services
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 md:mt-12">
        {eventServices &&
          eventServices.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
      </div>
    </div>
  );
};

Services.propTypes = {
  eventServices: PropTypes.array,
};

export default Services;
