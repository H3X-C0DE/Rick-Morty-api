import { useState, useEffect } from "react";
import Search from "./Search/Search";
import Card from "./Card/Card";
import Pagination from "./Pagination/Pagination";
import Navbar from "./Navbar/Navbar";
import Filter from "./Filter/Filter";

// IMPORT STYLES //

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Episodes from "./Pages/Episodes";
// import Location from "./Pages/Location";
import CardDetails from "./Card/CardDetails";
import "../index.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
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
      <h1 className="headerTitle">Characters</h1>

      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
          <Pagination
            info={info}
            pageNumber={pageNumber}
            updatePageNumber={updatePageNumber}
          />
          <div className="container">
            <div className="cards">
              <Card page="/" results={results} />
            </div>
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
