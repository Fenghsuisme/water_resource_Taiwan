export default function Knowledge() {
  return (
    <div className="min-h-screen bg-blue-100 py-16 px-6 flex justify-center items-start">
      <div className="bg-white bg-opacity-80 max-w-6xl rounded-3xl shadow-xl p-10 flex flex-col md:flex-row gap-8 text-blue-900">
        {/* 圖片區塊 */}
        <div className="md:w-1/2 w-full flex justify-center items-start">
          <img
            src="/water_resource_Taiwan/WK_Pedia_17.jpg"
            alt="地下水污染來源示意圖"
            className="rounded-xl shadow-md w-full h-auto max-w-md object-contain"
          />
        </div>

        {/* 文字內容區塊 */}
        <div className="md:w-1/2 w-full space-y-6">
          <h1 className="text-3xl font-extrabold text-blue-800">水資源小知識</h1>

          <h2 className="text-xl font-bold text-blue-700">地下水來源：</h2>
          <p className="leading-relaxed">
            天空中的降雨與地面河流的滲流入滲是地下水來源的基礎。更正確的說法則是因為自然界中生生不息的水文循環作用，地面的水受日曬而化為水蒸氣上升於空氣中，遇到冷以雨水、冰雹等形式下降存於地面，遇熱後再上升。太陽不停的供給能量水的活動因而循環不息，因入滲、重力等作用而進入儲存於地下的水分，就是地下水的水源。
          </p>

          <h2 className="text-xl font-bold text-blue-700">我們能做的保護地下水方法：</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>地層下陷根本是不可逆的阿</li>
            <li>解決方法灌水回地下水</li>
            <li>水質污染需管制回流之地下水水質</li>
            <li>如需使用先抽出地下水後過濾</li>
          </ul>
        </div>
      </div>
    </div>
  );
}