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
  return (
    <div className="relative text-center h-[110vh] bg-cover flex">
      <img
        src={ServiceImage}
        className="-z-10 h-[110vh] w-[100vw] bg-cover absolute"
        alt=""
      />
      <div className="absolute left-[600px] top-[40px]">
        <p
          className="text-sm text-black text-left w-[500px]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Ours is an all-around approach. What we pride ourselves in, is years
          of proven as well as much-commended experience in delivering solutions
          from planning, through media, digital to events & exhibitions. For
          over four decades we have helped our clients with planning
          (research/analysis/focus group interviews) and visualization of brand
          architecture scenario, provided integrated branding solutions that are
          tailored to suit our client specific (creative strategy, corporate
          identity development, print, television, and radio advertising, bout
          buying, direct mail activation, people marketing; solutions for the
          Internet, social media, digital domain); offered dedicated media
          solutions for both offline as well as online media proper market
          analysis, establishment of media objectives, media strategy and
          implementation through the multi mix; targeted brand coverage,
          scheduling, reach, budget planning, provided focused, innovative, and
          cost effective digital solutions (Internet, social media, search
          engines, online advertising) with spectrum of digital channels to
          reach consumers; offered bespoke exhibition solutions digital
          management, space audience engagement, and services (concept design
          for events and exhibitions, fabrication, installation, organization).
        </p>
      </div>
      <div
        className="text-3xl text-gray-500 absolute left-[1150px] bottom-[430px] text-left"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        services
      </div>
      <div
        className="text-md absolute left-[1150px] bottom-[180px] text-left leading-10"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div>
          {" "}
          <span className="text-red-500">PLANNING</span> SOLUTIONS
        </div>
        <div>
          <span className="text-red-500">BRANDING</span> SOLUTIONS
        </div>
        <div>
          <span className="text-red-500">MEDIA</span> SOLUTIONS
        </div>
        <div>
          <span className="text-red-500">DIGITAL</span> SOLUTIONS
        </div>
        <div>
          <span className="text-red-500">EVENTS AND EXHIBITION</span> SOLUTIONS
        </div>
      </div>
    </div>
  );
};

export default Services;
