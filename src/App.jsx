// CSS
import "./styles/global.css";
import "./styles/lengths.css";
import "./styles/palette.css";

// Libraries
import FetchData from "./components/FetchData";
import Pagination from "./components/Pagination/Pagination";

function App() {
  return (
    <>
      <FetchData />
      <Pagination />
    </>
  );
}

export default App;
