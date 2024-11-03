import { useTheme } from "../../context/themeProvider";

export const SelectControl = ({ value, onChange, options }) => {
  const { isDarkTheme } = useTheme();

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`
        w-full px-3 py-2 mb-2 rounded-md 
        ${
          isDarkTheme
            ? "bg-gray-700 text-gray-100"
            : "bg-gray-100 text-gray-900"
        }
        border-none outline-none transition-colors duration-200
        focus:ring-2 focus:ring-blue-500
      `}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
