import React from "react";
import { Link } from "react-router-dom";
import CardDetails from "./CardDetails";

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
          <img src={image} className="card__image" alt={image} />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>

              <div className="card__header-text">
                <h3 className="card__title">{name}</h3>
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

            <div className="card__description">
              <p className="card__description__p">
                Origin:{" "}
                <span className="card__description__span">{origin.name}</span>
              </p>
              <p className="card__description__p">
                Species:{" "}
                <span className="card__description__span">{species}</span>
              </p>
              <p className="card__description__p"></p>
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
        </Link>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Card;
