export default function Source() {
  return (
    <div className="min-h-screen bg-blue-100 px-10 py-8 space-y-8">
      <div className="bg-white bg-opacity-80 max-w-5xl mx-auto rounded-2xl shadow-xl p-8 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* 圖片區塊 */}
          <div className="flex-1">
            <img
              src='/water_resource_Taiwan/global_water_map.png'
              alt="Streamflow Trends 2021"
              className="rounded-xl shadow-md w-full"
            />
          </div>

          {/* 說明文字區塊 */}
          <div className="flex-1 text-lg text-gray-800 space-y-4">
            <p>· <span className="font-bold">棕色區域：</span>地下水儲量減少，表示抽取量超過自然補注量。</p>
            <p>· <span className="font-bold">藍色區域：</span>地下水儲量增加，可能因降水增加或其他因素。</p>
          </div>
        </div>

        {/* 資料來源網址 */}
        <div className="text-center text-sm text-gray-600 mt-4">
          經濟部水利署 水利資料開放平台：
          <a
            href="https://opendata.wra.gov.tw/ListOpenDataView?type=%E6%B0%B4%E5%88%86%E9%A1%8C%E6%94%BF%E8%88%87%E7%AE%A1%E7%90%86"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://opendata.wra.gov.tw/ListOpenDataView?type=%E6%B0%B4%E5%88%86%E9%A1%8C%E6%94%BF%E8%88%87%E7%AE%A1%E7%90%86
          </a>
        </div>
      </div>
    </div>
  );
}