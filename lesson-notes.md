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
npx create-react-app my-app
cd my-app
npm start
```
This creates a full React project with a file structure ready to explore.

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
import React from 'react';

function Button() {
  return (
    <button>Click Me</button>
  );
}

export default Button;
```

2. Use It in App.js
```jsx
import Button from './components/Button';

function App() {
  return (
    <div>
      <Button />
    </div>
  );
}
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

Then update Button.js:
```jsx
import './Button.css';

function Button() {
  return (
    <button className="custom-button">Click Me</button>
  );
}
```

### Exercise 4: Multiple Return Elements
Try returning more than one element in a component:
```jsx
return (
  <button>Click</button>
  <p>This might break!</p>
);
```
❌ This causes an error because JSX must return a single parent element.

✅ Solutions
Wrap in a <div>:
```jsx
return (
  <div>
    <button>Click</button>
    <p>This works now!</p>
  </div>
);
```
Or use React Fragment:
```jsx
return (
  <>
    <button>Click</button>
    <p>This also works!</p>
  </>
);
```

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
- Attach event listeners
- Write functions to respond

🟦 In React:
- Use props like `onClick`
- Define behaviour inside the component file (keeps logic together)

### Example:

```jsx
function MyButton() {
  function handleClick() {
    alert('Button clicked!');
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

🧪 Exercise 1: Add an onClick Event
Goal: Create a button that shows a message when clicked.

Steps:
- Define a handleClick function inside your component
- Attach it to the button via onClick
- Test the output in your browser console or alert

### Props: Passing Information Between Components
What Are Props?
Props = properties passed from a parent to a child component

Think of them like function arguments in Python or JavaScript

Syntax
```jsx
<Button buttonText="Click Here" />
```
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

🧾 Summary
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