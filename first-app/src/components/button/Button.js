import React from 'react';
import './Button.css';

const Button = ({label, logMessage}) => {
  const handleClick = () => {
    console.log(`${logMessage}! Well done!`);
  }
  return (
    <button className="custom-button" onClick={handleClick}>{label}</button>
  );
}

export default Button;
