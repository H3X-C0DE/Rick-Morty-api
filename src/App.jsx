// CSS
import "./styles/global.css";
import "./styles/lengths.css";
import "./styles/palette.css";

// Libraries
import FetchData from "./commponents/FetchData";

function App() {
  return (
    <>
      <h1>Rick & Morty Wiki</h1>
      <h2>Work in Progress</h2>
      <FetchData />
    </>
  );
}

export default App;
