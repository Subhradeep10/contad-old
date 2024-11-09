import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ClientBackground from "../assets/imagescontadnew/Clients.png";

const Clients = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const clientGroups = {
    "Government & Public Sector": [
      "Damodar Valley Corporation",
      "Food Corporation of India",
      "Government of West Bengal",
      "Panchayat & Rural Development",
      "Public Health Engineering",
      "Transport",
      "IPICOL",
      "Kolkata Metropolitan Development Authority",
      "Kolkata Municipal Corporation",
      "NHPC Limited",
      "NTPC Limited",
      "National Highways Authority of India",
    ],
    "Oil & Energy": [
      "Indian Oil Corporation Limited",
      "Marketing Division, ER",
      "Haldia Refinery",
      "Paradip Refinery",
      "IndianOil Petronas Private Limited",
    ],
    "Industrial & Others": [
      "DP Ahuja & Company",
      "IMFA Limited",
      "Paradip Port Trust",
      "S&B Services",
      "Steel Authority of India Limited",
      "UNICEF, Odisha",
    ],
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Vignette */}
      <div className="absolute inset-0">
        <img
          src={ClientBackground}
          className="h-full w-full object-cover"
          alt="Clients Background"
          data-aos="fade-in"
          data-aos-duration="1500"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen container mx-auto px-4 md:px-8 lg:px-12 py-12">
        {/* Header */}
        <div
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-500 font-semibold">
            Our Clients
          </h1>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {Object.entries(clientGroups).map(
            ([category, clients], groupIndex) => (
              <div
                key={category}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg"
                data-aos="zoom-in-up"
                data-aos-delay={500 + groupIndex * 200}
              >
                <h2
                  className="text-xl md:text-2xl font-semibold text-red-500 mb-4"
                  data-aos="fade-right"
                  data-aos-delay={700 + groupIndex * 200}
                >
                  {category}
                </h2>
                <div className="space-y-2">
                  {clients.map((client, index) => (
                    <div
                      key={index}
                      className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200"
                      data-aos="fade-left"
                      data-aos-delay={900 + groupIndex * 200 + index * 50}
                    >
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* Footer Note */}
        <div
          className="mt-12 text-center text-gray-600 text-lg italic"
          data-aos="fade-up"
          data-aos-delay="1500"
        >
          Trusted by industry leaders across sectors
        </div>
      </div>
    </div>
  );
};

export default Clients;
