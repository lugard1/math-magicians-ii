import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Btn from './buttons';

const Calculator = () => {
  const [calculation, setCalculation] = useState(0);
  const clickReceived = (e) => {
    const buttonName = e.currentTarget.textContent;
    const newState = calculate(calculation, buttonName);
    setCalculation(newState);
  };

  const { total, operation, next } = calculation;
  return (
     <div className="calculator_flex">
      <h2 className="request">Let&apos;s do some math!</h2>
      <div className="calculator">
        <div className="calculator-display">
          {total}
          {operation}
          {next}
        </div>
        <div className="operations">
          <Btn click={clickReceived} className="default" text="AC" />
          <Btn click={clickReceived} className="default" text="+/-" />
          <Btn click={clickReceived} className="default" text="%" />
          <Btn click={clickReceived} className="operators" text="&#247;" />
          <Btn click={clickReceived} className="default" text="7" />
          <Btn click={clickReceived} className="default" text="8" />
          <Btn click={clickReceived} className="default" text="9" />
          <Btn click={clickReceived} className="operators" text="x" />
          <Btn click={clickReceived} className="default" text="4" />
          <Btn click={clickReceived} className="default" text="5" />
          <Btn click={clickReceived} className="default" text="6" />
          <Btn click={clickReceived} className="operators" text="-" />
          <Btn click={clickReceived} className="default" text="1" />
          <Btn click={clickReceived} className="default" text="2" />
          <Btn click={clickReceived} className="default" text="3" />
          <Btn click={clickReceived} className="operators" text="+" />
          <Btn click={clickReceived} className="zero" text="0" />
          <Btn click={clickReceived} className="default" text="." />
          <Btn click={clickReceived} className="operators" text="=" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
