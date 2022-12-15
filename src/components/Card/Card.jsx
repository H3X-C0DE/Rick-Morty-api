import React from "react";
import { Link } from "react-router-dom";

const Card = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((infoData) => {
      let { id, image, name, status, location } = infoData;

      return (
        <Link style={{ textDecoration: "none" }} to={`${page}${id}`} key={id}>
          <div className="card">
            <img src={image} alt="" />
            <div className="card-info">
              <div className="name">{name}</div>
              <div className="">
                <div className="">Last Location</div>
                <div className="">{location.name}</div>

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
              </div>
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
