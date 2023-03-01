import React, {useState} from "react";

  function Planeteer ({ planeteers }) {
    const [showBio, setShowBio] = useState(true);
    const yearDate = new Date().getFullYear();
    
    function handleClick () {
      setShowBio((showBio) => !showBio);
    }
    return (
      <>
        {planeteers.map((planeteer) => {
          return (
            <li key={planeteer.id} className="cards__item">
              <div className="card">
                <img
                  src={planeteer.pictureUrl}
                  alt={planeteer.name}
                  className="card__image"
                  onClick={handleClick}
                />
                <div className="card__content">
                  <div className="card__title">{planeteer.name}</div>
                  <p className="card__text">
                    {showBio ? planeteer.bio : planeteer.quote}
                  </p>
                  <div className="card__detail">
                    <p>{planeteer.twitter}</p>
                    <p>
                      {planeteer.fromUSA ? "USA-Based" : "Working overseas"}
                    </p>
                    <p>{yearDate - planeteer.born} years old</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </>
    );
  }


export default Planeteer;
