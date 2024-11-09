import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactBg from "../assets/imagescontadnew/Contact.png";

const Contact = () => {
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
        src={ContactBg}
        className="-z-10 h-[110vh] w-[100vw] bg-cover absolute"
        alt=""
      />
      <div
        className="absolute left-[1000px] top-[250px] text-lg text-left"
        data-aos="fade-right"
        data-aos-delay="700"
      >
        <b className="text-2xl">Kolkata</b>
        <br />
        56D Mirza Ghalib Street | Kolkata 700 016 <br />
        <b>P</b>+91 33 2217 2273, 2229 8059/0770 | <b>F</b> +91 33 2229 8036 |{" "}
        <b>E </b>
        confiad.cal@gmail.com
      </div>
      <div
        className="absolute left-[1000px] top-[380px] text-lg text-left"
        data-aos="fade-right"
        data-aos-delay="700"
      >
        <b className="text-2xl">Bhubaneswar</b>
        <br />
        Flat # 206 | Second Floor | Block A | Bharati Tower | Forest Park (Near
        Airport Chowk) Bhubaneswar 751 009
        <br />
        <b>P </b>+91 674 2235 4462 | <b>E </b>
        confiadbbr@gmail.com
      </div>
      <div
        className="absolute left-[1000px] top-[530px] text-lg text-left"
        data-aos="fade-right"
        data-aos-delay="700"
      >
        <b className="text-2xl">New Delhi</b>
        <br />
        Third Floor | E6 Kalkaji | New Delhi 110 019
        <br />
        <b>P </b>+91 11 2621 3600, 2621 3636 | <b>F</b> +91 11 2621 3700 |{" "}
        <b>E </b>
        confiad@gmail.com
      </div>
    </div>
  );
};

export default Contact;
