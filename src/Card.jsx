import { useState, useEffect } from "react";

function Card({name, src, notifyClickedState}) {
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        notifyClickedState(clicked);
        setClicked(true);
    }

    return (
        <div className="card" onClick={handleClick}>
            <img src={src} alt={name} />
            <div className="card-name">{name}</div>
        </div>
    )
}

export default Card;