import PropTypes from "prop-types";

const DetailsOfService = ({ detail }) => {
  const { name, image, description } = detail;

  return (
    <div>
      <div className=" mt-12 md:mt-20">
        <img className="rounded-lg" src={image} alt="" />
        <button className="bg-special text-white md:text-lg font-semibold rounded-lg px-3 py-1 md:px-6 md:py-3 mt-5">
          Book your {name} now
        </button>
      </div>
      <div className="mt-12 mb-28 space-y-6">
        <h2 className="text-4xl font-bold">{name}</h2>
        <p className="text-des-text">{description}</p>
      </div>
    </div>
  );
};

DetailsOfService.propTypes = {
  detail: PropTypes.array,
};

export default DetailsOfService;
