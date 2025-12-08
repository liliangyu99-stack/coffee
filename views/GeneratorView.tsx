import React, { useState } from 'react';
import { 
  ChevronRight, ArrowLeft, Download, 
  Type, Layout, Globe, Maximize, Palette,
  Check, ChevronDown
} from 'lucide-react';
import { Standard, Category, Config, SignData } from '../types';
import { languageOptions, prohibitionSigns, warningSigns, infoSigns } from '../data';
import SignPreview from '../components/SignPreview';

interface GeneratorViewProps {
  standard: Standard;
  category: Category;
  onBack: () => void;
  onReset: () => void;
}

const GeneratorView: React.FC<GeneratorViewProps> = ({ standard, category, onBack, onReset }) => {
  const [selectedSignIndex, setSelectedSignIndex] = useState(0);
  const [config, setConfig] = useState<Config>({
    mainLanguage: 'ko',
    style: 'modern',
    direction: 'horizontal',
    font: 'sans-serif',
    additionalLanguages: [],
    exitDirection: 'none',
    cornerStyle: 'rounded',
    
    // Default Layout Values
    arrowToIconGap: 24,
    iconToTextGap: 40,
    contentToBorderPadding: 40,
    borderWidth: 12,
    textGap: 16,
    whiteBorderWidth: 2
  });
  const [isDownloading, setIsDownloading] = useState(false);

  const toggleAdditionalLanguage = (langCode: any) => {
    setConfig(prev => ({
      ...prev,
      additionalLanguages: prev.additionalLanguages.includes(langCode)
        ? prev.additionalLanguages.filter(l => l !== langCode)
        : [...prev.additionalLanguages, langCode]
    }));
  };

  const getCategorySigns = (): SignData[] => {
    switch(category) {
      case 'prohibition': return prohibitionSigns;
      case 'warning': return warningSigns;
      case 'information': return infoSigns;
      default: return [];
    }
  };

  const signs = getCategorySigns();
  const currentSign = signs[selectedSignIndex] || signs[0];
  const isExit = currentSign.name === '비상구';

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert('이미지가 생성되었습니다! (Demo)');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col h-screen overflow-hidden font-sans">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-neutral-200 px-6 py-4 flex items-center justify-between z-20 sticky top-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 hover:bg-neutral-100 rounded-full transition-colors text-neutral-500 hover:text-neutral-900"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center gap-2 text-sm font-medium select-none">
               <button 
                 onClick={onReset}
                 className="text-neutral-400 hover:text-neutral-900 transition-colors"
               >
                 Home
               </button>
               
               <ChevronRight size={14} className="text-neutral-300" />
               
               <button 
                 onClick={onBack}
                 className="text-neutral-400 hover:text-neutral-900 transition-colors"
               >
                 {standard === 'iso7010' ? 'ISO 7010' : 'Cafe'}
               </button>
               
               <ChevronRight size={14} className="text-neutral-300" />
               
               <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide bg-neutral-100 text-neutral-800 border border-neutral-200`}>
                  {category === 'prohibition' ? '금지' : category === 'warning' ? '경고' : '정보'}
               </span>
            </div>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar: Controls */}
          <aside className="w-80 bg-white border-r border-neutral-200 overflow-y-auto z-10 custom-scrollbar flex flex-col">
            
            <div className="p-6 space-y-8">
              {/* Language Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-neutral-900 font-semibold text-xs uppercase tracking-wider">
                  <Globe size={14} className="text-neutral-500" />
                  <span>메인 언어</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {languageOptions.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => setConfig({...config, mainLanguage: lang.code})}
                      className={`px-3 py-2.5 text-sm font-medium rounded-lg border transition-all duration-200 ${
                        config.mainLanguage === lang.code 
                        ? 'border-neutral-900 bg-neutral-900 text-white shadow-md' 
                        : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Icon Selection */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-neutral-900 font-semibold text-xs uppercase tracking-wider">
                  <Palette size={14} className="text-neutral-500" />
                  <span>아이콘 선택</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                   {signs.map((sign, idx) => (
                     <button
                      key={idx}
                      onClick={() => setSelectedSignIndex(idx)}
                      className={`aspect-square rounded-xl flex items-center justify-center transition-all duration-200 relative group ${
                        selectedSignIndex === idx 
                        ? 'bg-neutral-50 border-2 border-neutral-900 shadow-sm' 
                        : 'border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                      }`}
                     >
                       <span className={`text-2xl leading-none transition-transform ${selectedSignIndex === idx ? 'scale-110' : 'group-hover:scale-110 opacity-70 group-hover:opacity-100'}`}>
                         {sign.char}
                       </span>
                     </button>
                   ))}
                </div>
              </div>

              <div className="h-px bg-neutral-100 w-full" />

              {/* Layout Controls - Segmented Control Style */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-neutral-900 font-semibold text-xs uppercase tracking-wider">
                  <Layout size={14} className="text-neutral-500" />
                  <span>레이아웃</span>
                </div>
                
                <div className="flex p-1 bg-neutral-100 rounded-lg border border-neutral-200">
                  {[
                    { id: 'horizontal', label: '가로형' },
                    { id: 'vertical', label: '세로형' }
                  ].map(layout => (
                    <button 
                      key={layout.id}
                      onClick={() => setConfig({...config, direction: layout.id as any})}
                      className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                        config.direction === layout.id 
                        ? 'bg-white text-neutral-900 shadow-sm ring-1 ring-black/5' 
                        : 'text-neutral-500 hover:text-neutral-700'
                      }`}
                    >
                      {layout.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Corner Style - Segmented Control Style */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-neutral-900 font-semibold text-xs uppercase tracking-wider">
                  <Maximize size={14} className="text-neutral-500" />
                  <span>모서리</span>
                </div>
                <div className="flex p-1 bg-neutral-100 rounded-lg border border-neutral-200">
                  <button 
                    onClick={() => setConfig({...config, cornerStyle: 'rounded'})}
                    className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                      config.cornerStyle === 'rounded' 
                      ? 'bg-white text-neutral-900 shadow-sm ring-1 ring-black/5' 
                      : 'text-neutral-500 hover:text-neutral-700'
                    }`}
                  >
                    둥글게
                  </button>
                  <button 
                    onClick={() => setConfig({...config, cornerStyle: 'sharp'})}
                    className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                      config.cornerStyle === 'sharp' 
                       ? 'bg-white text-neutral-900 shadow-sm ring-1 ring-black/5' 
                      : 'text-neutral-500 hover:text-neutral-700'
                    }`}
                  >
                    직각
                  </button>
                </div>
              </div>

              {/* Special Controls for Exit */}
              {currentSign.hasDirection && (
                <div className="space-y-3 p-4 bg-green-50/50 rounded-xl border border-green-100/60 animate-fade-in">
                  <span className="text-xs font-bold text-green-700 uppercase flex items-center gap-1.5">
                      <Check size={12} strokeWidth={3} /> 비상구 방향
                  </span>
                  <div className="flex gap-2">
                    {['none', 'left', 'right'].map(dir => (
                      <button
                        key={dir}
                        onClick={() => setConfig({...config, exitDirection: dir as any})}
                        className={`flex-1 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 ${
                          config.exitDirection === dir 
                          ? 'bg-green-600 text-white border-green-600 shadow-sm shadow-green-200' 
                          : 'bg-white border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300'
                        }`}
                      >
                        {dir === 'none' ? '없음' : dir === 'left' ? '← 좌측' : '우측 →'}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="h-px bg-neutral-100 w-full" />

              {/* Multi-language */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-neutral-900 font-semibold text-xs uppercase tracking-wider">
                    <Type size={14} className="text-neutral-500" />
                    <span>다국어 추가</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languageOptions.map(lang => (
                    <button 
                      key={lang.code}
                      onClick={() => toggleAdditionalLanguage(lang.code)}
                      className={`px-3 py-1.5 text-xs border rounded-full transition-all duration-200 ${
                        config.additionalLanguages.includes(lang.code) 
                          ? 'border-neutral-800 bg-neutral-800 text-white shadow-sm' 
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50'
                      }`}
                    >
                      {config.additionalLanguages.includes(lang.code) ? '✓ ' : '+ '}{lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content: Preview */}
          <main className="flex-1 flex flex-col relative bg-neutral-50/50">
            {/* Dot Grid Background */}
            <div className="absolute inset-0 bg-dot-pattern opacity-[0.4] pointer-events-none"></div>

            <div className="flex-1 flex items-center justify-center p-12 overflow-auto z-0">
               <SignPreview 
                  category={category} 
                  sign={currentSign} 
                  config={config} 
               />
            </div>

            {/* Floating Action Button */}
            <div className="absolute bottom-8 right-8 z-20">
              <button 
                onClick={handleDownload}
                disabled={isDownloading}
                className={`group flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-black hover:scale-105 active:scale-95 transition-all duration-300 ${isDownloading ? 'opacity-80 cursor-wait' : ''}`}
              >
                {isDownloading ? (
                  <>
                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                     <span>생성 중...</span>
                  </>
                ) : (
                  <>
                    <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                    <span>이미지로 저장</span>
                  </>
                )}
              </button>
            </div>
          </main>
        </div>
      </div>
  );
};

export default GeneratorView;
