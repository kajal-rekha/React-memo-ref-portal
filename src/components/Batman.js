import React, { Component } from "react";

export default class Batman extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Ahil",
    };
    this.superheroRef = React.createRef();
  }

  changeColor() {
    this.superheroRef.current.style.color = "red";
    this.superheroRef.current.style.fontSize = "3rem";
    this.superheroRef.current.style.backgroundColor = "black";
  }
  render() {
    return (
      <div>
        <h1 ref={this.superheroRef}>Batman</h1>
        <button onClick={() => this.changeColor()}>change color</button>
      </div>
    );
  }
}
