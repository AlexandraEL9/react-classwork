import './ExampleClassButton.css';
import React, { Component } from 'react';

class ExampleClassButton extends Component {
  // A: Define initial state inside the constructor
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello!',
    };
  }

  // B: Define a method to update state
  handleClick = () => {
    this.setState({ message: 'Button clicked!' });
  };

  // C: Render JSX with dynamic state
  render() {
    return (
      <button className="example-class-button" onClick={this.handleClick}>
        Message: {this.state.message}
      </button>
    );
  }
}

export default ExampleClassButton;