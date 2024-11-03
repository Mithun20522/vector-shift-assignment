// textNode.js

import React, { useState } from "react";
import { useTheme } from "../../../context/themeProvider";
import { BaseNode } from "../BaseNode";

export const TextNode = ({ id, data }) => {
  const { isDarkTheme } = useTheme();
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const inputClass = `
    w-full px-3 py-2 rounded-md
    ${isDarkTheme ? "bg-gray-700 text-gray-100" : "bg-gray-100 text-gray-900"}
    border-none outline-none transition-colors duration-200
  `;

  const labelClass = `
    block text-sm font-medium mb-1
    ${isDarkTheme ? "text-gray-300" : "text-gray-700"}
  `;

  return (
    <BaseNode title="Text Node">
      <div className="space-y-3">
        <div>
          <label className={labelClass}>Text</label>
          <input
            type="text"
            value={currText}
            onChange={(e) => setCurrText(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>
    </BaseNode>
  );
};
