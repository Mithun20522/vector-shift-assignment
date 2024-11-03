import { NodeHandle } from "../common/NodeHandle";
import { getNodeStyles } from "../../constants";
import { useTheme } from "../../context/themeProvider";

export const BaseNode = ({
  id,
  title,
  children,
  inputs = [],
  outputs = [],
  style = {},
}) => {
  const { isDarkTheme } = useTheme();
  const nodeStyles = getNodeStyles(isDarkTheme);

  return (
    <div style={{ ...nodeStyles.container, ...style }}>
      {inputs.map((input, index) => (
        <NodeHandle
          key={`input-${input.id}`}
          type="target"
          config={input}
          nodeId={id}
          index={index}
          total={inputs.length}
          isDark={isDarkTheme}
        />
      ))}

      <div style={nodeStyles.title}>{title}</div>
      <div style={nodeStyles.content}>{children}</div>

      {outputs.map((output, index) => (
        <NodeHandle
          key={`output-${output.id}`}
          type="source"
          config={output}
          nodeId={id}
          index={index}
          total={outputs.length}
          isDark={isDarkTheme}
        />
      ))}
    </div>
  );
};
