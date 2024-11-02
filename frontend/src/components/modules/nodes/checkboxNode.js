import { BaseNode } from "../BaseNode";
export const CheckboxNode = ({ data }) => {
  const handleChange = (event) => {
    data.onChange(event.target.checked);
  };

  return (
    <BaseNode title="Checkbox Node" inputs={data.inputs} outputs={data.outputs}>
      <label>
        <input type="checkbox" checked={data.checked} onChange={handleChange} />
        {data.label
          ? data.checked
            ? `Un Check me! ${data.label}`
            : `Check me! ${data.label}`
          : data.checked
          ? "Un Check me!"
          : "Check me!"}
      </label>
    </BaseNode>
  );
};
