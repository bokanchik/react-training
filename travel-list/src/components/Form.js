import { useState } from "react";

/**
 * Controlled elements technique:
 * 
 * 1. Create a piece of state
 * 2. Use that state as a value of the input field
 * 3. Connect the state with the value of input field:
 *    we need to listen for the changeEvent on the same value
 * 
 */
export default function Form({ onAddItems }) {

  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);


  function handleSubmit(e) {
    e.preventDefault(); // not to reoload the page

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

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
