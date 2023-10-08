import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <section>
      <Navbar></Navbar>
      <div className="md:text-lg fond-bold italic px-6 md:px-16 lg:px-24 xl:px-32 mt-6 md:mt-16 space-y-10">
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-out-sine"
          data-aos-duration="1000"
        >
          <h2 className="text-special text-lg md:text-2xl mb-3">About Us</h2>
          <p>
            At EventPerfection, we are passionate about turning your special
            moments into unforgettable experiences. Our dedicated team of event
            planners and designers is committed to making your social events,
            whether it&apos;s a dream wedding, a birthday celebration, an
            anniversary, an engagement party, a retirement bash, or a
            heartwarming baby shower, truly remarkable.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-out-sine"
          data-aos-duration="1000"
        >
          <h2 className="text-special text-lg md:text-2xl mb-3">Our Mission</h2>
          <p>
            Our mission is to craft and execute every event with precision,
            creativity, and utmost care. We understand that each event is
            unique, and we take pride in tailoring our services to match your
            vision and requirements. From conceptualization to execution, we
            strive for excellence in every detail.
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-easing="ease-in-out-sine"
          data-aos-duration="1000"
        >
          <h2 className="text-special text-lg md:text-2xl mb-3">
            Why Choose Us
          </h2>
          <p>
            <b>Expertise:</b> With years of experience, we bring expertise and
            creativity to every event. <br />
            <b>Personalization:</b> We work closely with you to ensure your
            event reflects your style and personality. <br />
            <b>Attention to Detail:</b> From venue selection to the smallest
            decor elements, we leave no detail overlooked. <br />
            <b>Professionalism:</b> Our dedicated team ensures your event runs
            smoothly and stress-free. <br />
            <b>Memories:</b> We aim to create memories that you and your guests
            will cherish for a lifetime.
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-out-sine"
          data-aos-duration="1000"
        >
          <h2 className="text-special text-lg md:text-2xl mb-3">Contact Us</h2>
          <p>
            Feel free to get in touch with us for inquiries, quotes, or to
            discuss your upcoming event. <br /> We are here to assist you every
            step of the way.
          </p>
          <p>
            <b>Address:</b> EventMania Event Management, 123 Main Street, Dhaka,
            1207
          </p>
          <p>
            <b>Phone:</b> (123) 456-7890
          </p>
          <p>
            <b>Email:</b> info@eventperfection.com
          </p>
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-out-sine"
          data-aos-duration="1000"
        >
          <h2 className="text-special text-lg md:text-2xl mb-3">
            Office Hours
          </h2>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 3:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default About;
