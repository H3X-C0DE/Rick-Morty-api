import { useState, useEffect } from "react";
import "../styles/card.css";

//  Fetches data from some API and displays it

function FetchData() {
  // Somewhere to store our data
  const [fetchedData, setFetchedData] = useState(null);
  const API = `https://rickandmortyapi.com/api/character`;
  // Using async await
  useEffect(() => {
    async function getData() {
      const response = await fetch(API);
      const data = await response.json();

      setFetchedData(data.results);
    }

    getData();
  }, []);

  return (
    <div className="card-container">
      {fetchedData &&
        fetchedData.map((character, index) => {
          return (
            <div key={index} id={index} className="card">
              <img src={character.image} alt={character.name} />
              <ul>
                <li className="name">{character.name}</li>
                <li>Sex: {character.gender}</li>
                <li>Status: {character.status}</li>
                <li>Origin: {character.origin.name}</li>
                <li>Unique trait: {character.type}</li>
              </ul>
            </div>
          );
        })}
    </div>
  );
}

export default FetchData;
