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
  
  function handleMinusCount(step) {
    setCount((c) => c - step);
  }

  function handlePlusCount(step) {
    setCount((c) => c + step);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }
  //  function handleMinusStep() {
  //   setStep((c) => c - 1);
  // }

  // function handlePlusStep() {
  //   setStep((c) => c + 1);
  // }

  return (
    <div className="counter">
      {/* <div className="buttons"> */}
      <div style={{margin: '0 auto', width: '400px', display: 'flex', alignItems: 'center', gap: '120px'}}>

        <input 
          type="range" 
          min="0" 
          max="10"
          value={step} 
          onChange={(e) => setStep(Number(e.target.value))}
          style={{ transform: 'scale(1.2)', transformOrigin: '0 0' }}
        /> <output>Step: {step}</output>

      </div>

        {/* <button 
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
        </button> */}
      {/* </div> */}

      <div className="buttons">
        <button 
          className="button" 
          onClick={() => handleMinusCount(step)}>
          - 
        </button>

        <input 
          type='text'
          placeholder="0"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />

        {/* <span className="message">
          Count: {count}
          </span> */}

        <button 
          className="button"
          onClick={() => handlePlusCount(step)}
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
        
        {count !== 0 || step !== 1 ? (
            <div>
            <button 
              className="button"
              onClick={handleReset}>
              Reset
            </button>
          </div>
          ) : null}
       

    </div>

  )
}
