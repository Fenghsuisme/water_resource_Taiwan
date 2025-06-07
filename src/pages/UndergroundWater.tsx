export default function Info() {
  return (
    <div className="min-h-screen bg-blue-100 py-16 px-6 flex justify-center items-start">
      <div className="bg-white bg-opacity-80 max-w-6xl rounded-3xl shadow-xl p-10 flex flex-col md:flex-row gap-8 text-blue-900">
        {/* 圖片區塊 */}
        <div className="md:w-1/2 w-full flex justify-center items-start">
          <img
            src="/underground_water_image.jpg"
            alt="地下水示意圖"
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* 文字內容區塊 */}
        <div className="md:w-1/2 w-full space-y-6">
          <h1 className="text-3xl font-extrabold text-blue-800">為甚麼要管理地下水質</h1>

          <p className="leading-relaxed">
            茶道的有害物質長時間的累積可能造成地下水質永久的惡化，不但影響區域性植物和動物的生長，甚至對人類健康造成一大威脅，包括急性腸道疾病、阿米巴痢疾等。地下水污染的問題通常較地表水污染問題更為複雜，相關治理所需成本也更高。
          </p>

          <p className="leading-relaxed">
            一般常見的地下水污染源包含點源污染（<span className="font-bold">Point sources</span>）與非點源污染（<span className="font-bold">Non-point sources</span>）兩大類。點源污染指有害物質由一明確地點進入含水層，包含如家庭生活汙水、廢棄物處置設施、工廠排放與管線滲漏、化糞池、違法儲油槽等等，較容易進行人為監控與管理。
          </p>

          <p className="leading-relaxed">
            而相對的，非點源污染則意指有害物質並非由單一明確的地點進入地下含水層所造成的污染，例如農業、畜牧與磚場關廠等所產生之廢水，受到降雨淋洗之影響進入地下含水層，因此較不易完整監控與管理。
          </p>

          <p className="leading-relaxed">
            國內最受矚目的地下水污染案例之一是美國無線電公司（<span className="font-bold">Radio Corporation of America，簡稱RCA</span>）桃園總廠在1994年被發現長期挖井不當傾倒有毒有機廢溶劑，導致廠址周邊土壤與地下水受到包括三氯乙烯（TCE）、四氯乙烯（PCE）等含氯化合物之污染，並引發當地長期使用地下水的居民與廠區員工許多健康風險之疑慮。
          </p>
        </div>
      </div>
    </div>
  );
}