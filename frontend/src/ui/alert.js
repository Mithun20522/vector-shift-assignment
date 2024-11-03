import React, { useEffect } from "react";
import { useTheme } from "../context/themeProvider";

export const Alert = ({ title, children, onClose, isVisible, position }) => {
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed ${position}-4 right-4 w-96 p-4 rounded-lg shadow-lg transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      } ${
        isDarkTheme ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="font-semibold text-lg">{title}</div>
        <button
          onClick={onClose}
          className={`p-1 rounded-full hover:bg-opacity-10 ${
            isDarkTheme ? "hover:bg-gray-300" : "hover:bg-gray-500"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
};
