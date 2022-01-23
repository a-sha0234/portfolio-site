import React from "react";
import codeArrow from "./codeArrow.png";

export default function Card(props) {
  return (
    <main className="card">
      <div className="card__display">
        <p>{props.name}</p>
        <button
          onClick={() => (window.location = props.url)}
          className="card__button"
        >
          Check out the code!
          <img
            src={codeArrow}
            alt="arrow to follow link"
            className="card__arrow"
          />
        </button>
      </div>
    </main>
  );
}
