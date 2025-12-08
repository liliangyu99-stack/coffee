import React from 'react';
import { Globe, Layout, ArrowRight } from 'lucide-react';
import { Standard } from '../types';

interface HomeViewProps {
  onSelectStandard: (standard: Standard) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onSelectStandard }) => {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-5xl w-full space-y-16 animate-fade-in-up">
        
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/60 text-neutral-600 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            ISO 표준 호환
          </div>
          <h1 className="text-6xl font-black text-neutral-900 tracking-tight leading-tight">
            안전 표지 생성기
          </h1>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light">
            복잡한 디자인 툴 없이, 누구나 쉽게 만드는<br/>
            <strong className="font-semibold text-neutral-800">ISO 표준 안전 표지판</strong> 디자인 도구
          </p>
        </div>
        
        {/* Card Grid */}
        <div className="grid md:grid-cols-2 gap-8 px-4">
          <button 
            onClick={() => onSelectStandard('iso7010')}
            className="group relative overflow-hidden bg-white rounded-[2rem] p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-left border border-neutral-100"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
              <Globe size={180} />
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-between space-y-12">
              <div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">ISO 7010</h3>
                <p className="text-neutral-500 font-medium">국제 표준 안전 표지 디자인</p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#CF000F] shadow-sm ring-2 ring-white"></div>
                  <div className="w-10 h-10 rounded-full bg-[#F4D03F] shadow-sm ring-2 ring-white"></div>
                  <div className="w-10 h-10 rounded-full bg-[#009051] shadow-sm ring-2 ring-white"></div>
                  <div className="w-10 h-10 rounded-full bg-[#0055A4] shadow-sm ring-2 ring-white"></div>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 group-hover:translate-x-2 transition-transform">
                  시작하기 <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </button>

          <button 
            onClick={() => onSelectStandard('cafe')}
            className="group relative overflow-hidden bg-neutral-900 rounded-[2rem] p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-left"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
              <Layout size={180} color="white" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-between space-y-12">
              <div>
                <h3 className="text-3xl font-bold text-white mb-3">카페 / 매장용</h3>
                <p className="text-neutral-400 font-medium">부드러운 디자인의 안내 표지</p>
              </div>

              <div className="space-y-6">
                 <div className="flex gap-3">
                   <div className="w-10 h-10 rounded-full border-2 border-white/30 bg-transparent"></div>
                   <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm"></div>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-2 transition-transform">
                  시작하기 <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeView;