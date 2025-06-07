import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Info from "./pages/UndergroundWater";
import Subsidence from "./pages/Subsidence";
import Knowledge from "./pages/Knowledge";
import Source from "./pages/Source";

import NavBar from "./components/NavBar";
// 預設空頁面作為占位
const Dummy = ({ text }: { text: string }) => <div className="p-6 text-xl">{text}</div>;

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/UndergroundWater" element={<Info />} />
        <Route path="/subsidence" element={<Subsidence />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/source" element={<Source />} />
      </Routes>
    </Router>
  );
}

export default App;