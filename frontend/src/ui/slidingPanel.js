import React from "react";
import { XIcon } from "lucide-react";
import { useTheme } from "../context/themeProvider";

export const SlidingPanel = ({
  isOpen,
  onClose,
  title,
  children,
  position = "left",
}) => {
  const { isDarkTheme } = useTheme();

  const positionClasses = {
    left: isOpen ? "left-0" : "-left-96",
    right: isOpen ? "right-0" : "-right-96",
  };

  return (
    <div
      className={`
        fixed top-0 ${positionClasses[position]} h-full w-80
        ${!isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-800"}
        shadow-2xl transition-all duration-300 ease-in-out z-40 overflow-y-auto
        md:w-96
      `}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              !isDarkTheme ? "hover:bg-gray-700" : "hover:bg-gray-200"
            }`}
          >
            <XIcon className={!isDarkTheme ? "text-white" : "text-gray-800"} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
