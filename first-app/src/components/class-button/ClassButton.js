import './ClassButton.css';
import React, { Component } from 'react';

class ClassButton extends Component {
  // A: Define initial state inside the constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // B: Define a method to update state
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // C: Render JSX with dynamic state
  render() {
    return (
      <button className="class-button" onClick={this.handleClick}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default ClassButton;