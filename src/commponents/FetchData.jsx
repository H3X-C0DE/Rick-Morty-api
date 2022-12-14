import { useState, useEffect } from "react";
import "../styles/card.css";
/**
 * Fetches data from some API and displays it
 */
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
    <ul>
      {fetchedData &&
        fetchedData.map((character, index) => {
          return (
            <>
              <div className="card" id={character.id}>
                <img src={character.image} alt="" />
                <li key={index}>{character.name}</li>
                <li key={index}>{character.status}</li>
                <li key={index}>{character.gender}</li>
              </div>
            </>
          );
        })}
    </ul>
  );
}

export default FetchData;
