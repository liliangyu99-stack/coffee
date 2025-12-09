import React, { useState } from 'react';
import { Standard, Category } from './types';

// 关键修复：必须写上 .tsx 扩展名（Vercel 的 Linux 系统不能自动识别）
import HomeView from './views/HomeView.tsx';
import CategorySelectionView from './views/CategorySelectionView.tsx';
import GeneratorView from './views/GeneratorView.tsx';

const App: React.FC = () => {
  const [standard, setStandard] = useState<Standard | null>(null);
  const [category, setCategory] = useState<Category | null>(null);

  const handleReset = () => {
    setStandard(null);
    setCategory(null);
  };

  if (!standard) {
    return <HomeView onSelectStandard={setStandard} />;
  }

  if (!category) {
    return (
      <CategorySelectionView
        onSelectCategory={setCategory}
        onBack={() => setStandard(null)}
      />
    );
  }

  return (
    <GeneratorView
      standard={standard}
      category={category}
      onBack={() => setCategory(null)}
      onReset={handleReset}
    />
  );
};

export default App;
