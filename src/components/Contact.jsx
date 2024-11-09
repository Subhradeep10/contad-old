import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactBg from "../assets/imagescontadnew/Contact.png";

const ContactLocation = ({ city, address, phone, fax, email, index }) => (
  <div
    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    data-aos="fade-up"
    data-aos-delay={index * 100}
    data-aos-duration="1000"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
      {city}
    </h2>
    <div className="space-y-3 text-base md:text-lg text-gray-700">
      <p className="whitespace-pre-line">{address}</p>
      <div className="space-y-1">
        {phone && (
          <p>
            <span className="font-semibold">P </span>
            {phone}
          </p>
        )}
        {fax && (
          <p>
            <span className="font-semibold">F </span>
            {fax}
          </p>
        )}
        {email && (
          <p>
            <span className="font-semibold">E </span>
            <a
              href={`mailto:${email}`}
              className="text-red-500 hover:text-red-600 transition-colors duration-200"
            >
              {email}
            </a>
          </p>
        )}
      </div>
    </div>
  </div>
);

const Contact = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "mobile",
    });
  }, []);

  const locations = [
    {
      city: "Kolkata",
      address: "56D Mirza Ghalib Street\nKolkata 700 016",
      phone: "+91 33 2217 2273, 2229 8059/0770",
      fax: "+91 33 2229 8036",
      email: "confiad.cal@gmail.com",
    },
    {
      city: "Bhubaneswar",
      address:
        "Flat # 206, Second Floor, Block A\nBharati Tower, Forest Park\n(Near Airport Chowk)\nBhubaneswar 751 009",
      phone: "+91 674 2235 4462",
      email: "confiadbbr@gmail.com",
    },
    {
      city: "New Delhi",
      address: "Third Floor, E6 Kalkaji\nNew Delhi 110 019",
      phone: "+91 11 2621 3600, 2621 3636",
      fax: "+91 11 2621 3700",
      email: "confiad@gmail.com",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ContactBg}
          className="h-full w-full object-cover"
          alt="Contact Background"
        />
      </div>

      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-gray-500 font-semibold mb-12 text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {locations.map((location, index) => (
              <ContactLocation key={index} {...location} index={index} />
            ))}
          </div>

          <div
            className="mt-12 text-center text-gray-600 italic text-lg"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            Reach out to us at any of our offices
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
