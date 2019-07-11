import React, { Component } from "react";

class CaughtPokemon extends Component {
  constructor() {
    super();
    this.state = {
      caughtPokemon: [],
      pokemonNameInput: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  catchPokemon = () => {
    var newCaughtPokemon = this.state.caughtPokemon;
    newCaughtPokemon.push(this.state.pokemonNameInput);
    this.setState({
      caughtPokemon: newCaughtPokemon
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="caught-pok">
       
        <p>
        
          Add a Pokemon Name: {this.props.date}
          
          <button onClick={this.catchPokemon}>Catch Pokemon</button>
          {this.state.caughtPokemon.map(element => {
            return <li>{element}</li>;
          })}

        </p>

        <br />
        <input
          type="text"
          value={this.state.pokemonNameInput}
          placeholder="Pokemon name"
          name="pokemonNameInput"
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
export default CaughtPokemon;
