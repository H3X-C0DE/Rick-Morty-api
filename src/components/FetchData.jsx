import { useState, useEffect } from "react";
import Search from "../components/Search/Search";
import Card from "../components/Card/Card";
import Pagination from "./Pagination/Pagination";
import Navbar from "./Navbar/Navbar";
import Filter from "./Filter/Filter";

// IMPORT STYLES //
import "../index.css";

// IMPORT COMPONENTS //
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "../Pages/Episodes";
import Location from "../Pages/Location";
import CardDetails from "../components/Card/CardDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/Episodes/" element={<Episodes />} />
        <Route path="/Episodes/:id" element={<CardDetails />} />

        <Route path="/Location/" element={<Location />} />
        <Route path="/Location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <div className="banner">
        <div className="banner__title"></div>
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
        <div className="container">
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
          <div className="pag-box">
            <Pagination
              info={info}
              pageNumber={pageNumber}
              updatePageNumber={updatePageNumber}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="cards">
            <Card page="/" results={results} />
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default App;
