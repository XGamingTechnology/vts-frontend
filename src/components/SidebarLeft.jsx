import React from "react";
import { MapPin } from "lucide-react";

const SidebarLeft = ({ coordinates }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md h-full overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Koordinat</h2>
      <div className="space-y-2">
        {coordinates.map((coord, i) => (
          <div key={i} className="flex items-center text-sm text-gray-700">
            <MapPin className="text-red-500 mr-2" size={16} />
            {coord}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarLeft;
