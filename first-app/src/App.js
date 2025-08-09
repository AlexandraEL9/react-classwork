import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Button from './components/button/Button';
import ClassButton from './components/class-button/ClassButton';
import ExampleClassButton from './components/example-class-button/ExampleClassButton';
import AlphabetButton from './components/alphabet-button/AlphabetButton';
import HookButton from './components/hook-button/HookButton';

function App() {
  const buttonOneMessageArray = ['Message 1', 'Message 2', 'Message 3']
  const buttonTwoMessageArray = ['Message A', 'Message B', 'Message C']
  return (
    <div>
      <h1>My Favourite Hobby</h1>
      <p>I enjoy running because it clears my mind and keeps me fit.</p>
      <Button 
        label="first button" 
          logMessage={
            buttonOneMessageArray.join(', ')
          }
      />
      <Button 
        label="second button" 
        logMessage={
          buttonTwoMessageArray[
            Math.floor(Math.random() * buttonTwoMessageArray.length)
          ]
        }
      />
      <h2>Class Button Example</h2>
      <ClassButton />
      <h2>Example Class Button</h2>
      <ExampleClassButton />
      <h2>Alphabet Button</h2>
      <AlphabetButton />
      <h2>Hook Button</h2>
      <HookButton />
    </div>
  );
}

export default App;

