import { Handle, Position } from "reactflow";
export const NodeHandle = ({ type, config, nodeId, index, total }) => (
  <Handle
    type={type}
    position={type === "target" ? Position.Left : Position.Right}
    id={`${nodeId}-${config.id}`}
    style={{
      top: `${((index + 1) * 100) / (total + 1)}%`,
      ...config.style,
    }}
  />
);
