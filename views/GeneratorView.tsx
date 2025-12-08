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

  /* 当前分类的图标列表 */
  const getSignsByCategory = () => {
    switch (category) {
      case "warning": return warningSigns;
      case "information": return infoSigns;
      default: return prohibitionSigns;
    }
  };

  /* 切换分类自动切换第一个图标 */
  const changeCategory = (c: Category) => {
    setCategory(c);
    const list = c === "warning" ? warningSigns : c === "information" ? infoSigns : prohibitionSigns;
    setSign(list[0]);
  };

  return (
    <div className="flex h-screen">
      {/* 左侧菜单 */}
      <div className="w-64 border-r p-4 flex flex-col gap-6">

        {/* 返回按钮 */}
        <a href="/cafe" className="flex items-center gap-2 text-gray-600 hover:text-black">
          <ArrowLeft size={18} />
          Home
        </a>

        {/* 语言选择 */}
        <div>
          <div className="font-bold text-gray-600 mb-2">메인 언어</div>
          <div className="flex flex-wrap gap-2">
            {languageOptions.map((lng) => (
              <button
                key={lng.code}
                onClick={() => setConfig({ ...config, language: lng.code })}
                className={`px-3 py-1 rounded-lg border transition ${
                  config.language === lng.code ? "bg-black text-white" : "bg-white"
                }`}
              >
                {lng.name}
              </button>
            ))}
          </div>
        </div>

        {/* 图标选择区 */}
        <div>
          <div className="font-bold text-gray-600 mb-2">아이콘 선택</div>
          <div className="grid grid-cols-3 gap-2">
            {getSignsByCategory().map((item) => (
              <button
                key={item.icon}
                onClick={() => setSign(item)}
                className={`border rounded-lg p-2 text-center transition ${
                  sign?.icon === item.icon ? "border-black shadow" : "border-gray-300"
                }`}
              >
                <img
                  src={item.icon}
                  style={{ width: 50, height: 50, objectFit: "contain" }}
                />
                <div className="text-xs mt-1">{item.char}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 右侧主画面 */}
      <div className="flex-1 flex justify-center items-center">
        <SignPreview category={category} sign={sign} config={config} />
      </div>
    </div>
  );
};

export default GeneratorView;
