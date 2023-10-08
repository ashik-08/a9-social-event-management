import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Carousel, IconButton } from "@material-tailwind/react";

const Gallery = () => {
  return (
    <section>
      <Navbar></Navbar>
      <div className="text-center">
        <h2 className="text-special italic text-lg md:text-2xl mt-6 md:mt-16 mb-10">
          Engagement & Wedding
        </h2>
        <Carousel
          className="rounded-xl"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-out-sine"
          data-aos-duration="1000"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          <img
            src="https://i.ibb.co/Y8RKvfb/image.png"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://i.ibb.co/jZCj7p4/image.png"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://i.ibb.co/7pzZD86/image.png"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src="https://i.ibb.co/bNPms2x/image.png"
            alt="image 4"
            className="h-full w-full object-cover"
          />
          <img
            src="https://i.ibb.co/jzyv4MR/image.png"
            alt="image 5"
            className="h-full w-full object-cover"
          />
        </Carousel>
        <div className="space-y-10 mt-10">
          <video
            className="h-full w-full rounded-lg"
            controls
            autoPlay
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-out-sine"
            data-aos-duration="1000"
          >
            <source
              src="https://v4.cdnpk.net/videvo_files/video/free/video0472/large_watermarked/_import_61b1b83a6a78e2.33888338_FPpreview.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <video
            className="h-full w-full rounded-lg"
            controls
            autoPlay
            data-aos="zoom-in-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-out-sine"
            data-aos-duration="1000"
          >
            <source
              src="https://v4.cdnpk.net/videvo_files/video/free/video0474/large_watermarked/_import_61f620b2e841b0.51465525_FPpreview.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2 className="text-special italic text-lg md:text-2xl mt-6 md:mt-16 mb-10">
            Birthday Parties
          </h2>
          <Carousel
            className="rounded-xl"
            data-aos="zoom-out-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-out-sine"
            data-aos-duration="1000"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          >
            <img
              src="https://i.ibb.co/m0139rj/image.png"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://i.ibb.co/thZpB7x/image.png"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://i.ibb.co/G004cmX/image.png"
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <img
              src="https://i.ibb.co/wp82QNG/image.png"
              alt="image 4"
              className="h-full w-full object-cover"
            />
            <img
              src="https://i.ibb.co/K5Fpspx/image.png"
              alt="image 5"
              className="h-full w-full object-cover"
            />
            <img
              src="https://i.ibb.co/vxkhSbf/image.png"
              alt="image 6"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
        <div className="mt-10">
          <video
            className="h-full w-full rounded-lg"
            controls
            autoPlay
            data-aos="zoom-out-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-out-sine"
            data-aos-duration="1000"
          >
            <source
              src="https://v4.cdnpk.net/videvo_files/video/free/video0467/large_watermarked/_import_614f011287eee5.08723393_FPpreview.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Gallery;
