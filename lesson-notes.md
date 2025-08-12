# React Lesson 5: Intro to React and Components

## 📚 Overview

In this lesson, we explore:

- What React is and why it's useful
- How to build a React app using `create-react-app`
- Component structure and styling
- How to debug errors using wrappers
- Practice tasks to build confidence

---

## 🔍 What is React?

| Concept        | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| **React**      | A JavaScript library for building user interfaces using **components**      |
| **JSX**        | Syntax combining HTML & JavaScript in the same file                         |
| **Virtual DOM**| A copy of the real DOM that updates efficiently for performance             |
| **Component**  | A reusable, self-contained chunk of UI (like a custom HTML tag)             |

---

## 🛠️ Setting Up React

### Create a New App

```bash
# Use NPX to run the Create React App tool without installing it globally
npx create-react-app my-app

# Move into the newly created project folder
cd my-app

# Start the development server and launch the app in your browser
npm start
```
This creates a full React project with a file structure ready to explore.

- `npx` runs packages without needing to install them.

- `create-react-app my-app` scaffolds a complete React project called my-app.

- `cd my-app` navigates into the project directory.

- `npm start launches the local dev server at http://localhost:3000.

### Exercise 1: Inspect the Project
Task 1: Compare JSX tags with normal HTML tags

Task 2: Look into index.js and what happens if <App /> is removed

Task 3: Explore App.js and App.css – try editing them

### Exercise 2: Modify the App Content
In App.js, update the return block to include:
```jsx
<h1>My Favourite Hobby</h1>
<p>I enjoy running because it clears my mind and keeps me fit.</p>
```
Use heading (<h1>–<h6>) and paragraph tags.

### Walkthrough: Creating a Component
1. Create Button.js
```jsx
// 1. Import React to use JSX and React features
import React from 'react';

// 2. Define a functional component called Button
function Button() {
  // 3. Return a simple <button> element with some text
  return (
    <button>Click Me</button>
  );
}

// 4. Export the Button component so it can be imported and used in other files
export default Button;
```

2. Use It in App.js
```jsx
// 1. Import the Button component from the components folder
import Button from './components/Button';

// 2. Define the main App component
function App() {
  // 3. Return JSX with the Button component inside a <div>
  return (
    <div>
      <Button />  {/* This will render the button we created */}
    </div>
  );
}

// 4. Export the App component so it can be rendered by index.js
export default App;

```

### Exercise 3: Beautify Your Button
Create a new file: Button.css
```css
.custom-button {
  font-weight: bold;
  color: darkblue;
  background-color: lightblue;
  border: 1px solid black;
  font-size: 1.2rem;
  padding: 10px;
}
```

Then update Button.js with the class name:
```jsx
import './Button.css';

function Button() {
  return (
    <button
    // reference the className
    className="custom-button">Click Me</button>
  );
}
```

### Exercise 4: Multiple Return Elements
Try returning more than one element in a component:
```jsx
return (
  <button>Click</button> // First element
  <p>This might break!</p> // Second element — JSX doesn't allow this
);
```
❌ Incorrect: Multiple elements not wrapped
⛔ Why it breaks: JSX expects a single return value. You can’t return two top-level elements like this.

In JSX, you must return a single parent element. Trying to return multiple sibling elements without a wrapper will cause an error.

❌ This causes an error because JSX must return a single parent element.

✅ Solutions

Solution 1: Wrap in a <div>:
```jsx
return (
  <div>
    <button>Click</button>
    <p>This works now!</p>
  </div>
);
```
✔ Why it works: Everything is now inside one parent <div> element.

Solution 2: use React Fragment:
```jsx
return (
  // fragment starts
  <>
    <button>Click</button>
    <p>This also works!</p>
  </> 
  // fragment ends
);
```
✔ Why this is great: Fragments let you group elements without adding an extra node to the DOM (no `<div>` clutter).

📌 Summary

- React uses components for reusable, scalable UIs

- JSX is a mix of JavaScript + HTML-like syntax

- You must wrap multiple JSX elements in one parent

- Styling uses className and often lives in component-specific CSS files

✅ Tip
React may feel confusing at first — but breaking it into small components and reusing them makes UI development faster and more consistent.

---

## React Lesson 6: Component Behaviour

## 🎯 Learning Objectives

- Understand what "behaviour" means in a React component
- Add behaviour to components using event handlers like `onClick`
- Pass data between components using `props`
- Practise building dynamic, reusable components

---

## 🧠 What is Behaviour?

Behaviour in React = how a component **responds to events**, like clicks or form inputs.

🟢 You’ve done this in vanilla JS:
- Use addEventListener to respond to clicks, hovers, etc.
- Write handler functions in separate JS files

🟦 In React:
- Defined with event handler props like onClick
- Kept inside the component — makes components self-contained

#### What Are Props in React?
Props (short for "properties") are how you **pass data** from one component to another in React — usually **from a parent to a child component**.

**Think of props like:**
Labeled packages of information passed into a component to help it behave or display in a certain way.

**Key Points:**
- Props are read-only (you cannot change them inside the child)

- They allow components to be dynamic and reusable

- Props are passed in like HTML attributes

### Example breakdown:
Parent Component:
```jsx
<Button label="Click Me" />
```

Child component (Button.js):
```jsx
// Define a functional component named Button
function Button(props) {
  // Return a single <button> element
  // It displays whatever text is passed to the component via the 'label' prop
  return <button>{props.label}</button>;
}

