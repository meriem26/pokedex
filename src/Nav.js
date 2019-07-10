import React from "react";
import {Link} from "react-router-dom";
import Clock from './Clock';

class Nav extends React.Component{
    render(){
        return(
            <div className="Nav-pok">
        <ul className="Nav-list">
        <Link to="/"> <li>Main page</li></Link>
        <Link to="/bestPokemon"> <li> Best Pokemon </li></Link>
        <Link to="/caughtPokemon"> <li>Caught Pokemon </li></Link>
         </ul>
         <Clock />
         </div>
        )}
}
export default Nav;