import React, { Component } from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Test from "./Test";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import "./App.css";
import PokemonInfo from "./PokemonInfo";

class App extends Component {
  logWhenClicked = () => {
    console.log("True");
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />

          <Switch>
            {/* <`br />
          
          <CaughtPokemon date={new Date().toLocaleDateString()} />
          <br />
          <BestPokemon /> */}
            `
            <Route
              path="/"
              exact
              render={props => (
                <Logo
                  {...props}
                  appName="Pokedex"
                  url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
                  handleClick={this.logWhenClicked}
                />
              )}
            />
            <Route exact path="/bestPokemon" component={BestPokemon} />
            <Route path="/bestPokemon/:entry_number" component={PokemonInfo} />
            <Route path="/caughtPokemon" component={CaughtPokemon} />
            <Route path="/pikatchou" component={Test} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
