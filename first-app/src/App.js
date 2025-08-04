import './App.css';
import Button from './components/button/Button';


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
    </div>
  );
}

export default App;

