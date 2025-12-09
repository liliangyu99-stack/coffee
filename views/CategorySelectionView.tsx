import React from "react";
import { ArrowLeft } from "lucide-react";
import { Category } from "../types";
import { categories } from "../data";

interface CategorySelectionViewProps {
  onSelectCategory: (category: Category) => void;
  onBack: () => void;
}

const CategorySelectionView: React.FC<CategorySelectionViewProps> = ({
  onSelectCategory,
  onBack,
}) => {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col p-6 font-sans">
      <div className="max-w-6xl w-full mx-auto flex-1 flex flex-col justify-center animate-fade-in">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl font-black text-neutral-900 tracking-tight mb-2">
              카테고리 선택
            </h2>
            <p className="text-neutral-500">제작할 표지의 종류를 선택해주세요.</p>
          </div>

          <button
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-3 bg-white text-neutral-600 font-medium rounded-full shadow-sm hover:shadow-md hover:bg-neutral-50 transition-all border border-neutral-200"
          >
            <ArrowLeft size={20} /> 뒤로가기
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id as Category)}
              className={`
                group relative h-96 flex flex-col items-center justify-center gap-8 
                rounded-[2rem] border transition-all duration-500 
                hover:-translate-y-2 hover:shadow-2xl overflow-hidden bg-white
                border-neutral-100
              `}
            >
              <div
                className="text-6xl group-hover:scale-110 transition-transform duration-500"
              >
                {cat.icon}
              </div>

              <div className="text-center relative z-10">
                <span className="block text-3xl font-bold text-neutral-800 mb-2">
                  {cat.name}
                </span>
                <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
                  {cat.sub}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySelectionView;
