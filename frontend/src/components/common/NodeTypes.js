import { InputNode } from "../modules/nodes/inputNode";
import { LLMNode } from "../modules/nodes/llmNode";
import { MathNode } from "../modules/nodes/mathNode";
import { OutputNode } from "../modules/nodes/outputNode";
import { TextNode } from "../modules/nodes/textNode";
import { CounterNode } from "../modules/nodes/counterNode";
import { ToggleNode } from "../modules/nodes/toggleNode";
import { CheckboxNode } from "../modules/nodes/checkboxNode";
import { NumberInputNode } from "../modules/nodes/numberInputNode";

export const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  math: MathNode,
  counter: CounterNode,
  toggle: ToggleNode,
  checkbox: CheckboxNode,
  numberinput: NumberInputNode,
};
