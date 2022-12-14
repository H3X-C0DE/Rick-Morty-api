// CSS
import "./styles/basic.css";
import "./styles/global.css";
import "./styles/lengths.css";
import "./styles/palette.css";

// Libraries
import FetchData from "./commponents/FetchData";

function App() {
  return (
    <>
      <h1>Rick & Morty API</h1>
      <FetchData />
    </>
  );
}

export default App;
