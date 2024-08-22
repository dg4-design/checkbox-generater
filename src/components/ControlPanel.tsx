import React from "react";
import { Styles } from "@/types/styles";
import InputGroup from "@/components/InputGroup";
import ColorInput from "@/components/ColorInput";
import RangeInput from "@/components/RangeInput";

interface ControlPanelProps {
  styles: Styles;
  onStyleChange: (newStyles: Partial<Styles>) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ styles, onStyleChange }) => {
  return (
    <div className="ControlPanel">
      <h2>スタイル設定</h2>
      <InputGroup label="サイズ">
        <RangeInput label="サイズ" value={parseInt(styles.size)} min={10} max={50} onChange={(value) => onStyleChange({ size: `${value}px` })} />
      </InputGroup>
      <InputGroup label="色">
        <ColorInput label="色" value={styles.color} onChange={(value) => onStyleChange({ color: value })} />
      </InputGroup>
      <InputGroup label="ボーダー">
        <ColorInput label="ボーダー色" value={styles.borderColor} onChange={(value) => onStyleChange({ borderColor: value })} />
        <RangeInput label="ボーダー幅" value={parseInt(styles.borderWidth)} min={0} max={10} onChange={(value) => onStyleChange({ borderWidth: `${value}px` })} />
        <RangeInput label="ボーダー半径" value={parseInt(styles.borderRadius)} min={0} max={50} onChange={(value) => onStyleChange({ borderRadius: `${value}px` })} />
      </InputGroup>
    </div>
  );
};

export default ControlPanel;
