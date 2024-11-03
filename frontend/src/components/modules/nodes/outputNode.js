// outputNode.js

import React, { useState } from "react";
import { useTheme } from "../../../context/themeProvider";
import { BaseNode } from "../BaseNode";
import { SelectControl } from "../../controls/SelectControl";

export const OutputNode = ({ id, data }) => {
  const { isDarkTheme } = useTheme();
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const inputClass = `
    w-full px-3 py-2 mb-2 rounded-md
    ${isDarkTheme ? "bg-gray-700 text-gray-100" : "bg-gray-100 text-gray-900"}
    border-none outline-none transition-colors duration-200
  `;

  const labelClass = `
    block text-sm font-medium mb-1
    ${isDarkTheme ? "text-gray-300" : "text-gray-700"}
  `;

  return (
    <BaseNode
      title="Output Node"
      inputs={[{ id: "input-1", style: {} }]}
      outputs={[{ id: "output-1", style: {} }]}
    >
      <div className="space-y-3">
        <div>
          <label className={labelClass}>Name</label>
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Type</label>
          <SelectControl
            value={inputType}
            onChange={setInputType}
            options={[
              { value: "Text", label: "Text" },
              { value: "File", label: "File" },
            ]}
          />
        </div>
      </div>
    </BaseNode>
  );
};
