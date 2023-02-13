import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
    <div className="details">
      <div className="card details__card">
        <Link className="details__back-btn" to="/">
          ❌
        </Link>

        <div className="card-info">
          <h1 className="name details__name">{name}</h1>
          <img src={image} alt="" />

          <div className="content details__content">
            {(() => {
              if (status === "Dead") {
                return (
                  <p className="isDead">
                    Status:{" "}
                    <span className="card__description__span">
                      {" "}
                      {status} 🔴
                    </span>
                  </p>
                );
              } else if (status === "Alive") {
                return (
                  <p className="isAlive">
                    Status:{" "}
                    <span className="card__description__span">
                      {" "}
                      {status} 🟢
                    </span>
                  </p>
                );
              } else {
                return (
                  <p className="isUnknown">
                    {" "}
                    Status:{" "}
                    <span className="card__description__span"> {status} </span>
                    🔵
                  </p>
                );
              }
            })()}
            <div className="">
              <p className="card__description__p">
                Gender:{" "}
                <span className="card__description__span">{gender}</span>
              </p>
            </div>
            <div className="">
              <p className="card__description__p">
                Location:{" "}
                <span className="card__description__span">
                  {location?.name}
                </span>
              </p>
            </div>
            <div className="">
              <p className="card__description__p">
                Origin:{" "}
                <span className="card__description__span">{origin?.name}</span>
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
                    Type:{" "}
                    <span className="card__description__span">{type}</span>
                  </p>
                );
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
