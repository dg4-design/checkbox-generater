import React from "react";

interface ColorControlProps {
  color: string;
  onChange: (color: string) => void;
}

const ColorControl: React.FC<ColorControlProps> = ({ color, onChange }) => {
  return (
    <div className="ColorControl">
      <label htmlFor="colorInput">色：</label>
      <input type="color" id="colorInput" value={color} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default ColorControl;
