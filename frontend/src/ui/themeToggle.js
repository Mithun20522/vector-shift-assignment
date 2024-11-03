import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "../context/themeProvider";

const iconClassname = "w-6 h-6 text-gray-700";

export const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-4 right-4 z-50 p-2 rounded-lg shadow-lg
        transition-colors duration-200 bg-white hover:bg-gray-100
        ${
          !isDarkTheme
            ? "bg-gray-700 hover:bg-gray-600"
            : "bg-white hover:bg-gray-100"
        }
      `}
    >
      {isDarkTheme ? (
        <SunIcon className="w-6 h-6 text-gray-700" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
};
