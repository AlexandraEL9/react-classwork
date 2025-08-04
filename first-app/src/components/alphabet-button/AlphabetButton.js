import './AlphabetButton.css';
import React, { Component } from 'react';

class AlphabetButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };

    // Create an alphabet array (A to Z)
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }

  handleClick = () => {
    // Increment index, reset to 0 if at end
    this.setState((prevState) => ({
      index: (prevState.index + 1) % this.alphabet.length,
    }));
  };

  render() {
    return (
      <button className="alphabet-button" onClick={this.handleClick}>
        Letter: {this.alphabet[this.state.index]}
      </button>
    );
  }
}

export default AlphabetButton;
