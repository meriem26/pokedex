import React, {Component} from "react";

class BestPokemon extends Component{
    constructor(props){
        super(props);
        this.state={
            pokemonNames:[],
            isLoading: true
        }
    }
    componentDidMount(){
        fetch("https://pokeapi.co/api/v2/pokedex/1/").
        then(res=> res.json()).
        then(data=>{console.log([
            data.pokemon_entries[0].pokemon_species.name, 
            data.pokemon_entries[3].pokemon_species.name, 
            data.pokemon_entries[6].pokemon_species.name]);
            this.setState({
                pokemonNames: [
                    data.pokemon_entries[0].pokemon_species.name,
                data.pokemon_entries[3].pokemon_species.name, 
                data.pokemon_entries[6].pokemon_species.name],
                isLoading:false
              })
         
        }
            
         )
}
    render(){
        return(
       this.state.isLoading ? <h1>Is Loading ..</h1>:<ul>My favourite Pokemon is Squirtle: {this.state.pokemonNames.map((name,index)=>{
                return (
                    <li key={index}>{name}</li>
                
                )
            })} </ul>  
        )
    }
  
    
}

export default BestPokemon;