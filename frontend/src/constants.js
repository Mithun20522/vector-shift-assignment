export const getNodeStyles = (isDarkTheme) => ({
  container: {
    width: 200,
    height: "auto",
    minHeight: 80,
    border: "none",
    borderRadius: "0.5rem",
    padding: "1rem",
    background: isDarkTheme ? "#374151" : "#F2F2F2",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
  title: {
    color: isDarkTheme ? "#F3F4F6" : "#111827",
    fontWeight: "600",
    marginBottom: "0.75rem",
  },
  content: {
    fontSize: "0.875rem",
    color: isDarkTheme ? "#D1D5DB" : "#374151",
  },
  select: {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "0.5rem",
    backgroundColor: isDarkTheme ? "#4B5563" : "#F3F4F6",
    color: isDarkTheme ? "#F3F4F6" : "#111827",
    border: "none",
    borderRadius: "0.375rem",
    outline: "none",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "0.5rem",
    backgroundColor: isDarkTheme ? "#4B5563" : "#F3F4F6",
    color: isDarkTheme ? "#F3F4F6" : "#111827",
    border: "none",
    borderRadius: "0.375rem",
    outline: "none",
  },
});
