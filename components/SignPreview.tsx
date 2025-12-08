import React from "react";

interface SignPreviewProps {
  category: string;
  sign: any;
  config: any;
}

const SignPreview: React.FC<SignPreviewProps> = ({ category, sign }) => {
  
  // 图片路径自动指向 public/{id}.png
  const imgSrc = `/${sign.id}.png`;

  // 根据分类决定背景形状颜色
  const isWarning = category === "warning";

  return (
    <div
      className="flex flex-col items-center justify-center shadow-lg rounded-xl p-4 bg-white"
      style={{
        width: "260px",
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: "180px",
          height: "180px",
        }}
      >
        <img
          src={imgSrc}
          alt={sign.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="mt-2 text-center">
        <p className="text-lg font-bold">{sign.char}</p>
        <p className="text-sm opacity-70">{sign.name}</p>
      </div>
    </div>
  );
};

export default SignPreview;
