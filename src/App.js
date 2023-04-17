import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import pokemonCharacters from './pokemonCharacters';


function App() {
  return (
    <div className="App">
      <Pokedex characters = {pokemonCharacters}/>
    </div>
  );
}

export default App;
