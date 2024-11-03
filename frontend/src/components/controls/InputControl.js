import React from "react";
import { getNodeStyles } from "../../constants";
import { useTheme } from "../../context/themeProvider";

export const InputControl = ({ type, value, onChange, ...props }) => {
  const { isDarkTheme } = useTheme();
  const nodeStyles = getNodeStyles(isDarkTheme);

  return (
    <input
      type={type}
      value={value === undefined ? "" : value}
      onChange={(e) =>
        onChange(type === "number" ? Number(e.target.value) : e.target.value)
      }
      style={nodeStyles.input}
      {...props}
    />
  );
};
