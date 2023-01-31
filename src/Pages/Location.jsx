import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InGroup";

export default function Episodes() {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="headerTitle">
        Location :
        <span className="headerTitle__name">
          {" "}
          {name === "" ? "Unknown" : name}
        </span>
      </h1>
      <h3 className="headerTitle__underText">
        Dimension: {dimension === "" ? "Unknown" : dimension}
      </h3>
      <h4 className="headerTitle__underText">
        Type: {type === "" ? "Unknown" : type}
      </h4>
      <div className="container">
        <div className="row">
          <InputGroup name="Location" changeID={setNumber} total={126} />
          <div className="container">
            <div className="cards">
              <Card page="/location/" results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
