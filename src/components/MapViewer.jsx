export default function MapViewer() {
  return (
    <div className="w-full h-full">
      {/* Nanti di sini kamu pasang Leaflet atau map lainnya */}
      <iframe src="https://www.openstreetmap.org/export/embed.html" className="w-full h-full" title="map" />
    </div>
  );
}
