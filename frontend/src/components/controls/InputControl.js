import React from "react";
import { getNodeStyles } from "../../constants";
import { useTheme } from "../../context/themeProvider";

export const InputControl = ({ type, value, onChange, ...props }) => {
  const { isDarkTheme } = useTheme();
  const nodeStyles = getNodeStyles(isDarkTheme);
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(
      type === "number" && newValue !== "" ? Number(newValue) : newValue
    );
  };

  return (
    <input
      type={type}
      value={value === undefined ? "" : value}
      onChange={handleChange}
      style={nodeStyles.input}
      {...props}
    />
  );
};
