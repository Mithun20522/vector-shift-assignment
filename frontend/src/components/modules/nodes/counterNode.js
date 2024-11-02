import React, { useState } from "react";
import { BaseNode } from "../BaseNode";

export const CounterNode = ({ id }) => {
  const [count, setCount] = useState(0);

  return (
    <BaseNode
      id={id}
      title="Counter Node"
      inputs={[{ id: "input-1", style: {} }]}
      outputs={[{ id: "output-1", style: {} }]}
    >
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </BaseNode>
  );
};
