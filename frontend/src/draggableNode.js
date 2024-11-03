// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`
        ${type} 
        w-full py-3 px-2
        flex items-center justify-center flex-col 
        bg-gray-700 hover:bg-gray-600 
        rounded-lg shadow-md 
        cursor-grab 
        transition-colors duration-200
        text-sm md:text-base
      `}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className="text-white font-medium">{label}</span>
    </div>
  );
};
