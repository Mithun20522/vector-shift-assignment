import { BaseNode } from "../BaseNode";
import { InputControl } from "../../controls/InputControl";

export const NumberInputNode = ({ data }) => {
  const handleChange = (value) => {
    console.log("values: ", value);
    data.onChange(value);
  };

  return (
    <BaseNode
      title="Number Input Node"
      inputs={data.inputs}
      outputs={data.outputs}
    >
      <InputControl
        type="number"
        value={data.value}
        onChange={handleChange}
        placeholder="Enter a number"
      />
    </BaseNode>
  );
};
