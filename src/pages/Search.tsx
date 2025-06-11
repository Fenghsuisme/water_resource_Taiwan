import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import CitySelect from "../components/CitySelect";
import { locations } from "../data/locations";
import { subsidenceByUnit } from "../data/subsidenceByUnit";
import groundwaterDataRaw from "../data/整合地下水資料.json";

const groundwaterDataTyped: GroundwaterEntry[] = Object.values(groundwaterDataRaw).map((item: any) => ({
  WellIdentifier: item.WellIdentifier || "",
  Name: item.Name || item.name || "",
  GovernmentUnitIdentifier: item.GovernmentUnitIdentifier || "",
  RecordTime: item.RecordTime || "",
  地下水位: item.地下水位 || "",
  鐵含量: item.鐵含量 ? `${item.鐵含量} mg/L` : "",
  錳含量: item.錳含量 ? `${item.錳含量} mg/L` : "",
  砷含量: item.砷含量 ? `${item.砷含量} mg/L` : "",
  地下水導電度: item.地下水導電度 ? `${item.地下水導電度} μS/cm` : "",
  是否為地層下陷區: item.是否為地層下陷區 || "",
  地層下陷歷年最大累積下陷量: item.地層下陷歷年最大累積下陷量 || "",
}));

// 紅色大頭針圖示
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

type GroundwaterEntry = {
  WellIdentifier: string;
  Name: string;
  GovernmentUnitIdentifier: string;
  RecordTime: string;
  地下水位: string;
  鐵含量: string;
  錳含量: string;
  砷含量: string;
  地下水導電度: string;
  是否為地層下陷區: string;
  地層下陷歷年最大累積下陷量: string;
};

export default function Search() {
  const [selectedName, setSelectedName] = useState<string>("");
  const [selected, setSelected] = useState<GroundwaterEntry | null>(null);

  const uniqueNames: string[] = Array.from(
    new Set(groundwaterDataTyped.map((e) => e.Name.trim()))
  );

  const handleSearch = () => {
    const entries = groundwaterDataTyped.filter(
      (e) => e.Name.trim() === selectedName
    );
    if (entries.length === 0) {
      setSelected(null);
      return;
    }
    const latest = entries.reduce((a, b) =>
      new Date(a.RecordTime) > new Date(b.RecordTime) ? a : b
    );
    const fallback = subsidenceByUnit[latest.GovernmentUnitIdentifier];
    setSelected({
      ...latest,
      是否為地層下陷區: latest.是否為地層下陷區 || (fallback?.isSubsidenceZone ? "是" : "否"),
      地層下陷歷年最大累積下陷量:
        latest.地層下陷歷年最大累積下陷量 || (fallback?.isSubsidenceZone ? fallback.maxAccumulatedSubsidence || "—" : "—"),
    });
  };

  return (
    <div className="h-screen overflow-hidden flex bg-blue-100">
      {/* 地圖區塊 */}
      <div className="w-[48%] h-[90vh] ml-4 mt-4 rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={[23.7, 121]}
          zoom={8}
          scrollWheelZoom={false}
          className="h-full w-full z-0 rounded-xl"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {selected &&
            locations[selected.GovernmentUnitIdentifier] && (
              <Marker
                position={[
                  locations[selected.GovernmentUnitIdentifier].lat,
                  locations[selected.GovernmentUnitIdentifier].lng,
                ]}
                icon={redIcon}
              />
            )}
        </MapContainer>
      </div>

      {/* 查詢欄位與資料顯示區塊 */}
      <div className="w-[52%] p-6 pr-12 mt-4 flex flex-col">
        {/* 包裹搜尋欄與結果區塊，背景與 navbar 一致 */}
        <div className="bg-blue-200/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl space-y-6">
          {/* 下拉選單 */}
          <div className="flex items-center gap-4">
            <CitySelect
              options={uniqueNames}
              selectedOption={selectedName}
              setSelectedOption={setSelectedName}
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              搜尋
            </button>
          </div>

          {/* 顯示查詢結果（整卡片包裹） */}
          <div className="bg-blue-400 rounded-2xl p-6 text-white text-lg space-y-3 shadow-md">
            {Object.entries({
              地區: selected?.Name || "—",
              地下水位: selected?.地下水位 || "—",
              鐵含量: selected?.鐵含量 || "—",
              錳含量: selected?.錳含量 || "—",
              砷含量: selected?.砷含量 || "—",
              地下水導電度: selected?.地下水導電度 || "—",
              是否為地層下陷區: selected?.是否為地層下陷區 || "—",
              地層下陷歷年最大累積下陷量: selected?.地層下陷歷年最大累積下陷量 || "—",
            }).map(([key, value]) => (
              <div
                key={key}
                className="flex items-start gap-2 leading-relaxed"
              >
                <span className="text-xl">•</span>
                <span>
                  {key}：{value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}