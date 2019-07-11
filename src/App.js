import React, { Component } from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
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
            <Route
              path="/"
              exact
              render={props => (
                <Logo
                  {...props}
                  appName="Pokedex"
                  url="http://clipartmag.com/images/pokeball-clipart-13.png"
                  handleClick={this.logWhenClicked}
                />
              )}
            />
            <Route exact path="/bestPokemon" component={BestPokemon} />
            <Route path="/bestPokemon/:entry_number" component={PokemonInfo} />
            <Route path="/caughtPokemon" component={CaughtPokemon} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
