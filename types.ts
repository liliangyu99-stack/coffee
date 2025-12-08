import { ReactNode } from 'react';

export type Standard = 'iso7010' | 'cafe';
export type Category = 'prohibition' | 'warning' | 'information';
export type Direction = 'horizontal' | 'vertical';
export type CornerStyle = 'rounded' | 'sharp';
export type ExitDirection = 'none' | 'left' | 'right';
export type LanguageCode = 'ko' | 'en' | 'zh' | 'ja';

export interface SignData {
  icon: ReactNode;
  char: string;
  name: string;
  ko: string;
  en: string;
  zh: string;
  ja: string;
  hasDirection?: boolean;
}

export interface Config {
  mainLanguage: LanguageCode;
  style: string;
  direction: Direction;
  font: string;
  additionalLanguages: LanguageCode[];
  exitDirection: ExitDirection;
  cornerStyle: CornerStyle;
  arrowToIconGap: number;
  iconToTextGap: number;
  contentToBorderPadding: number;
  borderWidth: number;
  textGap: number;
  whiteBorderWidth: number;
}

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  label: string;
}

export interface CategoryDef {
  id: Category;
  name: string;
  sub: string;
  color: string;
  border: string;
  text: string;
  icon: ReactNode;
}