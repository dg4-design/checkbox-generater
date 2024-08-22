import React from "react";
import ColorInput from "@/components/ColorInput";
import RangeInput from "@/components/RangeInput";

interface BorderControlProps {
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  onChange: (changes: Partial<BorderControlProps>) => void;
}

const BorderControl: React.FC<BorderControlProps> = ({ borderColor, borderWidth, borderRadius, onChange }) => {
  return (
    <div className="BorderControl">
      <ColorInput label="ボーダー色：" value={borderColor} onChange={(value) => onChange({ borderColor: value })} />
      <RangeInput label="ボーダー幅" value={borderWidth} min={0} max={10} onChange={(value) => onChange({ borderWidth: value })} />
      <RangeInput label="ボーダー半径" value={borderRadius} min={0} max={50} onChange={(value) => onChange({ borderRadius: value })} />
    </div>
  );
};

export default BorderControl;
