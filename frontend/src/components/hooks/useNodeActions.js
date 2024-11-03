import { useEffect, useRef } from "react";

export const useNodeActions = (nodeState, updateNodeState) => {
  const textareaRef = useRef(null);

  const extractVariables = (text) => {
    const regex = /{{([a-zA-Z_$][a-zA-Z0-9_$]*)}}/g;
    const matches = [...text.matchAll(regex)];
    return [...new Set(matches.map((match) => match[1]))];
  };

  const generateHandleConfigs = (variables) => {
    return variables.map((variable) => ({
      id: variable,
      type: "target",
      style: {},
    }));
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "0px";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    updateNodeState("text", newText);

    const newVars = extractVariables(newText);
    updateNodeState("variables", newVars);

    const newHandleConfigs = generateHandleConfigs(newVars);
    updateNodeState("handleConfigs", newHandleConfigs);
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [nodeState.text]);

  return {
    textareaRef,
    handleTextChange,
    adjustTextareaHeight,
  };
};
