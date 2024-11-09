import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../assets/imagescontadnew/AboutUs.png";

const AboutUs = () => {
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
          src={About}
          className="h-full w-full object-cover"
          alt="About Us Background"
          data-aos="fade-in"
          data-aos-duration="1500"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
        {/* About Us Title */}
        <h1
          className="text-3xl md:text-4xl text-gray-500 font-semibold text-center mb-8"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          About Us
        </h1>

        {/* Dream Innovate Fulfill Section */}
        <div
          className="text-2xl md:text-3xl lg:text-4xl text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <span className="text-red-500">We dream.</span>{" "}
          <span className="text-gray-500">We innovate.</span>{" "}
          <span className="text-black">We fulfill</span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Passion Knowledge Ownership */}
          <div className="flex flex-col items-center lg:items-end justify-center space-y-6">
            <div
              className="text-5xl md:text-6xl text-gray-500"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              passion
            </div>
            <div
              className="text-3xl md:text-4xl text-gray-500"
              data-aos="fade-right"
              data-aos-delay="900"
            >
              knowledge
            </div>
            <div
              className="text-5xl md:text-6xl text-gray-500"
              data-aos="fade-right"
              data-aos-delay="1100"
            >
              ownership&gt;&gt;
            </div>
          </div>

          {/* Right Column - Main Text Content */}
          <div className="text-lg md:text-xl text-gray-500 space-y-6">
            <p data-aos="fade-left" data-aos-delay="700">
              It was the year 1970. And the day was February 27th. A young man
              with nerves of steel, all of twenty-three years, set up an
              advertising agency, Continental Advertising Services, popularly
              known today as Contad. From a small agency founded on dreams to
              excel, to being the mammoth that it is now, Contad today is a name
              that clients across industries believe and trust.
            </p>

            <p data-aos="fade-left" data-aos-delay="900">
              An <b>Integrated Communications Company</b> that is{" "}
              <b>accredited</b> with <b>INS since 1979,</b> Contad offers{" "}
              <b>in-depth knowledge</b> in <b>corporate, products, services,</b>{" "}
              and <b>cause branding</b>.
            </p>

            <div data-aos="fade-left" data-aos-delay="1100">
              <h2 className="text-2xl text-black font-semibold mb-2">
                MISSION
              </h2>
              <p>
                To develop and deliver effective communications solution by
                anticipating, understanding and satisfying our clients' needs.
              </p>
            </div>

            <div data-aos="fade-left" data-aos-delay="1300">
              <h2 className="text-2xl text-black font-semibold mb-2">VISION</h2>
              <p>
                To respond and deliver; maximise brand potential; promote a
                culture of accountability, quality, innovativeness...and have
                fun in the process.
              </p>
            </div>

            <p className="italic" data-aos="fade-up" data-aos-delay="1500">
              Passion, knowledge, and ownership....the hallmark of Contad! We
              believe in absolute commitment, highest allegiance and complete
              adherence to client essentials!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
