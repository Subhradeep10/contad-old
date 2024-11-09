import React from "react";
import ClientBackground from "../assets/imagescontadnew/Clients.png";

const Clients = () => {
  const clientNames = [
    "Damodar Valley Corporation",
    "DP Ahuja & Company",
    "Food Corporation of India",
    "Government of West Bengal",
    "Panchayat & Rural Development",
    "Public Health Engineering",
    "Transport",
    "IMFA Limited",
    "Indian Oil Corporation Limited",
    "Marketing Division, ER",
    "Haldia Refinery",
    "Paradip Refinery",
    "IndianOil Petronas Private Limited",
    "IPICOL",
    "Kolkata Metropolitan Development Authority",
    "Kolkata Municipal Corporation",
    "NHPC Limited",
    "NTPC Limited",
    "National Highways Authority of India",
    "Paradip Port Trust",
    "S&B Services",
    "Steel Authority of India Limited",
    "UNICEF, Odisha",
  ];
  return (
    <div className="relative text-center h-[110vh] bg-cover flex">
      <img
        src={ClientBackground}
        className="-z-10 h-[110vh] w-[100vw] bg-cover absolute"
        alt=""
      />

      <div className="absolute top-[140px] left-[920px] text-left text-md">
        {clientNames.map((client, index) => (
          <div key={index}>{client}</div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
