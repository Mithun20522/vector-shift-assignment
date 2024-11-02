import React, { useState } from "react";
import { InputControl } from "../../controls/InputControl";
import { BaseNode } from "../BaseNode";

export const MathNode = ({ id }) => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  const calculateSum = () => {
    setResult(value1 + value2);
  };

  return (
    <BaseNode
      id={id}
      title="Math Node"
      inputs={[
        { id: "input-1", style: {} },
        { id: "input-2", style: {} },
      ]}
      outputs={[{ id: "output-1", style: {} }]}
    >
      <InputControl
        type="number"
        value={value1}
        onChange={setValue1}
        placeholder="Value 1"
      />
      <InputControl
        type="number"
        value={value2}
        onChange={setValue2}
        placeholder="Value 2"
      />
      <button onClick={calculateSum}>Calculate</button>
      <div>Result: {result}</div>
    </BaseNode>
  );
};
