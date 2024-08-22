import React from "react";

interface ColorInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const ColorInput: React.FC<ColorInputProps> = ({ label, value, onChange }) => {
  return (
    <div className="ColorInput">
      <label>{label}</label>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input type="color" value={value} onChange={(e) => onChange(e.target.value)} style={{ marginRight: "10px" }} />
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} style={{ width: "80px" }} />
      </div>
    </div>
  );
};

export default ColorInput;
