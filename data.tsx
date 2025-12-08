// data.ts
import { SignData, Category, LanguageOption } from "./types";

// --------------------------------------
// 语言选项
// --------------------------------------
export const languageOptions: LanguageOption[] = [
  { code: "ko", name: "한국어", label: "한" },
  { code: "en", name: "English", label: "EN" },
  { code: "jp", name: "日本語", label: "日" },
  { code: "zh", name: "中文", label: "中" }
];

// --------------------------------------
// 禁止标志
// --------------------------------------
export const prohibitionSigns: SignData[] = [
  {
    icon: "/no-smoking.png.png",
    char: "금연",
    name: "No Smoking",
    ko: "금연",
    en: "No Smoking",
    jp: "禁煙",
    zh: "禁止吸烟"
  },
  {
    icon: "/no-touch.png.png",
    char: "손대지 마시오",
    name: "Do Not Touch",
    ko: "만지지 마시오",
    en: "Do Not Touch",
    jp: "触らないでください",
    zh: "禁止接触"
  },
  {
    icon: "/no-leaning.png.png",
    char: "기대지 마시오",
    name: "No Leaning",
    ko: "기대지 마시오",
    en: "No Leaning",
    jp: "寄りかかり禁止",
    zh: "禁止倚靠"
  },
  {
    icon: "/no-pushing.png.png",
    char: "밀지 마시오",
    name: "No Pushing",
    ko: "밀지 마시오",
    en: "No Pushing",
    jp: "押さないでください",
    zh: "禁止推挤"
  },
  {
    icon: "/no-climbing.png.png",
    char: "올라가지 마시오",
    name: "No Climbing",
    ko: "올라가지 마시오",
    en: "No Climbing",
    jp: "登らないでください",
    zh: "禁止攀爬"
  }
];

// --------------------------------------
// 警告标志
// --------------------------------------
export const warningSigns: SignData[] = [
  {
    icon: "/warning-head-injury.png.png",
    char: "머리 조심",
    name: "Watch Your Head",
    ko: "머리 조심",
    en: "Watch Your Head",
    jp: "頭上注意",
    zh: "当心碰头"
  },
  {
    icon: "/warning-slippery.png.png",
    char: "미끄럼 주의",
    name: "Slippery",
    ko: "미끄럼 주의",
    en: "Slippery Surface",
    jp: "滑り注意",
    zh: "小心地滑"
  },
  {
    icon: "/warning-step-hazard.png.png",
    char: "문지방 조심",
    name: "Step Hazard",
    ko: "문지방 조심",
    en: "Step Hazard",
    jp: "段差注意",
    zh: "当心台阶"
  },
  {
    icon: "/warning-trip-hazard.png.png",
    char: "걸림 주의",
    name: "Trip Hazard",
    ko: "걸림 주의",
    en: "Trip Hazard",
    jp: "つまずき注意",
    zh: "绊倒危险"
  }
];

// --------------------------------------
// 信息标志
// --------------------------------------
export const infoSigns: SignData[] = [
  {
    icon: "/info-restroom.png",
    char: "화장실",
    name: "Restroom",
    ko: "화장실",
    en: "Restroom",
    jp: "トイレ",
    zh: "洗手间"
  },
  {
    icon: "/info-exit.png",
    char: "출구",
    name: "Exit",
    ko: "출구",
    en: "Exit",
    jp: "出口",
    zh: "出口"
  }
];

// --------------------------------------
// 分类颜色配置
// --------------------------------------
export const categoryConfig: Record<Category, any> = {
  prohibition: {
    color: {
      bg: "#FF0000",
      border: "#FF0000",
      text: "#000000"
    }
  },
  warning: {
    color: {
      bg: "#F7A600",
      border: "#F7A600",
      text: "#000000"
    }
  },
  information: {
    color: {
      bg: "#0066CC",
      border: "#0066CC",
      text: "#FFFFFF"
    }
  }
};

// --------------------------------------
// 标志生成器设置
// --------------------------------------
export const configOptions = {
  size: ["small", "medium", "large"],
  borderStyle: ["round", "square"],
  direction: ["horizontal", "vertical"]
};

// --------------------------------------
// 导出
// --------------------------------------
export {
  prohibitionSigns,
  warningSigns,
  infoSigns,
  languageOptions,
  categoryConfig,
  configOptions
};
