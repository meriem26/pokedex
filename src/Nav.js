import React from "react";
import {Link} from "react-router-dom";

class Nav extends React.Component{
    render(){
        return(
        <ul>
        <Link to="/"> <li>Main page</li></Link>
        <Link to="/bestPokemon"> <li> Best Pokemon </li></Link>
        <Link to="/caughtPokemon"> <li>Caught Pokemon </li></Link>
         </ul>
        )}
}
export default Nav;