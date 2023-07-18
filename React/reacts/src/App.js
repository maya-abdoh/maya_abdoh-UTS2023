import React, { useState } from 'react';
import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  const [result, setResult] = useState('0');

  const handleClick = (buttonName) => {
    if (buttonName === '=') {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (buttonName === 'AC') {
      setResult('0');
    } else if (buttonName === '+/-') {
      setResult((prevResult) => {
        if (prevResult.charAt(0) === '-') {
          return prevResult.slice(1);
        } else {
          return '-' + prevResult;
        }
      });
    } else if (buttonName === '%') {
      setResult((prevResult) => (parseFloat(prevResult) / 100).toString());
    } else {
      setResult((prevResult) => (prevResult === '0' ? buttonName : prevResult + buttonName));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Display result={result} />
        <ButtonPanel clickHandler={handleClick} />
      </header>
    </div>
  );
}

export default App;

