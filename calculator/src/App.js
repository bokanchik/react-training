import { useState } from "react";

function App() {

  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [amount, setAmount] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  
  let tip = amount * (((tip1 + tip2) / 2) / 100);

  function handleReset() {
    setAmount(0);
    setTip1(0);
    setTip2(0);
  }

  return (
    <div>
      <BillInput amount={amount} onAddAmout={setAmount}/>
      <SelectPercentage tip={tip1} onSelect={setTip1}> 
        How did you like the service ?
      </SelectPercentage>
      <SelectPercentage tip={tip2} onSelect={setTip2}> 
        How did you friend like the service ?
      </SelectPercentage>
      
      {amount > 0 && (
       <>
        <FinalSum amount={amount} tip={tip}/>
        <Reset onReset={handleReset}/>
      </>
      )}
        
    </div>
  )
}

function BillInput({ amount, onAddAmout }) {
  return (
    <div>
      <label>
        How much was the bill ?   
      </label>
      <input
        type='text'
        placeholder='Bill value'
        value={amount}
        onChange={(e) => onAddAmout(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ onSelect, tip, children }) {

  return (
    <div>
      <label> {children} </label>
      <select value={tip} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value='0'>
          Dissatisfied (0%)
        </option>
        <option value='5'>
          It was okay (5%)
        </option>
        <option value='10'>
          It was good (10%)
        </option>
        <option value='20'>
          Aboslutely amazing! (20%)
        </option>
      </select>

    </div>
  )
}

function FinalSum({ amount, tip }) {
  return (
    <div>
      <h3>  You pay: ${amount + tip} (${amount} + ${tip} tip) </h3>
    </div>
  )
}

function Reset({ onReset }) {
  return (
    <button onClick={onReset}>
      Reset
    </button>
  )
}

export default App;
