import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <div className="App-logo">
        <h1> Welcome to the {this.props.appName} </h1>
        <img
          onClick={this.props.handleClick}
          src={this.props.url}
          alt="Loading"
        />
      </div>
    );
  }
}
export default Logo;
