import React from "react";
import { BaseNode } from "../BaseNode";
import { InputControl } from "../../controls/InputControl";

export const NumberInputNode = ({ data }) => {
  const handleChange = (value) => {
    data.onChange(value);
  };

  return (
    <BaseNode title="Number Input" inputs={data.inputs} outputs={data.outputs}>
      <div className="w-full">
        <InputControl
          type="number"
          value={data.value}
          onChange={handleChange}
          placeholder="Enter a number"
        />
      </div>
    </BaseNode>
  );
};
