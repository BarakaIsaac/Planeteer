import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";

const url = `http://localhost:8003/planeteers`;

function RandomButton({planeteers, planeteerUpdate}) {
  function handleClick() {
    const randomPlaneteer = getRandomPlaneteer();
    console.log("For the advanced deliverables", randomPlaneteer);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(randomPlaneteer)
    })
      .then(response => response.json())
      .then((data) => {
        planeteerUpdate(data);
      });
  }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
        Click to Add a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
