import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  handleminus = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.handleClick}>Add</button>
        <button onClick={this.handleminus}>Subtract</button>
      </div>
    );
  }
}

export default ClassCounter;
