import React, { Component } from "react";


class CaughtPokemon extends Component {
    constructor() {
        super();
        this.state = {
            caughtPokemon: [],
            pokemonNameInput: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    catchPokemon = () => {
        var newCaughtPokemon = this.state.caughtPokemon;
        newCaughtPokemon.push(this.state.pokemonNameInput);
        this.setState({
            caughtPokemon: newCaughtPokemon
        })

    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

    }

    render() {
        return (
            <div>
                {/* <ul>{this.state.caughtPokemon.map(element => {
                    return (
                        <li>{element}</li>
                    )
                })}</ul> */}
                <p>Caught {this.state.caughtPokemon.map(element=>{
                    return(
                        <li>{element}</li>
                    )
                }
                    )} Pokemon on: {this.props.date}
                    <button onClick={this.catchPokemon}>Catch Pokemon</button></p>

                <br />
                <input type="text" value={this.state.pokemonNameInput}
                    placeholder="Pokemon name" name="pokemonNameInput" onChange={this.handleInputChange} />

            </div>
        )
    }


}
export default CaughtPokemon;