// This component expects to receive a 'label' prop from its parent.
// Example usage: <Button label="Click Me" />

// The value of props.label will appear as the button's text.
```
- Here, the parent passes label="Click Me" to the child. The child receives it as props.label.

**Modern Destructuring Syntax**
Instead of writing props.label, you can destructure:
```jsx
function Button({ label }) {
  return <button>{label}</button>;
}
```
***Why use props?**
They make components flexible, just like how arguments make a function reusable.

### Further Example:

```jsx
// Define a functional React component named MyButton
function MyButton() {

  // Define a function inside the component to handle button clicks
  // This function will be called when the user clicks the button
  function handleClick() {
    alert('Button clicked!'); // Show a popup message when clicked
  }

  // Return a button element with an onClick event handler
  // When the button is clicked, the handleClick function runs
  return <button onClick={handleClick}>Click Me</button>;
}

// This component renders a single button that shows an alert when clicked
```

🧪 Exercise 1: Add an onClick Event
Goal: Create a button that shows a message when clicked.

Steps:
- Define a handleClick function inside your component
- Attach it to the button via onClick
- Test the output in your browser console or alert
```jsx
// component file
// eg - ClickButton.js

// 1. Import React (needed for JSX)
import React from 'react';

// 2. Define the functional component
function ClickButton() {

  // 3. Create a function that will run when the button is clicked
  function handleClick() {
    // This could be a console log or alert — both are useful for testing
    alert('✅ Button was clicked!');
    // Or you could use: console.log('Button was clicked!');
  }

  // 4. Return a button element and link the click event to your function
  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

// 5. Export the component so it can be used in other parts of the app
export default ClickButton;
```

Import the element into `App.js`
```jsx
import ClickButton from './components/ClickButton';

function App() {
  return (
    <div>
    // button passed in
      <ClickButton /> 
    </div>
  );
}
```

### Props: Passing Information Between Components
What Are Props?
Props = properties passed from a parent to a child component

Think of them like function arguments in Python or JavaScript

### 🧪 Example 1: Passing a Single Prop

**In the parent (e.g., App.js):**
Syntax
```jsx
<Button buttonText="Click Here" />
```

You're giving the child `<Button />` a prop called `buttonText` with the value `"Click Here"`.

In the child (Button.js):
- Using the default props object:
Inside the Button component:
```jsx
function Button(props) {
  return <button>{props.buttonText}</button>;
}
```
OR use destructuring:
```jsx
function Button({ buttonText }) {
  return <button>{buttonText}</button>;
}
```
📝 All components receive a props object by default.

### Exercise 2: Make Button Text a Prop
Goal: Change the button text using props instead of hard-coding.

Steps:
- Pass buttonText from the parent (e.g., App.js)

- Access props.buttonText inside the Button component

- Replace hardcoded button text with {props.buttonText}

Bonus: Add Random Messages
```jsx
function handleClick() {
  const messages = ['Hello!', 'You clicked!', 'Nice one!'];
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMsg);
}
```

🧪 Exercise 3: Add Multiple Props
Goal: Pass multiple props and combine them

Example:
```jsx
<Button first="Click" second=" Me!" />
```
Inside the component:
```jsx
function Button({ first, second }) {
  return <button>{first + second}</button>;
}
```

### RECAP
| Concept            | Example                                        |
| ------------------ | ---------------------------------------------- |
| Pass prop          | `<Button label="Click" />`                     |
| Access in child    | `props.label` or `{ label }` via destructuring |
| Use multiple props | `{first + second}`                             |
| Trigger behaviour  | `onClick={handleClick}`                        |


**Summary**
Concept	Explanation
- Behaviour	Use onClick, onChange, etc., to trigger actions

- Props	Data passed from one component to another

- Reusable Components	Build one component that changes based on props

🔁 React is most powerful when components are:

- Modular
- Customisable
- Interactive

🧠 Keep Googling! Everyone uses the docs and StackOverflow.

✅ Next Steps
Practise combining props with useState

Build forms and timers with dynamic behaviours

---

# Lesson 9: TypeScript and React State

## Agenda

1. Introducing State and why it’s needed  
2. Introduction to class components  
3. Creating a class component with state  
4. Overview of TypeScript and its importance  

---

## Introducing State

- State is one of React's most powerful features.
- It's an object attached to a component that stores data or attributes relevant to it.
- State changes over time, and when it does, the component **re-renders**.
- Think of it like the component’s **information bank** – e.g., text, values, etc.
- Props and state are similar:  
  - Both are objects that affect rendering  
  - But props are **passed in** (like function parameters), while state is **managed internally** (like function variables).

---

## Why Do We Need State?

Imagine a button that increases a number each time it's clicked.

❌ Without state:

```jsx
let count = 0;

