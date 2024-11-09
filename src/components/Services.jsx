import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceImage from "../assets/imagescontadnew/Services.png";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const servicesList = [
    { highlight: "PLANNING", text: "SOLUTIONS" },
    { highlight: "BRANDING", text: "SOLUTIONS" },
    { highlight: "MEDIA", text: "SOLUTIONS" },
    { highlight: "DIGITAL", text: "SOLUTIONS" },
    { highlight: "EVENTS AND EXHIBITION", text: "SOLUTIONS" },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Vignette */}
      <div className="absolute inset-0">
        <img
          src={ServiceImage}
          className="h-full w-full object-cover"
          alt="Services Background"
          data-aos="fade-in"
          data-aos-duration="1500"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen container mx-auto px-4 md:px-8 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
          {/* Left Content - Main Text */}
          <div
            className="lg:w-1/2 xl:w-2/3"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="prose max-w-none">
              <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed">
                Ours is an all-around approach. What we pride ourselves in, is
                years of proven as well as much-commended experience in
                delivering solutions from planning, through media, digital to
                events & exhibitions. For over four decades we have helped our
                clients with planning (research/analysis/focus group interviews)
                and visualization of brand architecture scenario, provided
                integrated branding solutions that are tailored to suit our
                client specific (creative strategy, corporate identity
                development, print, television, and radio advertising, bout
                buying, direct mail activation, people marketing; solutions for
                the Internet, social media, digital domain); offered dedicated
                media solutions for both offline as well as online media proper
                market analysis, establishment of media objectives, media
                strategy and implementation through the multi mix; targeted
                brand coverage, scheduling, reach, budget planning, provided
                focused, innovative, and cost effective digital solutions
                (Internet, social media, search engines, online advertising)
                with spectrum of digital channels to reach consumers; offered
                bespoke exhibition solutions digital management, space audience
                engagement, and services (concept design for events and
                exhibitions, fabrication, installation, organization).
              </p>
            </div>
          </div>

          {/* Right Content - Services Title and List */}
          <div className="lg:w-1/2 xl:w-1/3 flex flex-col justify-between h-full">
            {/* Services Title */}
            <h1
              className="text-5xl md:text-6xl text-gray-500 mb-8 lg:mb-16"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              services
            </h1>

            {/* Services List */}
            <div className="space-y-4">
              {servicesList.map((service, index) => (
                <div
                  key={index}
                  className="text-xl md:text-2xl font-medium tracking-wide"
                  data-aos="fade-left"
                  data-aos-delay={500 + index * 200}
                >
                  <span className="text-red-500">{service.highlight}</span>{" "}
                  <span className="text-black">{service.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
