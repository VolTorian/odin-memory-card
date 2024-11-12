import { useState, useEffect } from "react";

function Card({name, src, onClick}) {
    return (
        <div className="card" onClick={onClick}>
            <img src={src} alt={name} />
            <div className="card-name">{name}</div>
        </div>
    )
}

export default Card;