import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="card details">
      <div className="card-info">
        <h1 className="name">{name}</h1>

        <img src={image} alt="" />

        {(() => {
          if (status === "Dead") {
            return (
              <div>
                <span>Status: </span>
                <span className="isDead">{status}</span>
              </div>
            );
          } else if (status === "Alive") {
            return (
              <div>
                <span>Status: </span>
                <span className="isAlive">{status}</span>
              </div>
            );
          } else {
            return (
              <div>
                <span>Status: </span>
                <span className="isUnknown">{status}</span>
              </div>
            );
          }
        })()}
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
