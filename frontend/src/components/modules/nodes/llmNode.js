// llmNode.js
import { useTheme } from "../../../context/themeProvider";
import { BaseNode } from "../BaseNode";

export const LLMNode = ({ id }) => {
  const { isDarkTheme } = useTheme();

  return (
    <BaseNode
      title="LLM"
      inputs={[
        { id: `${id}-system`, style: {} },
        { id: `${id}-prompt`, style: {} },
      ]}
      outputs={[{ id: `${id}-response`, style: {} }]}
    >
      <div
        className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}
      >
        Language Model Node
      </div>
    </BaseNode>
  );
};
