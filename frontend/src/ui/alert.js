import React, { useEffect, useCallback } from "react";
import { useTheme } from "../context/themeProvider";

export const Alert = ({
  title,
  children,
  onClose,
  isVisible,
  position = "bottom",
}) => {
  const { isDarkTheme } = useTheme();

  const handleClose = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(handleClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, handleClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div
        className={`
          relative w-full max-w-sm rounded-lg shadow-lg 
          transition-all duration-300 transform
          ${
            isDarkTheme ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
          }
          border ${isDarkTheme ? "border-gray-700" : "border-gray-200"}
          p-4
        `}
      >
        <div className="flex justify-between items-start mb-2">
          <div className="font-semibold text-lg">{title}</div>
          <button
            onClick={handleClose}
            className={`p-1 rounded-full hover:bg-opacity-10 
              ${isDarkTheme ? "hover:bg-gray-300" : "hover:bg-gray-500"}
              transition-colors duration-200`}
            aria-label="Close"
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
    </div>
  );
};
