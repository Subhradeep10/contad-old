import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeImage from "../assets/imagescontadnew/home.png";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img
          src={HomeImage}
          className="h-full w-full object-cover"
          alt="Continental Advertising Background"
          data-aos="fade-in"
          data-aos-duration="1500"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col px-4 md:px-8 lg:px-12">
        {/* Hero Section */}
        <div className="mt-20 md:mt-32 lg:mt-40 flex flex-col items-start max-w-full">
          {/* Description */}
          <div
            className="text-left text-base md:text-lg lg:text-xl max-w-full md:max-w-xl lg:max-w-2xl ml-4 md:ml-8 lg:ml-auto lg:mr-12 text-black"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <b>Continental Advertising Services</b> or, <b>Contad</b> is a
            full-service advertising agency that offers its clients
            comprehensive, 360-degree solutions. Headquartered in Kolkata, it
            has branch offices in Bhubaneswar and New Delhi.
          </div>

          {/* Tagline */}
          <div
            className="text-left text-2xl md:text-3xl lg:text-4xl max-w-full md:max-w-2xl lg:max-w-3xl mt-8 md:mt-12 lg:mt-16 ml-4 md:ml-8 lg:ml-auto lg:mr-12 text-black"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            Ideas &gt; Cerebral &gt; Physical Communication
          </div>

          {/* Navigation Links */}
          <nav className="text-left text-xl md:text-2xl lg:text-3xl mt-8 md:mt-12 lg:mt-16 ml-2 md:ml-8 lg:mr-12 flex justify-end w-[50vw]">
            <ul className="space-y-4 md:space-y-6 text-black">
              {[
                "About Us",
                "Services",
                "Clients",
                "Profiles",
                "Contact Us",
              ].map((item, index) => (
                <li
                  key={item}
                  className="hover:text-gray-300 cursor-pointer transition-colors"
                  data-aos="fade-left"
                  data-aos-delay={900 + index * 100}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home;
