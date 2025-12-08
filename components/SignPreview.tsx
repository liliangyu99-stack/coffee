import React from "react";
import { SignData, Config, Category } from "../types";

interface SignPreviewProps {
  category: Category;
  sign: SignData | null;
  config: Config;
}

/* ------ 统一图标尺寸 ------ */
const ICON_SIZE = 120;

const SignPreview: React.FC<SignPreviewProps> = ({ category, sign, config }) => {
  if (!sign) return null;

  /* 分类颜色 */
  const colorSet = {
    prohibition: { bg: "#ffffff", border: "#FF0000", text: "#000000" },
    warning: { bg: "#ffffff", border: "#F7A600", text: "#000000" },
    information: { bg: "#ffffff", border: "#0066CC", text: "#000000" }
  }[category];

  /* 语言切换文本 */
  const getText = () => {
    switch (config.language) {
      case "ko": return sign.ko;
      case "en": return sign.en;
      case "jp": return sign.jp;
      case "zh": return sign.zh;
      default: return sign.ko;
    }
  };

  const layout = config.direction === "horizontal" ? "flex-row" : "flex-col";

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      {/* 标志框 */}
      <div
        className="flex items-center justify-center shadow-xl transition-all"
        style={{
          width: 200,
          height: 200,
          borderRadius: config.borderStyle === "round" ? 16 : 0,
          border: `10px solid ${colorSet.border}`,
          background: colorSet.bg
        }}
      >
        {/* 图标 */}
        <img
          src={sign.icon}
          alt={sign.name}
          style={{
            width: ICON_SIZE,
            height: ICON_SIZE,
            objectFit: "contain"
          }}
        />
      </div>

      {/* 文本部分 */}
      <div className={`flex ${layout} items-center gap-2`}>

        {/* 主语言 */}
        <div
          className="text-xl font-bold"
          style={{ color: colorSet.text }}
        >
          {getText()}
        </div>

        {/* 英文固定显示在下面（如果选择 vertical） */}
        <div
          className="text-sm opacity-70"
          style={{ color: colorSet.text }}
        >
          {sign.en}
        </div>
      </div>
    </div>
  );
};

export default SignPreview;

