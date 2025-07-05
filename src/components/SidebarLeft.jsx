import { MapPin } from "lucide-react";

const dummyCoords = ["-1.4356", "-4.3892", "-6.4352", "-3.9028", "-1.2398", "-5.0435", "-8.9028", "-1.6372", "-5.1293", "-4.2849"];

export default function SidebarLeft() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Koordinat Lokasi</h2>
      <div className="space-y-2">
        {dummyCoords.map((coord, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 hover:bg-green-100 px-2 py-1 rounded cursor-pointer">
            <MapPin className="text-red-500" size={16} />
            <span>{coord}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
