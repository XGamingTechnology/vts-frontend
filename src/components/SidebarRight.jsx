import { Pin } from "lucide-react";

const dummySTA = ["STA-001", "STA-034", "STA-012", "STA-001", "STA-001", "STA-001", "STA-001", "STA-001"];

export default function SidebarRight() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Data STA</h2>
      <img src="/thumbnail.png" alt="Thumbnail" className="w-full h-32 object-cover rounded mb-4" />
      <div className="space-y-2">
        {dummySTA.map((sta, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 hover:bg-green-100 px-2 py-1 rounded cursor-pointer">
            <Pin className="text-green-500" size={16} />
            <span>{sta}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
