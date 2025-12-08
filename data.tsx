import { LanguageOption, CategoryOf } from "./types";

// 多语言（如需新增，可以继续加）
export const languageOptions: LanguageOption[] = [
  { code: "ko", name: "한국어", label: "한" },
  { code: "zh", name: "中文", label: "中" },
  { code: "en", name: "English", label: "EN" },
];

// ----------------------
// 禁止类标志（红圈）
// ----------------------
export const prohibitionSigns = [
  {
    id: "no-climbing",
    char: "출입 금지",
    name: "No Climbing",
    ko: "매달리기 금지",
    zh: "禁止攀爬"
  },
  {
    id: "no-leaning",
    char: "기대지 마시오",
    name: "No Leaning",
    ko: "기대지 마시오",
    zh: "禁止倚靠"
  },
  {
    id: "no-pushing",
    char: "밀지 마시오",
    name: "No Pushing",
    ko: "미십시오",
    zh: "禁止推动"
  },
  {
    id: "no-smoking",
    char: "금연",
    name: "No Smoking",
    ko: "금연",
    zh: "禁止吸烟"
  },
  {
    id: "no-touch",
    char: "손대지 마시오",
    name: "Do Not Touch",
    ko: "손대지 마시오",
    zh: "请勿触摸"
  },
];

// ----------------------
// 警告类标志（黄色三角）
// ----------------------
export const warningSigns = [
  {
    id: "warning-head-injury",
    char: "머리 조심",
    name: "Head Injury Hazard",
    ko: "머리 조심",
    zh: "当心碰头"
  },
  {
    id: "warning-slippery",
    char: "미끄럼 주의",
    name: "Slippery Floor",
    ko: "미끄럼 주의",
    zh: "小心地滑"
  },
  {
    id: "warning-step-hazard",
    char: "계단 주의",
    name: "Step Hazard",
    ko: "계단 주의",
    zh: "小心台阶"
  },
  {
    id: "warning-trip-hazard",
    char: "걸림 주의",
    name: "Trip Hazard",
    ko: "걸림 주의",
    zh: "当心绊倒"
  },
];

// ----------------------
// 分类
// ----------------------
export const categories: CategoryOf[] = [
  { id: "prohibition", name: "금지 / 禁止", signs: prohibitionSigns },
  { id: "warning", name: "경고 / 警告", signs: warningSigns },
];
