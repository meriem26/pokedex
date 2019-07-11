import React, { Component } from "react";

class PokemonInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokDetails: {color:"", url:""}
    };
  }
  componentDidMount() {
      console.log(this.props.match.params)
    fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${
        this.props.match.params.entry_number
      }`
    )
      .then(data => data.json())
      .then(data => {
        this.setState({
          pokDetails: data
        });
      });
  }
  render() {
    return (
      <div>
        <h2>Base happiness:{this.state.pokDetails.base_happiness}</h2>
        <h2>Color:{this.state.pokDetails.color.name}</h2>
        <h2>Url:{this.state.pokDetails.color.url}</h2>
      </div>
    );
  }
}
export default PokemonInfo;
