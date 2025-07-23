// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode> 
//     <App />
//   </StrictMode>
// );


import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

// each component can return only one element
// we can nest elements inside other elements
// we can call a component multiple times and reuse it
function App() {
  return (
    <div className="container">
    <Header />
    <Menu />
    <Footer />
    </div>
  );  
}

function Header() {
  // the easiest way to style a compononent (create an object for each of componenet we want to syle)
 // const style = { color: 'red', fontSize: '48px', textTransform: 'uppercase' };
  const style = {};

  return (
    <header className ="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza 
        name='Pizza Spinaci' 
        ingredients='Tomato, mozarella, spinach, and ricotta cheese' 
        photoName='pizzas/spinaci.jpg'
        price={10}
      />
      <Pizza
        name='Pizza Funghi' 
        ingredients='Tomato, mozarella, mushrooms, and onion'
        photoName='pizzas/funghi.jpg'
        price={12}
      />

    </main>
    );
}

//** 
//  To define props, we do it in 2 steps:
//  1. We pass the props into the component
//  2. We receive the props in the component that we pass them into.
//
// order of props is irrelevant
// 
// */
function Pizza(props) {
  console.log(props);

  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name}/>
      <div>
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  
  //console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!")
  //   else alert("Sorry we're closed");

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  React.useEffect(function() {
    setInterval(function() {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  })

  return <footer className="footer">{time}. We're currently open</footer>
}


// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
    <App /> 
  </React.StrictMode>
);

// React before v18
// React.render(<App />);

// debug: 1. make sure that the app is running
// 2. check the console for any errors