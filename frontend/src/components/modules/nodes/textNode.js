import React from "react";
import { useTheme } from "../../../context/themeProvider";
import { BaseNode } from "../BaseNode";
import { useNodeState } from "../../hooks/useNodeState";
import { useNodeActions } from "../../hooks/useNodeActions";
import { NodeHandle } from "../../common/NodeHandle";

export const TextNode = ({ id, data }) => {
  const { isDarkTheme } = useTheme();
  const [nodeState, updateNodeState] = useNodeState({
    text: data?.text,
    variables: [],
    handleConfigs: [],
  });

  const { textareaRef, handleTextChange, adjustTextareaHeight } =
    useNodeActions(nodeState, updateNodeState);

  const inputClass = `
    w-full px-3 py-2 rounded-md resize-none overflow-hidden
    ${isDarkTheme ? "bg-gray-700 text-gray-100" : "bg-gray-100 text-gray-900"}
    border outline-none transition-colors duration-200 min-h-[2.5rem]
  `;

  const labelClass = `
    block text-sm font-medium mb-1
    ${isDarkTheme ? "text-gray-300" : "text-gray-700"}
  `;

  return (
    <BaseNode title="Text Node">
      <div className="space-y-3 min-w-sm">
        {nodeState.handleConfigs.map((config, index) => (
          <NodeHandle
            key={config.id}
            type="target"
            config={config}
            nodeId={id}
            index={index}
            total={nodeState.handleConfigs.length}
            isDark={isDarkTheme}
          />
        ))}

        <div>
          <label className={labelClass}>Text</label>
          <textarea
            ref={textareaRef}
            value={nodeState.text}
            onChange={handleTextChange}
            className={inputClass}
            rows={1}
            onInput={adjustTextareaHeight}
          />
        </div>
      </div>
    </BaseNode>
  );
};

export default TextNode;
