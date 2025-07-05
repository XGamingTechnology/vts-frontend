import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">VISION TRAFFIC SUITE</h1>
      <div className="flex gap-6">
        <a href="/" className="text-primary hover:underline">
          Beranda
        </a>
        <a href="/map-viewer" className="text-primary hover:underline">
          Map Viewer
        </a>
        <a href="/input-data" className="text-primary hover:underline">
          Input Data
        </a>
        <a href="/database" className="text-primary hover:underline">
          Database
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
