import { NODE_STYLES } from "../../constants";
export const InputControl = ({ type = "text", value, onChange, ...props }) => (
  <input
    type={type}
    value={value === undefined ? "" : value}
    onChange={(e) =>
      onChange(type === "number" ? Number(e.target.value) : e.target.value)
    }
    style={NODE_STYLES.input}
    {...props}
  />
);