function MyButton() {
  function handleClick() {
    count++;
    console.log(count); // updates in console...
  }

  return <button onClick={handleClick}>Clicked {count} times</button>; // ...but not on screen!
}
```

# Lesson 9: TypeScript and React State

## 📋 Agenda

1. Introducing State and why it’s needed  
2. Introduction to class components  
3. Creating a class component with state  
4. Overview of TypeScript and its importance  

---

## 📌 Introducing State

React state is one of its most powerful features. Here's what you need to know:

- A component has an associated **state** object.
- State stores information and attributes about that component.
- When state changes, the component **re-renders**.
- It’s like a **bank** of info the component relies on.
- **Props** and **state** are similar (both are JS objects), but:
  - **Props** = external (passed in)
  - **State** = internal (managed within component)

---

## Why Use State? (Example Use Case)

Imagine a button that increments its value on click.  
If we use a regular variable, it won’t re-render the UI when updated.  
But using `state` solves that problem — it triggers re-rendering.

---

## 🧱 Class Components: What and Why?

React originally used **class components** to manage state.  
(You can now also use state in **functional components** with hooks like `useState`, but we start with classes.)

### Syntax Overview:

```jsx
import React from 'react';

class ExampleComponent extends React.Component {
  render() {
    return <h1>Hello from a class!</h1>;
  }
}
```

---

## ✍️ Exercise: Create a Class Component

Create a new button component using **class syntax**:
- Can reuse the old button styling.
- Don’t worry about functionality yet — just the structure.

#### Steps:
1. add `ClassButton` folder into components folder
2. add `ClassButton.js` and `ClassButton.css` in the folder 

---

## 💡 Walkthrough: State in Class Components

Now, let’s actually use state inside a class component:

```jsx
import React, { Component } from 'react';

