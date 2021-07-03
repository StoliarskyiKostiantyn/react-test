// import PaintingList from "./components/PaintingList";
// import paintings from "./painting.json";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Section from "./components/Section";

export default function App() {
  return (
    <div>
      {/* <Section title="Top of the week"> */}
      {/* <PaintingList items={paintings} /> */}
      <ColorPicker options={colorPickerOptions} />
      {/* </Section>
      <Section /> */}
    </div>
  );
}

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
