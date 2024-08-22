import React from "react";
import RangeInput from "@/components/RangeInput";

interface SizeControlProps {
  size: number;
  onChange: (size: number) => void;
}

const SizeControl: React.FC<SizeControlProps> = ({ size, onChange }) => {
  return <RangeInput label="サイズ" value={size} min={10} max={50} onChange={onChange} />;
};

export default SizeControl;
