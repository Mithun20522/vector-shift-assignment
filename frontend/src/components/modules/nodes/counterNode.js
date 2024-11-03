import { useState } from "react";

import { useTheme } from "../../../context/themeProvider";
import { BaseNode } from "../BaseNode";

export const CounterNode = ({ id }) => {
  const [count, setCount] = useState(0);
  const { isDarkTheme } = useTheme();

  const decrementCounter = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const buttonClass = `
    px-3 py-1 rounded-md
    ${
      isDarkTheme
        ? "bg-gray-700 hover:bg-gray-600"
        : "bg-gray-200 hover:bg-gray-300"
    }
    transition-colors duration-200
  `;

  return (
    <BaseNode
      id={id}
      title="Counter"
      inputs={[{ id: "input-1", style: {} }]}
      outputs={[{ id: "output-1", style: {} }]}
    >
      <div className="flex items-center space-x-4">
        <button className={buttonClass} onClick={decrementCounter}>
          -
        </button>
        <span className={isDarkTheme ? "text-gray-200" : "text-gray-700"}>
          {count}
        </span>
        <button className={buttonClass} onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </BaseNode>
  );
};
