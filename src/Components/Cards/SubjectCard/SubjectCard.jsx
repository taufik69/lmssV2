import React from "react";

const SubjectCard = ({ subject }) => {
  return (
    <>
      <div className="w-72 my-2 py-2 flex items-center pl-5 gap-3 border rounded-lg">
        <div className="icon">
          <img
            width="65"
            height="65"
            src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/external-coin-bangladesh-independence-day-flatarticons-blue-flatarticons.png"
            alt="external-coin-bangladesh-independence-day-flatarticons-blue-flatarticons"
          />
        </div>
        <div className="text">
          <h2 className="font-semibold text-lg text-gray-600">
            {subject}
            বাংলা ১ম পত্র
          </h2>
        </div>
      </div>
    </>
  );
};

export default SubjectCard;
