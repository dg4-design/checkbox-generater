import React from "react";

interface RangeInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({ label, value, min, max, onChange }) => {
  return (
    <div className="RangeInput">
      <label>
        {label}：{value}px
      </label>
      <input type="range" min={min} max={max} value={value} onChange={(e) => onChange(parseInt(e.target.value))} />
    </div>
  );
};

export default RangeInput;
