// data.ts
import { SignData, Category, LanguageOption } from "./types";

/* -------------------- 语言选项 -------------------- */
export const languageOptions: LanguageOption[] = [
  { code: "ko", name: "한국어", label: "한" },
  { code: "en", name: "English", label: "EN" },
  { code: "ja", name: "日本語", label: "日" }, // ★ 修改 jp → ja
  { code: "zh", name: "中文", label: "中" }
];

/* -------------------- 禁止标志 -------------------- */
export const prohibitionSigns: SignData[] = [
  {
    icon: "/no-smoking.png",
    char: "금연",
    name: "No Smoking",
    ko: "금연",
    en: "No Smoking",
    ja: "禁煙",        // ★ 修改 jp → ja
    zh: "禁止吸烟"
  },
  {
    icon: "/no-touch.png",
    char: "손대지 마시오",
    name: "Do Not Touch",
    ko: "만지지 마시오",
    en: "Do Not Touch",
    ja: "触らないでください", // ★
    zh: "禁止接触"
  },
  {
    icon: "/no-leaning.png",
    char: "기대지 마시오",
    name: "No Leaning",
    ko: "기대지 마시오",
    en: "No Leaning",
    ja: "寄りかかり禁止", // ★
    zh: "禁止倚靠"
  },
  {
    icon: "/no-pushing.png",
    char: "밀지 마시오",
    name: "No Pushing",
    ko: "밀지 마시오",
    en: "No Pushing",
    ja: "押さないでください", // ★
    zh: "禁止推挤"
  },
  {
    icon: "/no-climbing.png",
    char: "올라가지 마시오",
    name: "No Climbing",
    ko: "올라가지 마시오",
    en: "No Climbing",
    ja: "登らないでください", // ★
    zh: "禁止攀爬"
  }
];

/* -------------------- 警告标志 -------------------- */
export const warningSigns: SignData[] = [
  {
    icon: "/warning-head-injury.png",
    char: "머리 조심",
    name: "Watch Your Head",
    ko: "머리 조심",
    en: "Watch Your Head",
    ja: "頭上注意", // ★
    zh: "当心碰头"
  },
  {
    icon: "/warning-slippery.png",
    char: "미끄럼 주의",
    name: "Slippery",
    ko: "미끄럼 주의",
    en: "Slippery Surface",
    ja: "滑り注意", // ★
    zh: "小心地滑"
  },
  {
    icon: "/warning-step-hazard.png",
    char: "문지방 조심",
    name: "Step Hazard",
    ko: "문지방 조심",
    en: "Step Hazard",
    ja: "段差注意", // ★
    zh: "当心台阶"
  },
  {
    icon: "/warning-trip-hazard.png",
    char: "걸림 주의",
    name: "Trip Hazard",
    ko: "걸림 주의",
    en: "Trip Hazard",
    ja: "つまずき注意", // ★
    zh: "绊倒危险"
  }
];

/* -------------------- 信息标志 -------------------- */
export const infoSigns: SignData[] = [
  {
    icon: "/info-restroom.png",
    char: "화장실",
    name: "Restroom",
    ko: "화장실",
    en: "Restroom",
    ja: "トイレ", // ★
    zh: "洗手间"
  },
  {
    icon: "/info-exit.png",
    char: "출구",
    name: "Exit",
    ko: "출구",
    en: "Exit",
    ja: "出口", // ★
    zh: "出口"
  }
];
