import Palette from "./Palette";
import seedColors from "./seedColor";

function App() {
  return (
    <>
      <Palette {...seedColors[0]}/>
    </>
  );
}

export default App;
