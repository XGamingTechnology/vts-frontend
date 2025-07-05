import React from "react";
import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight";
import MapViewer from "../components/MapViewer";

const MapViewerPage = () => {
  const coordinates = ["-1.4356, 98.6162", "-4.3892, 103.6521", "-6.4352, 108.2736"];
  const locations = ["STA-001", "STA-034", "STA-012"];

  return (
    <div className="grid grid-cols-12 gap-4 p-4 bg-gradient-to-br from-green-100 to-teal-50 min-h-screen">
      <div className="col-span-2">
        <SidebarLeft coordinates={coordinates} />
      </div>
      <div className="col-span-7">
        <MapViewer />
      </div>
      <div className="col-span-3">
        <SidebarRight locations={locations} />
      </div>
    </div>
  );
};

export default MapViewerPage;
