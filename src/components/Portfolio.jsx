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
    <div className="relative text-center h-[110vh] bg-cover flex">
      <img
        src={PortfolioBg}
        className="-z-10 h-[110vh] w-[100vw] bg-cover absolute"
        alt=""
      />
      <img
        src="https://i.ibb.co/JvZJFVR/DSC-0425.jpg"
        className="-z-10 h-[42vh] w-[40vw] absolute rounded-lg left-[640px] top-[405px]"
        alt=""
        data-aos="fade-up"
        data-aos-delay="500"
      />
      <div
        className="absolute top-[140px] left-[600px] text-left text-lg w-[700px]"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        We rejoice in creating out-of-the-box solutions for our clients. What we
        deliver is far cry from the 'me too' bunch. A fresh perspective,
        'not-thought-of-before' approach and an infectious zeal to execute to
        perfection, is what drives us at Confiar. Our campaigns have helped our
        clients achieve maximum visibility and highest consumer mindshare. This
        has inspired us to achieve more, and to consistently emerge as one of
        the top most agencies in the field.
      </div>
    </div>
  );
};

export default Portfolio;
