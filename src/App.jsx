import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainLayout from "./components/MainLayout";

import Home from "./pages/Home";
import MapViewerPage from "./pages/MapViewerPage";
import InputData from "./pages/InputData";
import Database from "./pages/Database";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map-viewer" element={<MapViewerPage />} />
          <Route path="/input-data" element={<InputData />} />
          <Route path="/database" element={<Database />} />
        </Routes>
      </MainLayout>
    </div>
  );
}
