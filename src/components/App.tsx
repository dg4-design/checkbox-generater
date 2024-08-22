import React from "react";
import "@/styles/reset.css";
import "@/styles/App.css";

import { useStyles } from "@/hooks/useStyles";

import ControlPanel from "@/components/ControlPanel";
import Preview from "@/components/Preview";
import CodeOutput from "@/components/CodeOutput";

const App: React.FC = () => {
  const { styles, handleStyleChange } = useStyles();

  return (
    <div className="App">
      <h1>カスタムインプットジェネレーター</h1>
      <div className="app-container">
        <ControlPanel styles={styles} onStyleChange={handleStyleChange} />
        <div className="right-panel">
          <Preview styles={styles} onStyleChange={handleStyleChange} />
          <CodeOutput styles={styles} />
        </div>
      </div>
    </div>
  );
};

export default App;
