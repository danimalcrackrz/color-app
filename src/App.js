import Palette from "./Palette";
import seedColors from "./seedColor";
import {generatePalette} from './colorHelpers'

function App() {
  console.log(generatePalette(seedColors[2]))
  return (
    <>
      <Palette {...seedColors[2]}/>
    </>
  );
}

export default App;
