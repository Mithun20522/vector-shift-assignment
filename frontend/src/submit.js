// submit.js
import { useStore } from "./store";
import { useState } from "react";
import { useTheme } from "./context/themeProvider";
import { Alert } from "./ui/alert";
import { shallow } from "zustand/shallow";
import { toast } from "sonner";

const pipelineSelector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(pipelineSelector, shallow);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setIsloading] = useState(false);
  const { isDarkTheme } = useTheme();
  console.log("showalter: ", showAlert);
  const handleSubmit = async () => {
    const pipelineData = {
      nodes: nodes,
      edges: edges,
    };
    try {
      setIsloading(true);
      const formData = new FormData();
      formData.append("pipeline", JSON.stringify(pipelineData));

      const response = await fetch(
        "https://backend-vector-shift-assignment.onrender.com/pipelines/parse",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      setIsloading(false);
      toast.success("Analysis completed");
      setAnalysisResult(result);
      setShowAlert(true);
    } catch (error) {
      setIsloading(false);
      toast.error(error.message);
      console.error("Error submitting pipeline:", error);
    }
  };

  const buttonClass = `
        px-4 py-2 rounded-md font-semibold
        ${
          isDarkTheme
            ? "bg-green-600 hover:bg-green-700 text-white"
            : "bg-green-500 hover:bg-green-600 text-white"
        }
        transition-colors duration-200
    `;

  return (
    <>
      <div className="fixed bottom-5 left-1/2 z-50">
        <button
          onClick={handleSubmit}
          className={buttonClass}
          disabled={loading}
        >
          {loading ? "analysing.." : "submit"}
        </button>
      </div>

      <Alert
        title="Pipeline Analysis Results"
        isVisible={showAlert}
        onClose={() => setShowAlert(false)}
        position={"bottom"}
      >
        {analysisResult && (
          <div className="space-y-2">
            <p>Number of nodes: {analysisResult.num_nodes}</p>
            <p>Number of edges: {analysisResult.num_edges}</p>
            <p>Is DAG: {analysisResult.is_dag ? "Yes" : "No"}</p>
          </div>
        )}
      </Alert>
    </>
  );
};
