import React, { Component } from "react";
import { Link } from "react-router-dom";
class BestPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonNames: [],
      isLoading: true
    };
  }
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokedex/1/")
      .then(res => res.json())
      .then(data => {
        this.setState({
          pokemonNames: data.pokemon_entries.slice(0, 10).map(pokemon => ({
            name: pokemon.pokemon_species.name,
            entryNum: pokemon.entry_number,
            url: pokemon.pokemon_species.url
          })),
          isLoading: false
        });
      });
  }
  render() {
    return this.state.isLoading ? (
      <h1>Is Loading ..</h1>
    ) : (
      <ul >
        <div className="fav-pok">
       <h2> My favourite Pokemon is :</h2>
        {this.state.pokemonNames.map((name, index) => {
          return (
            <li id="list-names" key={index}>
              <Link to={`/bestPokemon/${name.entryNum}`}>{name.name}</Link>
            </li>
          );
        })}
        </div>
      </ul>

    );
  }
}

export default BestPokemon;
