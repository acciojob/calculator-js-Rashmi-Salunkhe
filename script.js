import React, { useState } from 'react';
import './styles.css';

function Calculator() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClearAll = () => {
    setInput('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleEquals = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      {/* Display area with correct id */}
      <div id="display" className="display">{input || '0'}</div>
      <div className="buttons">
        {/* Clear and Backspace buttons */}
        <button id="C" onClick={handleClearAll}>C</button>
        <button id="back" onClick={handleBackspace}>←</button>
        {/* Brackets */}
        <button id="op" onClick={() => handleButtonClick('(')}>(</button>
        <button id="cl" onClick={() => handleButtonClick(')')}>)</button>
        {/* Number buttons */}
        <button id="7" onClick={() => handleButtonClick('7')}>7</button>
        <button id="8" onClick={() => handleButtonClick('8')}>8</button>
        <button id="9" onClick={() => handleButtonClick('9')}>9</button>
        <button id="divi" onClick={() => handleButtonClick('/')}>/</button>
        <button id="4" onClick={() => handleButtonClick('4')}>4</button>
        <button id="5" onClick={() => handleButtonClick('5')}>5</button>
        <button id="6" onClick={() => handleButtonClick('6')}>6</button>
        <button id="*" onClick={() => handleButtonClick('*')}>*</button>
        <button id="1" onClick={() => handleButtonClick('1')}>1</button>
        <button id="2" onClick={() => handleButtonClick('2')}>2</button>
        <button id="3" onClick={() => handleButtonClick('3')}>3</button>
        <button id="-" onClick={() => handleButtonClick('-')}>-</button>
        <button id="0" onClick={() => handleButtonClick('0')}>0</button>
        <button id="plus" onClick={() => handleButtonClick('+')}>+</button>
        <button id="equal" onClick={handleEquals}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
