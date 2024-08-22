import React from "react";
import { Styles } from "@/types/styles";

interface CustomInputProps {
  type: "checkbox" | "radio";
  label: string;
  checked: boolean;
  onChange: () => void;
  styles: Styles;
}

const CustomInput: React.FC<CustomInputProps> = ({ type, label, checked, onChange, styles }) => {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", cursor: "pointer" }}>
      <div
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        style={{
          width: styles.size,
          height: styles.size,
          backgroundColor: checked ? styles.color : "transparent",
          border: `${styles.borderWidth} solid ${styles.borderColor}`,
          borderRadius: type === "checkbox" ? styles.borderRadius : "50%",
          display: "inline-block",
          position: "relative",
          transition: "all 0.3s ease",
        }}
        onClick={onChange}
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onChange();
          }
        }}
      >
        {checked && type === "checkbox" && (
          <div
            style={{
              content: '""',
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(45deg)",
              width: "30%",
              height: "60%",
              borderRight: "2px solid white",
              borderBottom: "2px solid white",
            }}
          />
        )}
      </div>
      <span style={{ marginLeft: "8px" }}>{label}</span>
    </label>
  );
};

export default CustomInput;
