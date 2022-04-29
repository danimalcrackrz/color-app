import Palette from "./Palette";
import seedColors from "./seedColor";

function App() {
  return (
    <>
      <Palette {...seedColors[2]}/>
    </>
  );
}

export default App;
