import { useState } from "react";
import { useTheme } from "../../../context/themeProvider";
import { BaseNode } from "../BaseNode";

export const CheckboxNode = ({ data }) => {
  const { isDarkTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked) => {
    setIsChecked(checked);
    data.onChange(checked);
  };
  return (
    <BaseNode
      title="Checkbox"
      inputs={[{ id: "input-1", style: {} }]}
      outputs={[{ id: "output-1", style: {} }]}
    >
      <label className="flex items-center space-x-3 cursor-pointer">
        <input
          type="checkbox"
          checked={data.checked}
          onChange={(e) => handleChange(e.target.checked)}
          className={`
            w-4 h-4 rounded 
            ${isDarkTheme ? "bg-gray-700" : "bg-gray-200"}
            border-transparent focus:ring-2 focus:ring-blue-500
          `}
        />
        <span
          className={`
          text-sm font-medium
          ${isDarkTheme ? "text-gray-200" : "text-gray-700"}
        `}
        >
          {isChecked ? "Uncheck me!" : "Check me!"}
        </span>
      </label>
    </BaseNode>
  );
};
