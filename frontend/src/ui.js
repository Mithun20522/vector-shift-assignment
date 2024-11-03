// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { nodeTypes } from "./components/common/NodeTypes";
import { PipelineToolbar } from "./toolbar";
import { ThemeToggle } from "./ui/themeToggle";
import "reactflow/dist/style.css";
import { useTheme } from "./context/themeProvider";
import { SubmitButton } from "./submit";

const gridSize = 20;
const proOptions = { hideAttribution: true };

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const { isDarkTheme, toggleTheme } = useTheme();

  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData("application/reactflow")) {
        const appData = JSON.parse(
          event.dataTransfer.getData("application/reactflow")
        );
        const type = appData?.nodeType;

        if (typeof type === "undefined" || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: {
            ...getInitNodeData(nodeID, type),
            onChange: (value) => {
              console.log(`Node ${nodeID} changed to ${value}`);
            },
            value: type === "numberInput" ? 0 : false,
          },
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <div
      className={`min-h-screen ${isDarkTheme ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <PipelineToolbar />
      <ThemeToggle isDark={isDarkTheme} onToggle={toggleTheme} />

      <div
        ref={reactFlowWrapper}
        className={`
          w-screen h-screen fixed top-0 left-0
          ${isDarkTheme ? "bg-gray-800" : "bg-white"}
          transition-colors duration-300
        `}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType="smoothstep"
          className={isDarkTheme ? "bg-gray-800" : "bg-white"}
        >
          <Background
            color={isDarkTheme ? "#4B5563" : "#E5E7EB"}
            gap={gridSize}
          />
          <Controls
            className={`
              ${!isDarkTheme ? "bg-gray-700" : "bg-white"} 
              rounded-lg shadow-lg
            `}
          />
          <MiniMap
            className={`hidden sm:block
              ${!isDarkTheme ? "bg-gray-700" : "bg-white"}
              rounded-lg shadow-lg
            `}
            nodeColor={!isDarkTheme ? "#9CA3AF" : "#4B5563"}
            maskColor={
              !isDarkTheme
                ? "rgba(55, 65, 81, 0.5)"
                : "rgba(229, 231, 235, 0.5)"
            }
          />
        </ReactFlow>
        <SubmitButton />
      </div>
    </div>
  );
};
