import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species, type } =
    fetchedData;

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
            <p className="card__description__p">
              Gender: <span className="card__description__span">{gender}</span>
            </p>
          </div>
          <div className="">
            <p className="card__description__p">
              Location:{" "}
              <span className="card__description__span">{location.name}</span>
            </p>
          </div>
          <div className="">
            <p className="card__description__p">
              Origin:{" "}
              <span className="card__description__span">{origin.name}</span>
            </p>
          </div>
          <div className="">
            <p className="card__description__p">
              Species:{" "}
              <span className="card__description__span">{species}</span>
            </p>
          </div>
          {(() => {
            if (type === "") {
              return <p className="card__description__p no-type"></p>;
            } else {
              return (
                <p className="card__description__p type">
                  Type: <span className="card__description__span">{type}</span>
                </p>
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
