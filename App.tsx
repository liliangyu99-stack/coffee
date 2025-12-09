import React, { useState } from "react";
import { Standard, Category } from "./types";

import HomeView from "./views/HomeView";
import CategorySelectionView from "./views/CategorySelectionView";
import GeneratorView from "./views/GeneratorView";

/**  
 * App 主组件  
 * - 选择标准（ISO7010 或 Cafe）  
 * - 选择类别（禁止 / 警告 / 信息）  
 * - 生成标志页面  
 */
const App: React.FC = () => {
  const [standard, setStandard] = useState<Standard | null>(null);
  const [category, setCategory] = useState<Category | null>(null);

  const handleReset = () => {
    setStandard(null);
    setCategory(null);
  };

  // Step 1 — 选择标准
  if (!standard) {
    return <HomeView onSelectStandard={setStandard} />;
  }

  // Step 2 — 选择类别
  if (!category) {
    return (
      <CategorySelectionView
        onSelectCategory={setCategory}
        onBack={() => setStandard(null)}
      />
    );
  }

  // Step 3 — 生成标志
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
