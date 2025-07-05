import React from "react";
import { Pin } from "lucide-react";

const SidebarRight = ({ locations }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md h-full overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Info Lokasi</h2>
      <div className="space-y-2">
        {locations.map((loc, i) => (
          <div key={i} className="flex items-center text-sm text-gray-700">
            <Pin className="text-green-500 mr-2" size={16} />
            {loc}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarRight;
