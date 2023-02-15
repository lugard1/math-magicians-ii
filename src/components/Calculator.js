import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

  clickReceived = (event) => {
    const buttonName = event.target.innerText;
    const answer = calculate(this.state, buttonName);
    this.setState(answer);
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calculator">
        <div className="calculator-display">
          {total}
          {operation}
          {next}
        </div>
        <div className="operations">
          <button type="button" onClick={this.clickReceived}>
            AC
          </button>
          <button type="button" onClick={this.clickReceived}>
            +/-
          </button>
          <button type="button" onClick={this.clickReceived}>
            %
          </button>
          <button type="button" onClick={this.clickReceived} className="operators">
            &#247;
          </button>
          <button type="button" onClick={this.clickReceived}>
            7
          </button>
          <button type="button" onClick={this.clickReceived}>
            8
          </button>
          <button type="button" onClick={this.clickReceived}>
            9
          </button>
          <button type="button" onClick={this.clickReceived} className="operators">
            x
          </button>
          <button type="button" onClick={this.clickReceived}>
            4
          </button>
          <button type="button" onClick={this.clickReceived}>
            5
          </button>
          <button type="button" onClick={this.clickReceived}>
            6
          </button>
          <button type="button" onClick={this.clickReceived} className="operators">
            -
          </button>
          <button type="button" onClick={this.clickReceived}>
            1
          </button>
          <button type="button" onClick={this.clickReceived}>
            2
          </button>
          <button type="button" onClick={this.clickReceived}>
            3
          </button>
          <button type="button" onClick={this.clickReceived} className="operators">
            +
          </button>
          <button type="button" onClick={this.clickReceived} className="zero">
            0
          </button>
          <button type="button" onClick={this.clickReceived}>
            .
          </button>
          <button type="button" onClick={this.clickReceived} className="operators">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
