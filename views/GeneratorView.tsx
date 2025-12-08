import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { languageOptions, prohibitionSigns, warningSigns, infoSigns } from "../data";
import { Category, SignData, Config } from "../types";
import SignPreview from "../components/SignPreview";

const GeneratorView: React.FC = () => {
  const [category, setCategory] = useState<Category>("prohibition");
  const [sign, setSign] = useState<SignData | null>(prohibitionSigns[0]);

  const [config, setConfig] = useState<Config>({
    size: "medium",
    borderStyle: "round",
    direction: "vertical",
    language: "ko"
  });

  /* 分类对应的图标数组 */
  const getSignsByCategory = () => {
    switch (category) {
      case "warning": return warningSigns;
      case "information": return infoSigns;
      default: return prohibitionSigns;
    }
  };

  /* 切换分类自动重设图标 */
  const changeCategory = (c: Category) => {
    setCategory(c);
    const list = c === "warning" ? warningSigns : c === "information" ? infoSigns : prohibitionSigns;
    setSign(list[0]);
  };

  return (
    <div className="flex h-screen">
      
      {/* 左侧菜单 */}
      <div className="w-64 border-r p-4 flex flex-col gap-6">

        {/* 返回 */}
        <a href="/cafe" className="flex items-center gap-2 text-gray-600 hover:text-black">
          <ArrowLeft size={18} />
          Home
        </a>

        {/* 语言选择 */}
        <div>
          <div className="font-bold text-gray-600 mb-2">메인 언어</div>
          <div className="grid grid-cols-2 gap-2">
            {languageOptions.map((lng) => (
              <button
                key={lng.code}
                onClick={() => setConfig({ ...config, language: lng.code })}
                className={`px-3 py-1 rounded-lg border text-sm transition ${
                  config.language === lng.code
                    ? "bg-black text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {lng.name}
              </button>
            ))}
          </div>
        </div>

        {/* 分类（可选） */}
        <div>
          <div className="font-bold text-gray-600 mb-2">카테고리</div>
          <div className="flex gap-2">
            <button onClick={() => changeCategory("prohibition")} className={`px-3 py-1 rounded-lg border ${category === "prohibition" ? "bg-red-100 border-red-500" : ""}`}>금지</button>
            <button onClick={() => changeCategory("warning")} className={`px-3 py-1 rounded-lg border ${category === "warning" ? "bg-yellow-100 border-yellow-500" : ""}`}>주의</button>
            <button onClick={() => changeCategory("information")} className={`px-3 py-1 rounded-lg border ${category === "information" ? "bg-blue-100 border-blue-500" : ""}`}>안내</button>
          </div>
        </div>

        {/* 图标选择区 */}
        <div>
          <div className="font-bold text-gray-600 mb-2">아이콘 선택</div>

          <div className="grid grid-cols-3 gap-3">
            {getSignsByCategory().map((item) => (
              <button
                key={item.icon}
                onClick={() => setSign(item)}
                className={`w-24 h-24 flex flex-col items-center justify-center rounded-xl border text-center transition-all
                  ${sign?.icon === item.icon ? "border-black shadow-lg" : "border-gray-300"}
                `}
              >
                <img
                  src={item.icon}
                  style={{ width: 40, height: 40, objectFit: "contain" }}
                />
                <div className="text-xs mt-1 leading-tight">{item.char}</div>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* 右侧预览区 */}
      <div className="flex-1 flex justify-center items-center">
        <SignPreview category={category} sign={sign} config={config} />
      </div>

    </div>
  );
};

export default GeneratorView;
