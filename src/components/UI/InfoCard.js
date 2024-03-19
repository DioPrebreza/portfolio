import React from "react";

const InfoCard = ({ title, description }) => {
  return (
    <div className="bg-gray-200 rounded-xl mb-4 mr-4 self-start grow">
      <p class=" mb-4 pt-2 pl-4">{title}</p>
      <p class=" pb-2 pt-2 pl-4 mr-4">{description}</p>
    </div>
  );
};

export default InfoCard;
