import React from "react";
import { Styles } from "@/types/styles";
import CustomInput from "./CustomInput";

interface PreviewProps {
  styles: Styles;
  onStyleChange: (newStyles: Partial<Styles>) => void;
}

const Preview: React.FC<PreviewProps> = ({ styles, onStyleChange }) => {
  return (
    <div className="Preview">
      <h2>プレビュー</h2>
      <div className="preview-items">
        <CustomInput type="checkbox" label="チェックボックス" checked={styles.checked} onChange={() => onStyleChange({ checked: !styles.checked })} styles={styles} />
        <CustomInput type="radio" label="ラジオボタン" checked={styles.checked} onChange={() => onStyleChange({ checked: !styles.checked })} styles={styles} />
      </div>
    </div>
  );
};

export default Preview;
