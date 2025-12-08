import React from 'react';
import { 
  CigaretteOff, Ban, VolumeX, PhoneOff, Footprints,
  Zap, Flame, Skull, ArrowDown,
  DoorOpen, Bath, HeartPulse, Info, Accessibility,
  AlertTriangle
} from 'lucide-react';
import { SignData, LanguageOption, CategoryDef } from './types';

export const languageOptions: LanguageOption[] = [
  { code: 'ko', name: '한국어', label: 'KR' },
  { code: 'en', name: 'English', label: 'EN' },
  { code: 'zh', name: '中文', label: 'CN' },
  { code: 'ja', name: '日本語', label: 'JP' }
];

export const prohibitionSigns: SignData[] = [
  { icon: <CigaretteOff size={60} />, char: '🚭', name: '금연', ko: '금연', en: 'No Smoking', zh: '禁止吸烟', ja: '禁煙' },
  { icon: <Ban size={60} />, char: '🚫', name: '출입금지', ko: '출입 금지', en: 'No Entry', zh: '禁止进入', ja: '立入禁止' },
  { icon: <VolumeX size={60} />, char: '🔇', name: '정숙', ko: '정숙', en: 'Keep Quiet', zh: '保持安静', ja: '静粛に' },
  { icon: <PhoneOff size={60} />, char: '📵', name: '휴대폰금지', ko: '휴대폰 사용 금지', en: 'No Mobile Phones', zh: '禁止使用手机', ja: '携帯電話禁止' },
  { icon: <Footprints size={60} />, char: '🚷', name: '보행금지', ko: '보행 금지', en: 'No Pedestrians', zh: '禁止步行', ja: '歩行禁止' },
  { 
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="60" 
        height="60" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M17 3v18" />
        <circle cx="9" cy="7" r="2.5" />
        <path d="M13.5 11.5 15.5 14 14.5 19 11.5 22" />
        <path d="M13.5 11.5 10 16 10.5 21" />
      </svg>
    ),
    char: '🚫', 
    name: '기대지 마시오', 
    ko: '기대지 마시오', 
    en: 'Do Not Lean', 
    zh: '禁止倚靠', 
    ja: 'もたれかかり禁止' 
  }
];

export const warningSigns: SignData[] = [
  { icon: <Footprints size={50} />, char: '⚠️', name: '미끄럼', ko: '미끄럼 주의', en: 'Caution Slip Hazard', zh: '当心滑倒', ja: 'スリップ注意' },
  { icon: <Zap size={50} />, char: '⚡', name: '감전', ko: '감전 주의', en: 'Electric Shock Hazard', zh: '当心触电', ja: '感電注意' },
  { icon: <Flame size={50} />, char: '🔥', name: '고온', ko: '고온 주의', en: 'Hot Surface', zh: '高温警告', ja: '高温注意' },
  { icon: <Skull size={50} />, char: '☣️', name: '위험물질', ko: '위험 물질', en: 'Hazardous Material', zh: '危险物质', ja: '危険物質' },
  { icon: <ArrowDown size={50} />, char: '⬇️', name: '낙하', ko: '낙하물 주의', en: 'Falling Objects', zh: '当心坠落', ja: '落下物注意' }
];

export const infoSigns: SignData[] = [
  { icon: <DoorOpen size={60} />, char: '🚪', name: '비상구', ko: '비상구', en: 'Emergency Exit', zh: '紧急出口', ja: '非常口', hasDirection: true },
  { icon: <Bath size={60} />, char: '🚻', name: '화장실', ko: '화장실', en: 'Restroom', zh: '洗手间', ja: 'お手洗い' },
  { icon: <HeartPulse size={60} />, char: '🚑', name: '구급', ko: '응급 처치', en: 'First Aid', zh: '急救', ja: '救急' },
  { icon: <Info size={60} />, char: 'ℹ️', name: '안내', ko: '안내', en: 'Information', zh: '信息', ja: '案内' },
  { icon: <Accessibility size={60} />, char: '♿', name: '장애인', ko: '장애인 시설', en: 'Accessible Facility', zh: '无障碍设施', ja: 'バリアフリー' }
];

export const categories: CategoryDef[] = [
  { id: 'prohibition', name: '금지 표지', sub: 'Prohibition', color: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', icon: <Ban size={48} /> },
  { id: 'warning', name: '경고 표지', sub: 'Warning', color: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', icon: <AlertTriangle size={48} /> },
  { id: 'information', name: '정보/안내', sub: 'Information', color: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', icon: <Info size={48} /> }
];