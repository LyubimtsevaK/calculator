import './App.css';
import React, { useState } from 'react';
import InputNumber from './Components/InputNumber.js';
import OutputNumber from './Components/OutputNumber.js';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState("");

  const buttonNumber = (value) => {
    setInputValue((prevInputValue) => prevInputValue + value);
  }

  const clearInput = () => {
    setInputValue('');
  }


  const math = require('mathjs');

  const calculateResult = () => {
    try {
      const evaluatedResult = math.evaluate(inputValue);
      setResult(evaluatedResult.toString());
    } catch (error) {
      setResult("Ошибка при вычислении");
    }
  };

  return (
    <div>
      <div className='container'>
        <InputNumber type="text" value={inputValue} buttonNumber={buttonNumber}/>
        <OutputNumber type="text" value={result} readOnly/>
      </div>
      <div className='button'>
        <button className='butt' onClick={clearInput}>С</button>
        <button className='butt1' onClick={clearInput}>🠔</button>
        <button className='butt' onClick={() => buttonNumber('%')}>%</button>
        <button className='butt' onClick={() => buttonNumber('/')}>/</button>
      </div>
      <div>
        <button className='butt' onClick={() => buttonNumber('7')}>7</button>
        <button className='butt' onClick={() => buttonNumber('8')}>8</button>
        <button className='butt' onClick={() => buttonNumber('9')}>9</button>
        <button className='butt' onClick={() => buttonNumber('*')}>*</button>
      </div>
      <div>
        <button className='butt' onClick={() => buttonNumber('4')}>4</button>
        <button className='butt' onClick={() => buttonNumber('5')}>5</button>
        <button className='butt' onClick={() => buttonNumber('6')}>6</button>
        <button className='butt' onClick={() => buttonNumber('-')}>-</button>
      </div>
      <div>
        <button className='butt' onClick={() => buttonNumber('1')}>1</button>
        <button className='butt' onClick={() => buttonNumber('2')}>2</button>
        <button className='butt' onClick={() => buttonNumber('3')}>3</button>
        <button className='butt' onClick={() => buttonNumber('+')}>+</button>
      </div>
      <div>
        <button className='butt2' onClick={() => buttonNumber('0')}>0</button>
        <button className='butt' onClick={() => buttonNumber('.')}>.</button>
        <button className='butt' onClick={calculateResult}>=</button>
      </div>
    </div>
  )
}
export default App;