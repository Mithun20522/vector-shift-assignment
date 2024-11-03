import React, { useState } from "react";
import { BaseNode } from "../BaseNode";
import { InputControl } from "../../controls/InputControl";

export const NumberInputNode = ({ data }) => {
  const [value, setValue] = useState(0);
  const handleChange = (value) => {
    data.onChange(value);
    setValue(value);
  };

  return (
    <BaseNode
      title="Number Input"
      inputs={[{ id: "input-1", style: {} }]}
      outputs={[{ id: "output-1", style: {} }]}
    >
      <div className="w-full">
        <InputControl
          type="number"
          value={value}
          onChange={handleChange}
          placeholder="Enter a number"
        />
      </div>
    </BaseNode>
  );
};
