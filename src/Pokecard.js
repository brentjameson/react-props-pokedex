import React from 'react';
import "./Pokecard.css"

const Pokecard = ({id, name, type, baseExperience}) => {
    return (
        <div className="Pokecard">
            <h3>{name}</h3>
            <img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} ></img>
            <div>type: {type}</div>
            <div>experience: {baseExperience}</div>
        </div>
    )
}

export default Pokecard;