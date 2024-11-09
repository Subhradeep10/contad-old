import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PortfolioBg from "../assets/imagescontadnew/Portfolio.png";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Vignette */}
      <div className="absolute inset-0">
        <img
          src={PortfolioBg}
          className="h-full w-full object-cover"
          alt="Portfolio Background"
          data-aos="fade-in"
          data-aos-duration="1500"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
          {/* Header */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-gray-500 font-semibold mb-12 text-center"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Portfolio
          </h1>

          {/* Content Card */}
          <div
            className="max-w-4xl mx-auto"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 lg:p-10 shadow-lg">
              {/* Main Text */}
              <p
                className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800"
                data-aos="fade-right"
                data-aos-delay="700"
              >
                We rejoice in creating{" "}
                <span
                  className="text-red-500 font-semibold"
                  data-aos="fade-in"
                  data-aos-delay="900"
                >
                  out-of-the-box solutions
                </span>{" "}
                for our clients. What we deliver is far cry from the 'me too'
                bunch. A fresh perspective, 'not-thought-of-before' approach and
                an infectious zeal to execute to perfection, is what drives us
                at Confiar.
              </p>

              <div
                className="mt-8 border-l-4 border-red-500 pl-6"
                data-aos="fade-left"
                data-aos-delay="1100"
              >
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  Our campaigns have helped our clients achieve maximum
                  visibility and highest consumer mindshare. This has inspired
                  us to achieve more, and to consistently emerge as one of the
                  top most agencies in the field.
                </p>
              </div>

              {/* Additional Design Elements */}
              <div
                className="mt-8 flex justify-end"
                data-aos="fade-left"
                data-aos-delay="1300"
              >
                <div className="text-3xl md:text-4xl text-gray-400 font-light">
                  &gt;&gt;
                </div>
              </div>
            </div>
          </div>

          {/* Footer Quote */}
          <div
            className="mt-12 text-center text-gray-600 italic text-lg md:text-xl"
            data-aos="fade-up"
            data-aos-delay="1500"
          >
            Creating impactful solutions that stand out
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
