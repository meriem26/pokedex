import React, {Component} from "react";


class Logo extends Component {



  render(){
    return(
   
        <header>
       <h1> Welcome to the {this.props.appName} </h1>
       <img onClick={this.props.handleClick} src={this.props.url} alt="Loading"/>
       </header>
    
       ) ;
  }
 
}
export default Logo;