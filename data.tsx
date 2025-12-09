// src/data.tsx
import { ReactNode } from "react";
import {
  SignData,
  Category,
  LanguageOption,
  CategoryDef,
  Standard,
} from "./types";

/* -------------------- 语言选项 -------------------- */

export const languageOptions: LanguageOption[] = [
  { code: "ko", name: "한국어", label: "한" },
  { code: "en", name: "English", label: "EN" },
  { code: "ja", name: "日本語", label: "日" },
  { code: "zh", name: "中文", label: "中" },
];

/* -------------------- ISO 7010 标志 -------------------- */

const isoProhibitionSigns: SignData[] = [
  {
    icon: "/no-smoking.png" as unknown as ReactNode,
    char: "금연",
    name: "No Smoking",
    ko: "금연",
    en: "No Smoking",
    ja: "禁煙",
    zh: "禁止吸烟",
  },
  {
    icon: "/no-touch.png" as unknown as ReactNode,
    char: "손대지 마시오",
    name: "Do Not Touch",
    ko: "만지지 마시오",
    en: "Do Not Touch",
    ja: "触らないでください",
    zh: "禁止接触",
  },
  {
    icon: "/no-leaning.png" as unknown as ReactNode,
    char: "기대지 마시오",
    name: "No Leaning",
    ko: "기대지 마시오",
    en: "No Leaning",
    ja: "寄りかかり禁止",
    zh: "禁止倚靠",
  },
  {
    icon: "/no-pushing.png" as unknown as ReactNode,
    char: "밀지 마시오",
    name: "No Pushing",
    ko: "밀지 마시오",
    en: "No Pushing",
    ja: "押さないでください",
    zh: "禁止推挤",
  },
  {
    icon: "/no-climbing.png" as unknown as ReactNode,
    char: "올라가지 마시오",
    name: "No Climbing",
    ko: "올라가지 마시오",
    en: "No Climbing",
    ja: "登らないでください",
    zh: "禁止攀爬",
  },
];

const isoWarningSigns: SignData[] = [
  {
    icon: "/warning-head-injury.png" as unknown as ReactNode,
    char: "머리 조심",
    name: "Watch Your Head",
    ko: "머리 조심",
    en: "Watch Your Head",
    ja: "頭上注意",
    zh: "当心碰头",
  },
  {
    icon: "/warning-slippery.png" as unknown as ReactNode,
    char: "미끄럼 주의",
    name: "Slippery",
    ko: "미끄럼 주의",
    en: "Slippery Surface",
    ja: "滑り注意",
    zh: "小心地滑",
  },
  {
    icon: "/warning-step-hazard.png" as unknown as ReactNode,
    char: "문지방 조심",
    name: "Step Hazard",
    ko: "문지방 조심",
    en: "Step Hazard",
    ja: "段差注意",
    zh: "当心台阶",
  },
  {
    icon: "/warning-trip-hazard.png" as unknown as ReactNode,
    char: "걸림 주의",
    name: "Trip Hazard",
    ko: "걸림 주의",
    en: "Trip Hazard",
    ja: "つまずき注意",
    zh: "绊倒危险",
  },
];

const isoInfoSigns: SignData[] = [
  {
    icon: "/info-restroom.png" as unknown as ReactNode,
    char: "화장실",
    name: "Restroom",
    ko: "화장실",
    en: "Restroom",
    ja: "トイレ",
    zh: "洗手间",
  },
  {
    icon: "/info-exit.png" as unknown as ReactNode,
    char: "출구",
    name: "Exit",
    ko: "출구",
    en: "Exit",
    ja: "出口",
    zh: "出口",
  },
];

/* -------------------- 咖啡店专用标志 -------------------- */
/* 记得把图片放到 public/cafe/ 目录下 */

const cafeProhibitionSigns: SignData[] = [
  {
    icon: "/cafe/sign-01.png" as unknown as ReactNode,
    char: "기대지 마세요",
    name: "Do Not Lean",
    ko: "기대지 마세요",
    en: "Do Not Lean",
    ja: "寄りかからないでください",
    zh: "禁止倚靠",
  },
  {
    icon: "/cafe/sign-02.png" as unknown as ReactNode,
    char: "밀지 마세요",
    name: "Do Not Push",
    ko: "밀지 마세요",
    en: "Do Not Push",
    ja: "押さないでください",
    zh: "禁止推动",
  },
  {
    icon: "/cafe/sign-03.png" as unknown as ReactNode,
    char: "올라가지 마세요",
    name: "No Climbing",
    ko: "올라가지 마세요",
    en: "No Climbing",
    ja: "登らないでください",
    zh: "禁止攀爬",
  },
  {
    icon: "/cafe/sign-04.png" as unknown as ReactNode,
    char: "뛰지 마세요",
    name: "No Running",
    ko: "뛰지 마세요",
    en: "No Running",
    ja: "走らないでください",
    zh: "禁止奔跑",
  },
];

const cafeWarningSigns: SignData[] = [
  {
    icon: "/cafe/sign-05.png" as unknown as ReactNode,
    char: "미끄럼 주의",
    name: "Slippery",
    ko: "미끄럼 주의",
    en: "Slippery",
    ja: "滑り注意",
    zh: "小心地滑",
  },
  {
    icon: "/cafe/sign-06.png" as unknown as ReactNode,
    char: "걸림 주의",
    name: "Trip Hazard",
    ko: "걸림 주의",
    en: "Trip Hazard",
    ja: "つまずき注意",
    zh: "当心绊倒",
  },
  {
    icon: "/cafe/sign-07.png" as unknown as ReactNode,
    char: "추락 주의",
    name: "Fall Hazard",
    ko: "추락 주의",
    en: "Fall Hazard",
    ja: "転落注意",
    zh: "当心坠落",
  },
  {
    icon: "/cafe/sign-08.png" as unknown as ReactNode,
    char: "문 조심",
    name: "Watch Glass Door",
    ko: "문 조심",
    en: "Watch Glass Door",
    ja: "ガラス扉注意",
    zh: "当心玻璃门",
  },
];

const cafeInfoSigns: SignData[] = []; // 现在没有咖啡 INFO，可以以后再加

/* -------------------- 分类定义（用于选择界面） -------------------- */

export const categoryDefs: CategoryDef[] = [
  {
    id: "prohibition",
    name: "금지",
    sub: "위험 행동을 금지하는 표지",
    color: "#ef4444",
    border: "#fecaca",
    text: "#111827",
    icon: "🚫" as ReactNode,
  },
  {
    id: "warning",
    name: "주의",
    sub: "주의가 필요한 위험 상황",
    color: "#f59e0b",
    border: "#fde68a",
    text: "#111827",
    icon: "⚠️" as ReactNode,
  },
  {
    id: "information",
    name: "안내",
    sub: "위치 / 이동 안내 표지",
    color: "#3b82f6",
    border: "#bfdbfe",
    text: "#111827",
    icon: "ℹ️" as ReactNode,
  },
];

/* -------------------- 根据标准 + 分类取出对应标志 -------------------- */

const isoByCategory: Record<Category, SignData[]> = {
  prohibition: isoProhibitionSigns,
  warning: isoWarningSigns,
  information: isoInfoSigns,
};

const cafeByCategory: Record<Category, SignData[]> = {
  prohibition: cafeProhibitionSigns,
  warning: cafeWarningSigns,
  information: cafeInfoSigns,
};

export function getSignsByStandard(
  standard: Standard,
  category: Category
): SignData[] {
  const source = standard === "iso7010" ? isoByCategory : cafeByCategory;
  return source[category] ?? [];
}

