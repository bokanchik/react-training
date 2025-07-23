import {useEffect, useState } from "react";

// --- COMPONENTS ---
// component --> in React is a function (building blocks of UI in React)
// React redners view based on components
// Componenet has its own data, logic and apperrence
// We nest components inside other components
// Each component is concerned with one piece of the UI


// --- JSX ---
// JSX --> JavaScript XML, declarative syntax to descrive what components should look like and how they should behave
// Each JSX element is converted to a React.createElement() call

// --- PORPS ---
// how we passe data between componenets (from parent to child)
// it's like a communication channel between components
// anything can be passed as props: single values, arrays, objects, functions, even other components
// READ-ONLY ! -> you need state to make changes

// useState -->  React Hook to change something in userinterface

export default function App() {

  const [advice, setAdvice] = useState(""); // value of state, setter function to update a piece of state
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());


  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
    //console.log(data.slip.advice);
  }

  // upgrade directly
  useEffect(function() {
    getAdvice(); // function we want to execute at the begging
  }, []);
  
  useEffect(function() {
    setInterval(function() {
      setTime(new Date().toLocaleTimeString()); 
    }, 1000);
  })

  return (
  <div>
    <h1> {advice} </h1>
    <button onClick={getAdvice}> Get advice </button>
    <Message count={count} />
    <h2> Current time : {time} </h2>
  </div>
  );

};

function Message(props) {
  
  return (
    <p> You have read <strong>{props.count}</strong> pieces of advice </p>
  );

}