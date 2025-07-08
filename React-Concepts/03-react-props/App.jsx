// File: 03-react-props/App.jsx

//Definition: Props (short for properties) are a way to pass data from a parent component to a child component. React components are reusable and props make them customizable.


import React from "react";

// Child Component
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

// Parent Component
function App() {
  return (
    <div>
      <h1>Using Props in React</h1>
      <Greeting name="Sami" />
      <Greeting name="Ali" />
      <Greeting name="Ayesha" />
    </div>
  );
}

export default App;
