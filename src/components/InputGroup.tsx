import React from "react";

interface InputGroupProps {
  label: string;
  children: React.ReactNode;
}

const InputGroup: React.FC<InputGroupProps> = ({ label, children }) => {
  return (
    <div className="InputGroup">
      <label>{label}</label>
      <div className="input-wrapper">{children}</div>
    </div>
  );
};

export default InputGroup;
