import { useTheme } from "../../../context/themeProvider";
import { BaseNode } from "../BaseNode";

export const CheckboxNode = ({ data }) => {
  const { isDarkTheme } = useTheme();

  return (
    <BaseNode title="Checkbox" inputs={data.inputs} outputs={data.outputs}>
      <label className="flex items-center space-x-3 cursor-pointer">
        <input
          type="checkbox"
          checked={data.checked}
          onChange={(e) => data.onChange(e.target.checked)}
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
          {data.label || (data.checked ? "Uncheck me!" : "Check me!")}
        </span>
      </label>
    </BaseNode>
  );
};
