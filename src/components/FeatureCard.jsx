import React from "react";

const FeatureCard = ({ icon: Icon, title, desc }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition duration-300">
      <div className="flex items-center mb-4">
        <Icon size={32} className="text-primary mr-3" />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
};

export default FeatureCard;
