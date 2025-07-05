import React from "react";
import { MapPinned, BarChart, Globe, ShieldCheck } from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import WebGISImage from "../assets/webgis-illustration.png";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-primary to-secondary text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-6">
            <MapPinned size={64} className="text-white drop-shadow-lg animate-bounce" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-sm">
            Selamat Datang di <span className="text-yellow-300">Vision Traffic Suite</span>
          </h1>
          <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">Platform WebGIS modern untuk memvisualisasikan, memantau, dan menganalisis lalu lintas berbasis spasial secara real-time.</p>
          <a href="/map-viewer" className="inline-block bg-white text-primary font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-200 transition duration-300">
            🚀 Mulai Eksplorasi
          </a>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <img src={WebGISImage} alt="Ilustrasi WebGIS" className="w-full max-w-md mx-auto rounded-xl shadow-xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Kenapa Memilih Vision Traffic Suite?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={BarChart} title="Analitik Lalu Lintas" desc="Pantau kepadatan, kecepatan, dan tren lalu lintas secara real-time." />
          <FeatureCard icon={Globe} title="Pemetaan Interaktif" desc="Integrasi data spasial yang interaktif untuk keputusan berbasis lokasi." />
          <FeatureCard icon={ShieldCheck} title="Keamanan Data" desc="Lindungi data dan akses sistem dengan autentikasi yang kuat." />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center text-sm text-gray-500 py-6 border-t">&copy; {new Date().getFullYear()} Vision Traffic Suite — All rights reserved.</footer>
    </div>
  );
};

export default Home;
