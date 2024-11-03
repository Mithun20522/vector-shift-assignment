import React, { useState } from "react";
import { useTheme } from "../../../context/themeProvider";
import { BaseNode } from "../BaseNode";

export const ToggleNode = ({ id }) => {
  const { isDarkTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);

  const buttonClass = `
    w-full px-4 py-2 rounded-md font-medium
    ${
      !isActive
        ? isDarkTheme
          ? "bg-green-600 hover:bg-green-700"
          : "bg-green-500 hover:bg-green-600"
        : isDarkTheme
        ? "bg-red-600 hover:bg-red-700"
        : "bg-red-500 hover:bg-red-600"
    }
    text-white transition-colors duration-200
  `;

  const statusClass = `
    mt-3 p-2 rounded-md text-center
    ${isActive ? "text-green-400" : "text-red-400"}
  `;

  return (
    <BaseNode
      title="Toggle Node"
      inputs={[{ id: "input-1", style: {} }]}
      outputs={[{ id: "output-1", style: {} }]}
    >
      <div className="space-y-3">
        <button className={buttonClass} onClick={() => setIsActive(!isActive)}>
          {isActive ? "Deactivate" : "Activate"}
        </button>
        <div className={statusClass}>
          Status: {isActive ? "Active" : "Inactive"}
        </div>
      </div>
    </BaseNode>
  );
};
