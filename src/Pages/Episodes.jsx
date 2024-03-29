import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InGroup";

export default function Episodes() {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="App">
      <div className="banner">
        <div className="banner__title"></div>
      </div>
      <div className="container">
        <h1 className="infoTitle">
          Episode name :{" "}
          <span className="infoTitle__name">
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className="infoTitle__underText">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
        <div className="row">
          <InputGroup name="Episode" changeID={setID} total={51} />
          <div className="container">
            <div className="cards">
              <Card page="/episodes/" results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
