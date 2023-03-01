import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({planeteers}) {
  return (
    <ul className="cards">
      <Planeteer planeteers={planeteers} />
    </ul>
  );
}

export default PlaneteersContainer;
