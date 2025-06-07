import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (isHome) return null;

  const links = [
    { to: "/search", label: "地層下陷查詢" },
    { to: "/UndergroundWater", label: "管理地下水質" },
    { to: "/subsidence", label: "地層下陷" },
    { to: "/knowledge", label: "水資源小知識" },
    { to: "/source", label: "台灣與世界" },
  ];

  return (
    <nav className="bg-blue-200/70 backdrop-blur-lg shadow-xl px-6 py-4 mx-auto mt-4 mb-6 rounded-2xl max-w-6xl flex justify-center space-x-10 border border-blue-300/40">
      {links.map((link) => (
        <div key={link.to} className="group relative">
          <Link
            to={link.to}
            className="text-blue-900 font-semibold tracking-wide transition-all duration-300 hover:text-yellow-500"
          >
            {link.label}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;