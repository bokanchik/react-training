import { useState } from "react";

export default function App() {
  return (
    <div>
      <div>
      {/* <Counter message='Step'/> */}
      <Counter />
      </div>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  
  const date = new Date("Jul 25 2025");
  date.setDate(date.getDate() + count);
  
  function handleMinusCount() {
    setCount((c) => c - step);
  }

  function handlePlusCount() {
    setCount((c) => c + step);
  }

   function handleMinusStep() {
    setStep((c) => c - 1);
  }

  function handlePlusStep() {
    setStep((c) => c + 1);
  }

  return (
    <div className="counter">
      <div className="buttons">
        <button 
          className="button" 
          onClick={handleMinusStep}>
          - 
        </button>
        <span className="message">
          Step: {step}
          </span>
        <button 
          className="button"
          onClick={handlePlusStep}
        >
          +
        </button>
      </div>
      <div className="buttons">
        <button 
          className="button" 
          onClick={handleMinusCount}>
          - 
        </button>
        <span className="message">
          Count: {count}
          </span>
        <button 
          className="button"
          onClick={handlePlusCount}
        >
          +
        </button>
      </div>
      
         <p> 
          <span> 
            {count === 0 && 'Today is '}
            {count < 0 && `${count * -1} days ago was `}
            {count > 0 && `${count} days from today is `}
          </span>
          <span>
            {date.toDateString()}
          </span>
        </p>

    </div>

  )
}
