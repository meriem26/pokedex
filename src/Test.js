import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    fetch("http://localhost:3001/albumsB/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
      }
          
      );
   
  }
  render() {
    return <h1>Hello</h1>;
  }
}
export default Test;
