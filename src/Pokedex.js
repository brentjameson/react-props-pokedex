import React from 'react';
import Pokecard from './Pokecard';
import "./Pokedex.css"

const Pokedex = ({characters}) => {
    return (
        <div className="Pokedex">
            <h1 className="Pokedex-header">Pokedex</h1>
            {characters.map(c => <Pokecard
                id={c.id}
                name={c.name}
                type={c.type}
                baseExperience={c.base_experience}
            />)}
        </div>
    )
}

export default Pokedex;