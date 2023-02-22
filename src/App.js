import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/pages/Home';
import Quote from './components/pages/Quote';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <header className="header">
          <nav className="navigation">
            <h1 className="title">Math Magicians</h1>
            <ul className="nav_list">
              <li>
                <Link to="/" className="link">Home</Link>
              </li>
              <li>
                <Link to="/Calculator" className="link">Calculator</Link>
              </li>
              <li>
                <Link to="/Quote" className="link">Quote</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="application">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/Quote" element={<Quote />} />
          </Routes>
        </div>
        <footer className="footer">Math Magicians&copy; 2023, Lugard Agu</footer>
      </div>
    );
  }
}

export default App;