class CounterButton extends Component {
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
      <button onClick={this.handleClick}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
```

### Notes:
- ❌ Don’t update `state` directly (`this.state.count++`) — it won’t re-render!
- ✅ Always use `this.setState()` to trigger a re-render.

---

## 🧪 Exercise 2: Add State to Your Button

Update your class-based button component to:
- Store the number of times it's clicked using state.
- Display the updated number each time it's clicked.

---

## 🌐 Intro to TypeScript

### The Problem

JavaScript doesn't enforce types. You might expect a `string`, but accidentally pass a `number`.

### Example in Python:
```python
def add(x, y):
    return x + y
# But x and y could be anything!
```

---

## ✅ What is TypeScript?

TypeScript is a **superset of JavaScript** that adds:
- Type checking
- Optional static typing
- Compile-time error catching

It helps:
- Prevent bugs
- Make code more maintainable

---

### Example of TypeScript

```tsx
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

- This ensures `name` is a `string`
- Function returns a `string`

---

## 🧵 Summary

- `state` stores dynamic values inside a component and triggers re-rendering.
- Class components are the traditional way to manage state.
- `setState()` is the proper way to update state.
- TypeScript brings safety and clarity by enforcing types.

---

# React Lesson 10: Lifecycle, Hooks, and Routing

## 🎯 Learning Objectives

- Understand lifecycle methods in React
- Use React Hooks like `useState` and `useEffect`
- Implement routing in React using `react-router-dom`

---

## 🔁 Lifecycle Methods

### What Are Lifecycle Methods?

Lifecycle methods are special methods that run during different stages of a component's existence (mounting, updating, and unmounting).

Think of a component's "life" like a human's: birth, adolescence, adulthood, old age, death.

### Common Lifecycle Methods

#### 1. `componentDidMount`
- Runs once after the component is first rendered (mounted).
- Great for API calls or setting up background tasks.

```jsx
componentDidMount() {
  console.log("Component has mounted");
}
```

#### 2. `componentDidUpdate`
- Runs when the component updates (but **not** on the first render).
- Useful for logging, network requests triggered by changes.

```jsx
componentDidUpdate(prevProps, prevState) {
  console.log("Component has updated");
}
```

⚠️ Avoid setting state inside `componentDidUpdate` — it could cause an infinite loop.

#### 3. `componentWillUnmount`
- Called just before the component is removed from the DOM.
- Perfect for cleanup (clearing intervals, cancelling fetch requests, etc.)

```jsx
componentWillUnmount() {
  clearInterval(this.timer);
}
```

---

## 🪝 React Hooks

### What Are Hooks?

Hooks give functional components the ability to use state and lifecycle logic — previously only available in class components.

### The `useState` Hook

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // count = state variable, setCount = updater

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```
OR
```jsx
function Button(props) {
  const []
}
```

### The `useEffect` Hook

Acts like `componentDidMount` and `componentDidUpdate` combined.

```jsx
import React, { useState, useEffect } from 'react';

function Logger() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Component mounted or updated");
  }, [message]); // only runs if message changes
}
```

---

## ⚙️ Exercise: Add a Hook

Try this:
- Console log "Hello World" when component mounts
- On button click, update text or change content using state and effects

---

## 💭 Class vs Functional Components

- **Functional components with hooks are now the recommended approach.**
- Class components are still valid and supported but less common in modern codebases.

---

## 🌐 React Routing

### Why Use React Router?

- Enables navigation between pages **without reloading the browser**
- Provides a seamless user experience

### Setup

```bash
npm install react-router-dom
```

### `index.js` Configuration Example

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import About from './About';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
```

### Summary

- **Lifecycle Methods**: control what happens when a component mounts, updates, or unmounts
- **Hooks**: allow functional components to have internal state and side effects
- **Routing**: enables multi-page navigation without full reloads

---

# Lesson 11: Angular, Linux and Bootstrap

---

## 📘 Agenda

1. Introduction to Angular  
2. Introduction to Linux  
3. React Bootstrap and UI Libraries  
4. Lodash  
5. Moment.js  

---

## 🔷 What is Angular?

- Angular is a **framework**, not just a library like React.
- Written in **TypeScript**, and handles everything internally: routing, forms, etc.
- **React** relies on third-party libraries for extra functionality.
- Angular is more **opinionated** and holistic.

---

## 🔍 Angular Components Breakdown

