// toolbar.js

import { useState } from "react";
import { CombineIcon } from "lucide-react";
import { DraggableNode } from "./draggableNode";
import { SlidingPanel } from "./ui/slidingPanel";

const NODE_TYPES = [
  { type: "customInput", label: "Input" },
  { type: "llm", label: "LLM" },
  { type: "customOutput", label: "Output" },
  { type: "text", label: "Text" },
  { type: "math", label: "Math" },
  { type: "counter", label: "Counter" },
  { type: "toggle", label: "Toggle" },
  { type: "checkbox", label: "Checkbox" },
  { type: "numberinput", label: "Number" },
];

export const PipelineToolbar = () => {
  const [isToolboxOpen, setToolboxOpen] = useState(false);

  return (
    <>
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        {!isToolboxOpen && (
          <button
            onClick={() => setToolboxOpen(true)}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-lg transition-colors duration-200"
          >
            <CombineIcon className="w-6 h-6 text-white" />
          </button>
        )}
      </div>

      <SlidingPanel
        isOpen={isToolboxOpen}
        onClose={() => setToolboxOpen(false)}
        title="Node components"
        position="left"
      >
        <div className="grid grid-cols-2 gap-3">
          {NODE_TYPES.map((node) => (
            <DraggableNode
              key={node.type}
              type={node.type}
              label={node.label}
            />
          ))}
        </div>
      </SlidingPanel>
    </>
  );
};
