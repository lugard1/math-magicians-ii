import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [computation, setComputation] = useState({
    total: null,
    operation: null,
    next: null,
  });

  const clickReceived = (event) => {
    const answer = calculate(event.target.textContent);
    setComputation(answer);
  };

  const { total, operation, next } = computation;
  return (
    <div className="calculator">
      <div className="calculator-display">
        {total}
        {operation}
        {next}
      </div>
      <div className="operations">
        <button type="button" onClick={clickReceived}>
          AC
        </button>
        <button type="button" onClick={clickReceived}>
          +/-
        </button>
        <button type="button" onClick={clickReceived}>
          %
        </button>
        <button type="button" onClick={clickReceived} className="operators">
          &#247;
        </button>
        <button type="button" onClick={clickReceived}>
          7
        </button>
        <button type="button" onClick={clickReceived}>
          8
        </button>
        <button type="button" onClick={clickReceived}>
          9
        </button>
        <button type="button" onClick={clickReceived} className="operators">
          x
        </button>
        <button type="button" onClick={clickReceived}>
          4
        </button>
        <button type="button" onClick={clickReceived}>
          5
        </button>
        <button type="button" onClick={clickReceived}>
          6
        </button>
        <button type="button" onClick={clickReceived} className="operators">
          -
        </button>
        <button type="button" onClick={clickReceived}>
          1
        </button>
        <button type="button" onClick={clickReceived}>
          2
        </button>
        <button type="button" onClick={clickReceived}>
          3
        </button>
        <button type="button" onClick={clickReceived} className="operators">
          +
        </button>
        <button type="button" onClick={clickReceived} className="zero">
          0
        </button>
        <button type="button" onClick={clickReceived}>
          .
        </button>
        <button type="button" onClick={clickReceived} className="operators">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
