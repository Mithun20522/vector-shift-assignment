import { useStore } from "./store";
import { useState, useCallback } from "react";
import { useTheme } from "./context/themeProvider";
import { shallow } from "zustand/shallow";
import { toast } from "sonner";
import { Alert } from "./ui/alert";
import { Loader2Icon } from "lucide-react";

const pipelineSelector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

const API_URL = "https://backend-vector-shift-assignment.onrender.com";

export const SubmitButton = () => {
  const { nodes, edges } = useStore(pipelineSelector, shallow);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const { isDarkTheme } = useTheme();

  const handleSubmit = useCallback(async () => {
    if (!nodes.length) {
      toast.error("Please add some nodes to the pipeline");
      return;
    }

    const pipelineData = {
      nodes: nodes,
      edges: edges,
    };

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("pipeline", JSON.stringify(pipelineData));

      const response = await fetch(`${API_URL}/pipelines/parse`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Analysis result:", result);

      setIsLoading(false);
      toast.success("Analysis completed");
      setAnalysisResult(result);
      setShowAlert(true);
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      setIsLoading(false);
      setShowAlert(false);
      toast.error(error.message || "Failed to analyze pipeline");
    }
  }, [nodes, edges]);

  const buttonClass = `
    px-4 py-2 rounded-md font-semibold
    ${
      isDarkTheme
        ? "bg-green-600 hover:bg-green-700 text-white"
        : "bg-green-500 hover:bg-green-600 text-white"
    }
    transition-colors duration-200
    ${loading ? "opacity-75 cursor-not-allowed" : ""}
  `;

  return (
    <>
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={handleSubmit}
          className={buttonClass}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <Loader2Icon className="w-5 h-5 animate-spin mr-2" />
              <span>Loading...</span>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </div>

      {showAlert && (
        <Alert
          title="Pipeline Analysis Results"
          isVisible={showAlert}
          onClose={() => setShowAlert(false)}
          position="bottom"
        >
          {analysisResult && (
            <div className="space-y-2">
              <p>Number of nodes: {analysisResult.num_nodes}</p>
              <p>Number of edges: {analysisResult.num_edges}</p>
              <p>Is DAG: {analysisResult.is_dag ? "Yes" : "No"}</p>
            </div>
          )}
        </Alert>
      )}
    </>
  );
};
