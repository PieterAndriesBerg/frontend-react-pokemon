import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`);
      setPokemons(data);
      console.log(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {pokemons ?
      <> 
      <h1>{pokemons.data.name}</h1>
      <img src={pokemons.data.sprites.front_default} alt="pikachu" />
      <h5>Moves: {pokemons.data.moves.length}</h5>
      <h5>Weight: {pokemons.data.weight}</h5>
      <h5>Abilities: </h5>
      <u>
      {pokemons.data.abilities.map(ab => <li>{ab.ability.name}</li>)}
      </u>
      </>
      : <h1>Loading</h1>}
    </div>
  )
}

export default App;
