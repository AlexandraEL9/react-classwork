import React, { useEffect, useState } from 'react';
import './HookButton.css';

const HookButton = () => {
  const [buttonText, setButtonText] = useState('Click Me!');
  const messages = [
    '1, 2, Button my shoe',
    '3, 4, Knock at the door',
    '5, 6, Pick up sticks',
    '7, 8, lay them straight',
  ];

  const [clickCount, setClickCount] = useState(-1);

  // Log "Hello World" only once when component mounts
  useEffect(() => {
    console.log('Hello World');
  }, []);

  const handleClick = () => {
    const nextIndex = (clickCount + 1) % messages.length;
    setButtonText(messages[nextIndex]);
    setClickCount(nextIndex);
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default HookButton;