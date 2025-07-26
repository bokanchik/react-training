// the name of the file is the name of component

import { useState } from "react";


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
 
/**
 * To use a state in a component we do it in 3 steps:
 * 
 * 1. Add a new state variable
 * 2. We use it in a code (usually in JSX)
 * 3. We update a piece of state
 * 
 * First parameter: default value
 * Second parameter: function to update the default value
 * 
 * useState is a React hook, we can call it only on the top 
 * level of the function
 * 
 * useState return an array
 */

export default function App() {
    return (
        <div>
            <Steps />
            <Steps />
        </div>
    )
}
function Steps() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    // use callback function to update default state (it's safer)
    function handlePrevious() {
        if (step > 1) setStep((s) => s - 1);
    }

    function handleNext() {
        if (step < 3) setStep((s) => s + 1);
    }

    return (
    <>
        <button className="close" onClick={() => setIsOpen((is) => !is)}>
            &times;
        </button>
        { isOpen && (
        <div className="steps">
            <div className="numbers">
                <div className={step >= 1 ? 'active' : ""}>1</div>
                <div className={step >= 2 ? 'active' : ""}>2</div>
                <div className={step >= 3 ? 'active' : ""}>3</div>
            </div>

            <p className="message">
                Step {step}: {messages[step - 1]}
            </p>

            <div className="buttons">
                <button 
                    style={{backgroundColor: '#7950f2', color: '#fff'}}
                    onClick={handlePrevious}
                >
                    Previous
                </button>
                <button 
                    style={{backgroundColor: '#7950f2', color: '#fff'}} 
                    onClick={handleNext}
                >
                    Next
                </button>
            </div> 
        </div>
    )}

    </>
    );
}