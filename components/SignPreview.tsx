import React from "react";
import { SignData, Category, Config } from "../types";

interface SignPreviewProps {
  category: Category;
  sign: SignData;
  config: Config;
}

const SignPreview: React.FC<SignPreviewProps> = ({ category, sign, config }) => {

  // 显示的图标路径
  const iconPath = sign.icon;

  // 风格颜色
  const colors = {
    prohibition: {
      bg: "#ffffff",
      border: "#d32f2f",
      icon: "#d32f2f",
      text: "#000000"
    },
    warning: {
      bg: "#fff8e1",
      border: "#f9a825",
      icon: "#000000",
      text: "#000000"
    },
    information: {
      bg: "#e3f2fd",
      border: "#1565c0",
      icon: "#1565c0",
      text: "#000000"
    }
  }[category];

  // 用于外框样式
  const borderRadius = config.borderStyle === "round" ? "50%" : "6px";

  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      {/* 外框 */}
      <div
        className="flex items-center justify-center shadow-lg transition-all"
        style={{
          width: config.size === "large" ? 280 : config.size === "medium" ? 220 : 160,
          height: config.size === "large" ? 280 : config.size === "medium" ? 220 : 160,
          backgroundColor: colors.bg,
          border: `14px solid ${colors.border}`,
          borderRadius: borderRadius
        }}
      >
        {/* 图标 */}
        <img
          src={iconPath}
          alt={sign.name}
          className="w-3/4 h-3/4 object-contain pointer-events-none select-none"
        />
      </div>

      {/* 名称文字 */}
      <div className="mt-2 text-center">
        <p className="text-lg font-bold" style={{ color: colors.text }}>
          {sign.ko}
        </p>
        <p className="text-sm opacity-70" style={{ color: colors.text }}>
          {sign.en}
        </p>
      </div>
    </div>
  );
};

export default SignPreview;