| Part | Description |
|------|-------------|
| A | Import statements (like React's `import` hooks or React itself) |
| B | HTML template for rendering UI |
| C | CSS styling for the component |
| D | Class logic that defines component behaviour (like React class components) |

---

## 🐧 Introducing Linux: Its History

- **UNIX** was the original system, more usable than Multics.
- **Richard Stallman** started the GNU Project after printer issues (free software ideology).
- **GNU = GNU's Not Unix** – replicated UNIX but needed a kernel.

Enter **Linus Torvalds**:
- Created the **Linux kernel**, freely shared improvements.
- Merged with GNU utilities → now commonly called "Linux" OS.
- Popularized through **Ubuntu** (based on Debian).

---

## 🔧 Linux and Mac

- Mac OSX is also **UNIX-based**, just with Apple’s GUI and kernel.
- Linux dominates the **server market** and is a robust dev OS.
- Command line fluency is crucial for devs.

---

## 🧪 Linux Command Practice

- Use: [https://linuxjourney.com/](https://linuxjourney.com/)
- Focus on "Command Line" section.
- Try commands and quizzes.
- Don’t rush, aim for **real understanding**.

---

## 🎨 React UI Libraries

### React Bootstrap

- Prebuilt React components styled with Bootstrap.
- Install via npm:
  ```bash
  npm install react-bootstrap bootstrap
  ```
- Example:
  ```jsx
  import Button from 'react-bootstrap/Button';

  <Button variant="primary">Click me!</Button>
  ```

### MUI (Material UI)

- Based on Google's Material Design.
- Rich component library:
  ```bash
  npm install @mui/material @emotion/react @emotion/styled
  ```

- Works well with React Bootstrap.

---

## 🌀 React Motion

- For animations and smooth UI transitions.
- Uses physics-based animation (e.g., stiffness, damping).
- Wrap components with `<Motion>`.

---

## 🔧 Lodash

- JS utility library for arrays, numbers, objects, etc.
- Functions like `filter`, `reject`, `cloneDeep`, etc.
- Install via:
  ```bash
  npm install lodash
  ```
- Example:
  ```js
  _.filter(users, user => user.active);
  ```

---

## 🕰️ Moment.js

- Great for working with **dates and times**.
- Can format, parse, add/subtract dates.
- Example:
  ```js
  moment().add(10, 'years').format('YYYY-MM-DD');
  ```

- Also works outside of React – it’s a general JS library.

---

## ✅ Summary

- Linux is a core OS for servers; commands are vital.
- Use UI libraries like Bootstrap and MUI for faster dev.
- Lodash and Moment.js make complex JS tasks simple.

---

# 🧪 Lesson 12: Practice Workshop

## 🎯 Agenda
1. Coverage of APIs  
2. Having API-fun with Spotify  
3. Project Development  

---

## 🔌 Coverage of APIs

> APIs are like power sockets – they control and protect access to data, just as a socket safely regulates electricity.

- In web dev, APIs let us **safely and predictably request data** from services.
- They act as a **middleman** between you and external data (like Spotify, weather, etc).
- APIs require structured requests and return structured responses (often JSON).

---

## 🎵 Embedding Spotify in React

### 🧪 Exercise: Add a Playlist

**Goal**: Use Spotify's developer tools to embed a playlist in your React app.

#### Steps:
1. Go to a playlist or album on Spotify.
2. Click on **Share > Embed**.
3. Copy the `<iframe>` code.
4. Paste into your React component, e.g.:

```jsx
function SpotifyEmbed() {
  return (
    <div>
      <iframe 
        title="Spotify Playlist"
        src="https://open.spotify.com/embed/playlist/your_playlist_id"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}
```

> 📝 Remember: JSX doesn’t like `class=` (use `className=`), and make sure `iframe` attributes are valid in JSX.

---

### ✅ Solution Output Example

- Your embed works by **sending a request to Spotify** for a specific playlist.
- You're not directly querying data (yet), just embedding a **UI element** from Spotify.
- Full access (e.g. top tracks, search, user history) requires:
  - Registering a dev app on Spotify
  - Fetching access tokens
  - Using HTTP requests and parsing responses

---

## 🔮 The Future of Spotify Integration

With full access:
- You could build a **custom Spotify player** in React.
- You’d use:
  - A token from Spotify's dev dashboard
  - A Spotify URI
  - fetch/axios calls to load and control playback

---

## ⛅ Weather API Example

> Most real-world apps **fetch** live data, not embed static widgets.

### Goals:
- Connect to a live API using `axios`
- Update UI based on user input
- Handle loading/error states
- Understand JSON parsing

---

### 🔁 Fetching Logic with useEffect

Example (simplified):
```jsx
import axios from 'axios';
import { useEffect, useState } from 'react';

function WeatherWidget({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  
  useEffect(() => {
    axios.get(`https://api.weatherapi.com/data/${city}`)
      .then(response => setWeather(response.data))
      .catch(err => setError('City not found'));
  }, [city]);

  if (error) return <p>{error}</p>;
  if (!weather) return <p>Loading...</p>;

  return <p>Temp: {weather.temp}°C</p>;
}
```

---

## 💬 Displaying API Data

- Use `useState` to control form input.
- On submit or change, call `axios` inside `useEffect`.
- Parse the JSON response and display it dynamically.

---

## 🧠 Summary

- APIs enhance apps by adding **interactivity and live data**.
- Even simple use cases (like Spotify embeds) teach valuable integration skills.
- Public APIs = creative power → Weather, Spotify, Twitter, etc.

---

## 🛠 Project Time

- Continue group work and ask for help when needed.
- Think about **what APIs or features you could embed or fetch** for your project.

---

# Lesson 13: Testing and Redux

## 1. React Testing

### Overview
React testing ensures components work as expected. There are two main approaches:
1. **Render in a simple test environment** — fast, but not as realistic as a browser.
2. **End-to-end (E2E) testing** — tests the full app in a realistic environment, but slower.

Key considerations:
- **Speed vs Realism**: Faster tests are less realistic; realistic tests are slower.
- **How much to mock**: Decide the scope (entire component, sub-components, specific elements).

### Tools
- **Jest**: Popular JavaScript testing library, often used with React.
- **React Testing Library**: Works with Jest to test React DOM elements.

### Snapshot Testing Example (Jest)
```javascript
import React from 'react';
import renderer from 'react-test-renderer';
import MyComponent from './MyComponent';

