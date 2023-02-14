import React from 'react';
import Calculator from './components/calculator';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="application">
        <div className="calculator-display">0</div>
        <Calculator />
      </div>
    );
  }
}

export default App;
