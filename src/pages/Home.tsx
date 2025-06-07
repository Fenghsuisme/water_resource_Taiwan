import { useNavigate } from "react-router-dom";
import "../index.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-br from-blue-200 to-blue-500 flex items-center justify-center relative text-center px-6">
      {/* 右上角漣漪動畫 */}
      <div className="absolute top-24 right-40 w-72 h-72 rounded-full border-4 border-blue-100 animate-ripple z-0"></div>
      <div className="absolute top-24 right-40 w-72 h-72 rounded-full border-4 border-blue-100 animate-ripple2 z-0"></div>
      <div className="absolute top-24 right-40 w-72 h-72 rounded-full border-4 border-blue-100 animate-ripple3 z-0"></div>

      {/* 主要內容 */}
      <div className="z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl">
          永續水資源
        </h1>
        <p className="text-white text-lg md:text-2xl max-w-2xl mt-4 mb-6 drop-shadow-sm">
          守護地下水質，了解地層下陷，實現台灣的智慧水管理
        </p>
        <button
          onClick={() => navigate("/search")}
          className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300"
        >
          開始探索 →
        </button>
      </div>
    </div>
  );
};

export default Home;