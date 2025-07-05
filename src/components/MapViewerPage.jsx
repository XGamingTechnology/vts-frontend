import SidebarLeft from "../components/SidebarLeft";
import MapViewer from "../components/MapViewer";
import SidebarRight from "../components/SidebarRight";

export default function MapViewerPage() {
  return (
    <div className="flex h-[calc(100vh_-_64px)] w-full overflow-hidden bg-white">
      <SidebarLeft />
      <MapViewer />
      <SidebarRight />
    </div>
  );
}
