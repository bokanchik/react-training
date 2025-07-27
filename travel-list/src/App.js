import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏄‍♂️ Far Away 🏄‍♂️</h1>
}

function Form() {

  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  /**
   * Controlled elements technique:
   * 
   * 1. Create a piece of state
   * 2. Use that state as a value of the input field
   * 3. Connect the state with the value of input field:
   *    we need to listen for the changeEvent on the same value
   * 
   */
  function handleSubmit(e) {
    e.preventDefault(); // not to reoload the page

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    console.log(newItem);
    
    // set to intial state 
    setDescription('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?🎎</h3>
      <select 
        value={quantity} 
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/** function to generate an array of numbers for select form*/}
        {Array.from({ length: 20 }, (_, i) => i + 1).map
        ((num => 
          <option value={num} key={num}>
            {num} 
          </option>))}
      </select>
      <input 
        type='text' 
        placeholder="Item..." 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  )
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item itemObj={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

function Item({ itemObj }) {
  return (
    <li>
      <span style={itemObj.packed ? {textDecoration: 'line-through'} : {}}>
      {itemObj.quantity} {itemObj.description}
      </span>
      <button>❌</button>
    </li>
  )
}

function Stats() {
  return (
    <footer className="stats">
     <em> 💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  )
}