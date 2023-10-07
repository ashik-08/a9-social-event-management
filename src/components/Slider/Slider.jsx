import { Carousel } from "@material-tailwind/react";

const Slider = () => {
  return (
    <Carousel
      transition={{ duration: 1.5 }}
      className="rounded-xl mt-4 md:mt-10"
    >
      <img
        src="https://i.ibb.co/wwrQDBm/image.png"
        alt="image 1"
        className="h-full w-full"
      />
      <img
        src="https://i.ibb.co/WgDZVdW/image.png"
        alt="image 2"
        className="h-full w-full"
      />
      <img
        src="https://i.ibb.co/7ppQdyz/image.png"
        alt="image 3"
        className="h-full w-full"
      />
      <img
        src="https://i.ibb.co/n7xnGXk/image.png"
        alt="image 4"
        className="h-full w-full"
      />
    </Carousel>
  );
};

export default Slider;
