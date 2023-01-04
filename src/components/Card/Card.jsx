import React from "react";
import { Link } from "react-router-dom";

const Card = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((infoData) => {
      let { id, image, name, status, origin, species, type } = infoData;

      return (
        <Link
          className="card"
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
        >
          <img src={image} class="card__image" alt={image} />
          <div class="card__overlay">
            <div class="card__header">
              <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>

              <div class="card__header-text">
                <h3 class="card__title">{name}</h3>
                {(() => {
                  if (status === "Dead") {
                    return <p className="isDead"> 🔴{status}</p>;
                  } else if (status === "Alive") {
                    return <p className="isAlive"> 🟢 {status}</p>;
                  } else {
                    return <p className="isUnknown"> 🔵 {status}</p>;
                  }
                })()}
              </div>
            </div>

            <div class="card__description">
              <p className="">Origin: {origin.name}</p>
              <p className="">Species: {species}</p>
              <p className=""></p>
              {(() => {
                if (type === "") {
                  return <p className="no-type"></p>;
                } else {
                  return <p className="type">Type: {type}</p>;
                }
              })()}
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Card;
