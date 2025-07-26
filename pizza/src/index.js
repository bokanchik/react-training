import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

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
  const pizzas = pizzaData;
 // const pizzas = []; // to test null case
  const numPizzas = pizzas.length;

  // !! for conditional rendering we need to use boolean value
  // and operator && or ? : (ternaries)
  // advantage of ternaries -> we can display some alternative 

  return (
    <main className="menu">
      <h2>Our menu</h2>


      {/*
      
      ul -> unordered list
      li -> list item
      
      rendering list => using map method on array (it will create a new array
      and we pass as a propt an Object)

      
      <> </> -> react fragment to group some elements without leaving any trace in the HTML

      */}

      {numPizzas > 0 ? 
      (
      <> 
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. 
          All from our stone oven, all organic, all delicious.
        </p>

        <ul className="pizzas">
          {pizzas.map(pizza => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul> 
      </>
      ) : (<p> We're still working on our menu. Please come back later :) </p>
      )}
    </main>
    );
}

//** 
//  To define props, we do it in 2 steps:
//  1. We pass the props into the component
//  2. We receive the props in the component that we pass them into.
//
//  order of props is irrelevant
// 
// */

// !! we can destruct props into an object { obj }
function Pizza({ pizzaObj }) {

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
      <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  // --- conditional rendering --- 

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  
  return <footer className="footer">
    
      {isOpen ? ( 
        <Order closeHour={closeHour} openHour={openHour}/>
       ) : (
        <p> 
          We're happy to welcome you between {openHour}:00 and {closeHour}:00. 
        </p>
      )}
    </footer>
}

function Order({ closeHour, openHour }) {
  return <div className="order">
        <p> We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
        <button className="btn">Order</button>
      </div>
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