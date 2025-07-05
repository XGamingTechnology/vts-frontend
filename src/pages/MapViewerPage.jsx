import React from "react";
import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight";
import MapViewer from "../components/MapViewer";

export default function MapViewerPage() {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)]">
      {" "}
      {/* 4rem untuk tinggi Navbar */}
      <div className="w-full md:w-1/4 bg-white border-r overflow-y-auto">
        <SidebarLeft />
      </div>
      <div className="w-full md:w-2/4 bg-gray-100 relative">
        <MapViewer />
      </div>
      <div className="w-full md:w-1/4 bg-white border-l overflow-y-auto">
        <SidebarRight />
      </div>
    </div>
  );
}
