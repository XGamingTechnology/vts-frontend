import { NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";

const navItems = [
  { label: "Beranda", to: "/" },
  { label: "Map Viewer", to: "/map-viewer" },
  { label: "Input Data", to: "/input-data" },
  { label: "Database", to: "/database" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <h1 className="text-lg font-semibold tracking-wide text-primary">VISION TRAFFIC SUITE</h1>
        <nav className="hidden gap-6 md:flex">
          {navItems.map(({ label, to }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `text-sm font-medium ${isActive ? "text-primary" : "text-gray-600 hover:text-primary"}`}>
              {label}
            </NavLink>
          ))}
        </nav>
        <button className="inline-flex items-center rounded-md p-2 md:hidden hover:bg-gray-100">
          <Bars3Icon className="h-6 w-6 text-primary" />
        </button>
      </div>
    </header>
  );
}
