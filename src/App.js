import Palette from "./Palette";
import seedColors from "./seedColor";
import {generatePalette} from './colorHelpers'

function App() {
  return (
    <>
      <Palette palette={generatePalette(seedColors[4])}/>
    </>
  );
}

export default App;
