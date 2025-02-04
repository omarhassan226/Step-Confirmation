/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Button from './components/Button';

const StepsConfirmation = () => {

    const messages = [
        "Learn React ⚛️",
        "Apply for jobs 💼",
        "Invest your new income 🤑"
    ];

    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);
    const [icon, setIcon] = useState("x");

    function toggle() {
        setIsOpen(isOpen => !isOpen);
        setIcon(icon => isOpen ? "+" : "x");
    }

    const handleNext = () => {
        if (step < messages.length) {
            setStep(step => step + 1);
        }
    }

    const handlePrevious = () => {
        if (step !== 1) {
            setStep(step - 1);
        }
    }
    return (
        <div>
            <div className="close" onClick={toggle}>{icon}</div>
            {isOpen &&
                <div className="steps">
                    <div className="numbers">
                        {/* Can make this syntax if it's only state */}
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
                        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
                    </div>
                    <div className="message">
                        Step {step} : {messages[step - 1]}
                    </div>
                    <div className="buttons">
                        <Button
                            backgroundColor= "#7950f2"
                            color= "#fff" 
                            onClick={handlePrevious}
                        >
                            <span>👈</span> Previous
                        </Button>
                        <Button
                            backgroundColor= "#7950f2"
                            color= "#fff" 
                            onClick={handleNext}
                        >
                            Next <span>👉</span>
                        </Button>
                    </div>
                </div>
            }
        </div>
    )
}

export default StepsConfirmation
