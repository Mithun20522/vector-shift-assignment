import React, { useState } from "react";
import { useTheme } from "../../../context/themeProvider";
import { BaseNode } from "../BaseNode";
import { InputControl } from "../../controls/InputControl";

export const MathNode = ({ id }) => {
  const { isDarkTheme } = useTheme();
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  const calculateSum = () => {
    setResult(value1 + value2);
  };

  const buttonClass = `
    w-full px-4 py-2 rounded-md font-medium
    ${
      isDarkTheme
        ? "bg-blue-600 hover:bg-blue-700 text-white"
        : "bg-blue-500 hover:bg-blue-600 text-white"
    }
    transition-colors duration-200
  `;

  const resultClass = `
    mt-3 p-2 rounded-md text-center
    ${isDarkTheme ? "bg-gray-700 text-gray-100" : "bg-gray-100 text-gray-900"}
  `;

  return (
    <BaseNode title="Math Node">
      <div className="space-y-3">
        <InputControl
          type="number"
          value={value1}
          onChange={setValue1}
          placeholder="Value 1"
        />
        <InputControl
          type="number"
          value={value2}
          onChange={setValue2}
          placeholder="Value 2"
        />
        <button className={buttonClass} onClick={calculateSum}>
          Calculate
        </button>
        <div className={resultClass}>Result: {result}</div>
      </div>
    </BaseNode>
  );
};
