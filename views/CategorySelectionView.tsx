import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, RotateCcw } from "lucide-react";
import {
  Category,
  LanguageCode,
  SignData,
  Standard,
} from "../types";
import {
  languageOptions,
  getSignsByStandard,
} from "../data";

interface GeneratorViewProps {
  standard: Standard;
  category: Category;
  onBack: () => void;
  onReset: () => void;
}

const GeneratorView: React.FC<GeneratorViewProps> = ({
  standard,
  category,
  onBack,
  onReset,
}) => {
  // 内部维护当前分类（可以在页面里切换分类）
  const [currentCategory, setCurrentCategory] = useState<Category>(category);

  // 当前图标列表
  const signList = useMemo<SignData[]>(
    () => getSignsByStandard(standard, currentCategory),
    [standard, currentCategory]
  );

  const [selectedSign, setSelectedSign] = useState<SignData | null>(
    signList[0] ?? null
  );

  // 语言相关状态
  const [mainLang, setMainLang] = useState<LanguageCode>("ko");
  const [extraLangs, setExtraLangs] = useState<LanguageCode[]>(["en"]);

  // 当标准 / 分类变动时，重置选择
  useEffect(() => {
    if (signList.length > 0) {
      setSelectedSign(signList[0]);
    } else {
      setSelectedSign(null);
    }
  }, [signList]);

  const handleToggleExtraLang = (code: LanguageCode) => {
    if (code === mainLang) return;
    setExtraLangs((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const handleResetAll = () => {
    setCurrentCategory(category);
    setMainLang("ko");
    setExtraLangs(["en"]);
    if (signList.length > 0) {
      setSelectedSign(signList[0]);
    } else {
      setSelectedSign(null);
    }
    onReset();
  };

  const getTextByLang = (sign: SignData, code: LanguageCode): string => {
    switch (code) {
      case "ko":
        return sign.ko;
      case "en":
        return sign.en;
      case "ja":
        return sign.ja;
      case "zh":
        return sign.zh;
      default:
        return sign.name;
    }
  };

  // 用于判断当前是 ISO 还是咖啡，用文案区分
  const isCafe = standard === "cafe";

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col p-6 font-sans">
      <div className="max-w-6xl w-full mx-auto flex-1 flex flex-col gap-6">
        {/* 顶部：返回 + 标题 + 重置 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 bg-white text-neutral-600 rounded-full border border-neutral-200 hover:bg-neutral-50 shadow-sm"
            >
              <ArrowLeft size={18} />
              뒤로가기
            </button>
            <div className="h-8 w-px bg-neutral-200" />
            <div>
              <h1 className="text-2xl font-black text-neutral-900">
                {isCafe ? "카페 / 매장용 안전표지" : "ISO 7010 안전 표지"}
              </h1>
              <p className="text-xs text-neutral-500 mt-1">
                메인 언어와 아이콘을 선택해 즉시 사용할 수 있는 표지 이미지를 만듭니다.
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAll}
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-neutral-500 rounded-full hover:bg-neutral-100"
          >
            <RotateCcw size={16} />
            초기화
          </button>
        </div>

        <div className="grid grid-cols-[260px,1fr] gap-6 mt-4">
          {/* 左侧控制面板 */}
          <aside className="bg-white rounded-3xl border border-neutral-200 p-4 flex flex-col gap-6 shadow-sm">
            {/* 1. 主语言 */}
            <section>
              <h3 className="text-xs font-semibold text-neutral-500 mb-2">
                메인 언어
              </h3>
              <div className="flex flex-wrap gap-2">
                {languageOptions.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setMainLang(lang.code)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                      mainLang === lang.code
                        ? "bg-black text-white border-black"
                        : "bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </section>

            {/* 2. 分类（禁⽌/注意/指南） */}
            <section>
              <h3 className="text-xs font-semibold text-neutral-500 mb-2">
                카테고리
              </h3>
              <div className="flex gap-2">
                {(["prohibition", "warning", "information"] as Category[]).map(
                  (cat) => (
                    <button
                      key={cat}
                      onClick={() => setCurrentCategory(cat)}
                      className={`flex-1 px-3 py-1.5 rounded-full text-xs font-medium border ${
                        currentCategory === cat
                          ? "bg-neutral-900 text-white border-neutral-900"
                          : "bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50"
                      }`}
                    >
                      {cat === "prohibition" && "금지"}
                      {cat === "warning" && "주의"}
                      {cat === "information" && "안내"}
                    </button>
                  )
                )}
              </div>
            </section>

            {/* 3. 图标选择 */}
            <section>
              <h3 className="text-xs font-semibold text-neutral-500 mb-2">
                아이콘 선택
              </h3>
              <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
                {signList.map((sign) => {
                  const iconSrc = sign.icon as unknown as string;
                  const isActive = selectedSign?.name === sign.name;
                  return (
                    <button
                      key={sign.name}
                      onClick={() => setSelectedSign(sign)}
                      className={`flex flex-col items-center gap-1 p-2 rounded-2xl border text-xs ${
                        isActive
                          ? "border-neutral-900 bg-neutral-900/5"
                          : "border-neutral-200 bg-white hover:bg-neutral-50"
                      }`}
                    >
                      <div className="w-full aspect-square rounded-xl bg-white flex items-center justify-center overflow-hidden">
                        <img
                          src={iconSrc}
                          alt={sign.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="mt-1 text-[11px] text-neutral-700 truncate w-full">
                        {sign.char}
                      </span>
                    </button>
                  );
                })}

                {signList.length === 0 && (
                  <div className="text-xs text-neutral-400 col-span-2 py-4">
                    해당 카테고리에 사용할 수 있는 아이콘이 없습니다.
                  </div>
                )}
              </div>
            </section>

            {/* 4. 多国语言 */}
            <section>
              <h3 className="text-xs font-semibold text-neutral-500 mb-2">
                다국어 추가
              </h3>
              <div className="flex flex-wrap gap-2">
                {languageOptions.map((lang) => {
                  if (lang.code === mainLang) return null;
                  const active = extraLangs.includes(lang.code);
                  return (
                    <button
                      key={lang.code}
                      onClick={() =>
                        handleToggleExtraLang(lang.code as LanguageCode)
                      }
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                        active
                          ? "bg-neutral-900 text-white border-neutral-900"
                          : "bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50"
                      }`}
                    >
                      {active ? "✓ " : ""}
                      {lang.label}
                    </button>
                  );
                })}
              </div>
            </section>
          </aside>

          {/* 右侧预览区域 */}
          <main className="flex items-center justify-center">
            <div className="w-full max-w-xl">
              <div className="bg-white rounded-[2.5rem] shadow-xl border border-neutral-200 px-10 py-10 flex flex-col items-center gap-6">
                {/* 图标预览 */}
                <div className="w-56 h-56 rounded-[2.25rem] bg-white border-[10px] border-red-500 flex items-center justify-center overflow-hidden">
                  {selectedSign ? (
                    <img
                      src={selectedSign.icon as unknown as string}
                      alt={selectedSign.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-xs text-neutral-400">
                      아이콘을 선택해주세요
                    </span>
                  )}
                </div>

                {/* 文字（主语言 + 其他语言） */}
                {selectedSign && (
                  <div className="w-full text-center mt-2">
                    {/* 主语言大字 */}
                    <div className="text-xl font-bold text-neutral-900 mb-1">
                      {getTextByLang(selectedSign, mainLang)}
                    </div>
                    {/* 其他语言小字 */}
                    <div className="flex flex-col gap-0.5 text-xs text-neutral-500">
                      {extraLangs.map((code) => (
                        <div key={code}>
                          {getTextByLang(selectedSign, code)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default GeneratorView;
