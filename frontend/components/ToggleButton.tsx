import React from "react";

interface ToggleButtonProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  label,
  checked,
  onChange,
}) => {
  const handleToggle = () => {
    onChange(!checked);
  };

  return (
    <div className="toggle-button">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
          className="toggle-checkbox"
        />
        <span className="toggle-switch"></span>
        {label}
      </label>
    </div>
  );
};

export default ToggleButton;