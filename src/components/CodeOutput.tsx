import React from "react";
import { Styles } from "@/types/styles";

interface CodeOutputProps {
  styles: Styles;
}

const CodeOutput: React.FC<CodeOutputProps> = ({ styles }) => {
  const cssCode = `
.custom-input {
  width: ${styles.size};
  height: ${styles.size};
  background-color: ${styles.checked ? styles.color : "transparent"};
  border: ${styles.borderWidth} solid ${styles.borderColor};
  border-radius: ${styles.borderRadius};
  display: inline-block;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
}

.custom-input.radio {
  border-radius: 50%;
}

.custom-input.checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 30%;
  height: 60%;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
}
  `.trim();

  return (
    <div className="CodeOutput">
      <h2>CSS コード</h2>
      <pre>
        <code>{cssCode}</code>
      </pre>
    </div>
  );
};

export default CodeOutput;
