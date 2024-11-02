import { NodeHandle } from "../common/NodeHandle";
import { NODE_STYLES } from "../../constants";

export const BaseNode = ({
  id,
  title,
  children,
  inputs = [],
  outputs = [],
  style = {},
}) => (
  <div style={{ ...NODE_STYLES.container, ...style }}>
    {inputs.map((input, index) => (
      <NodeHandle
        key={`input-${input.id}`}
        type="target"
        config={input}
        nodeId={id}
        index={index}
        total={inputs.length}
      />
    ))}

    <div style={NODE_STYLES.title}>{title}</div>
    <div style={NODE_STYLES.content}>{children}</div>

    {outputs.map((output, index) => (
      <NodeHandle
        key={`output-${output.id}`}
        type="source"
        config={output}
        nodeId={id}
        index={index}
        total={outputs.length}
      />
    ))}
  </div>
);
