import { useCallback, useState } from "react";

export const useNodeState = (initialState) => {
  const [state, setState] = useState(initialState);

  const updateState = useCallback((key, value) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  return [state, updateState];
};
