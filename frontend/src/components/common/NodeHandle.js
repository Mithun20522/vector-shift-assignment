import { Handle, Position } from "reactflow";

export const NodeHandle = ({ type, config, nodeId, index, total, isDark }) => (
  <Handle
    type={type}
    position={type === "target" ? Position.Left : Position.Right}
    id={`${nodeId}-${config.id}`}
    className={`w-3 h-3 ${isDark ? "bg-blue-400" : "bg-blue-500"}`}
    style={{
      top: `${((index + 1) * 100) / (total + 1)}%`,
      borderRadius: "6px",
      ...config.style,
    }}
  />
);
