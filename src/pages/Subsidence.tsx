export default function Subsidence() {
  return (
    <div className="min-h-screen bg-blue-100 py-16 px-6 flex justify-center items-start">
      <div className="bg-white bg-opacity-80 max-w-6xl rounded-3xl shadow-xl p-10 flex flex-col md:flex-row gap-8 text-blue-900">
        {/* 圖片區塊 */}
        <div className="md:w-1/2 w-full flex justify-center items-start">
          <img
            src="/water_resource_Taiwan/798928.jpg"
            alt="地層下陷示意圖"
            className="rounded-xl shadow-md w-full h-auto max-w-md object-contain"
          />
        </div>

        {/* 文字內容區塊 */}
        <div className="md:w-1/2 w-full space-y-6">
          <h1 className="text-3xl font-extrabold text-blue-800">地層下陷</h1>
          <ol className="list-decimal list-inside space-y-3 leading-relaxed">
            <li>地層內部壓縮導致地下水蓄存空間變少。</li>
            <li>地勢低窪易生洪汙溢淹。</li>
            <li>建築物、工程結構與公共管線設施損壞。</li>
            <li>土壤鹽化、積水不退導致環境生態轉變。</li>
            <li>海水侵入地下含水層使土壤鹽化，農作物無法種植。</li>
          </ol>
        </div>
      </div>
    </div>
  );
}