import React, { useState } from "react";
import { BaseNode } from "../BaseNode";

export const ToggleNode = ({ id }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <BaseNode
      id={id}
      title="Toggle Node"
      inputs={[{ id: "input-1", style: {} }]}
      outputs={[{ id: "output-1", style: {} }]}
    >
      <div>
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? "Deactivate" : "Activate"}
        </button>
        <div>Status: {isActive ? "Active" : "Inactive"}</div>
      </div>
    </BaseNode>
  );
};
