import React from "react";
import "./Cards.scss";

function Card({ name, genre }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{genre}</p>
        </div>
    );
}

export default Card;
