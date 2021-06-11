import React from "react";
import { useState } from "react";
import PokemonCard from './components/PokemonCard'
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState(null);


  return (
    <div>
      <h1>Pokemon List</h1>
      <PokemonCard pokemons={pokemons} setPokemons={setPokemons} pokemonName="pikachu" />
      <PokemonCard pokemons={pokemons} setPokemons={setPokemons} pokemonName="ditto" />
    </div>
  )
}

export default App;