test('matches the snapshot', () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

---

## 2. Redux Overview

Redux provides a **global store** for state management.  
Instead of passing props through many layers, all components can directly **dispatch** data to the store and **fetch** from it.

Analogy: A **bank** where components **deposit** (dispatch) and **withdraw** (fetch) data.

### Benefits
- Easy state sharing between components.
- Avoids complex prop-passing.

---

## 3. Redux Setup

### Structure
- Wrap the entire app with `<Provider>` at the top level.
- Use Redux hooks in components:
  - `useSelector` → Read from store.
  - `useDispatch` → Send actions to store.

```javascript
// index.js
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import App from './App';

const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

---

## 4. Redux Actions

Actions are plain JavaScript objects describing changes to state.

**Structure:**
```javascript
const action = {
  type: 'INCREMENT', // required
  payload: 1         // optional data
};
```

Analogy: **Envelope** with:
- Stamp → `type`
- Letter → `payload`

---

## 5. Reducers

Reducers decide **how the store changes** based on the action type & payload.

```javascript
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload };
    default:
      return state; // Always return full state
  }
}
```

> ⚠️ **Reducers overwrite state** — they must always return the full state, not partial updates.

---

## 6. Redux Toolkit

Simplifies Redux setup by reducing boilerplate.

### Steps:
1. Install:
```bash
npm install @reduxjs/toolkit react-redux
```
2. Create store with `configureStore()`.
3. Wrap app in `<Provider>`.
4. Create state slice with `createSlice()`.
5. Add slice reducers to store.
6. Use `useSelector` and `useDispatch` in components.

```javascript
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; }
  }
});

export const { increment, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

---

## 7. Hooks Usage Example
```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}
```

---

## 8. Exercise: Add Redux to a Project

- Create a global store with a default message (e.g. `"Hello World"`).
- In a button component:
  - Use `useSelector` to display the store message.
  - (Optional) Add `onClick` to `dispatch` a new message.

---

## 9. Summary
- Testing in React: Choose between speed and realism.
- Redux: Central global store for state.
- Redux Toolkit: Reduces setup complexity.
