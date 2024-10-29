function Card({name, key, src}) {
    return (
        <div className="card" id={key}>
            <img src={src} alt={name} />
            <div className="card-name">{name}</div>
        </div>
    )
}

export default Card;