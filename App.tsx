import React, { useState } from 'react';
import { Standard, Category } from './types';
import HomeView from './views/HomeView';
import CategorySelectionView from './views/CategorySelectionView';
import GeneratorView from './views/GeneratorView';

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