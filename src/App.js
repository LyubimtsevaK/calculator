import './App.css';
import React, { useState } from 'react';
import InputNumber from './Components/InputNumber.js';
import OutputNumber from './Components/OutputNumber.js';
import Points from './pictures/points.png'


function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState("");

  const buttonNumber = (value) => {
    setInputValue((prevInputValue) => prevInputValue + value);
  }

  const clearInput = () => {
    setInputValue('');
    setResult('');
  }

  const clearOne = () => {
    setInputValue(prevInputValue => prevInputValue.substring(0, prevInputValue.length - 1));

  }
  

  const math = require('mathjs');

  const calculateResult = () => {
    try {
      const evaluatedResult = math.evaluate(inputValue);
      setResult(evaluatedResult.toString());
    } catch (error) {
      setResult("(ಠ_ಠ)");
    }
  };

  return (
    <div>
      <button className='square1'></button>
      <button className='square2'></button>
      <button className='circle2'></button>
      <img src={Points} alt='' className='points1'/>
      <img src={Points} alt='' className='points2'/>
      <div className='container1'>
        <InputNumber type="text" value={inputValue} buttonNumber={buttonNumber}/>
        <OutputNumber type="text" value={result} readOnly/>
      </div>
      <div className='container2'>
        <button className='buttFalse'></button>
        <div className='button'>
          <button className='butt' onClick={clearInput}>С</button>
          <button className='butt1' onClick={clearOne}>🠔</button>
          <button className='butt' onClick={() => buttonNumber('%')}>%</button>
          <button className='butt' onClick={() => buttonNumber('/')}>÷</button>
        </div>
        <div>
          <button className='butt4' onClick={() => buttonNumber('7')}>7</button>
          <button className='butt4' onClick={() => buttonNumber('8')}>8</button>
          <button className='butt4' onClick={() => buttonNumber('9')}>9</button>
          <button className='butt' onClick={() => buttonNumber('*')}>×</button>
        </div>
        <div>
          <button className='butt4' onClick={() => buttonNumber('4')}>4</button>
          <button className='butt4' onClick={() => buttonNumber('5')}>5</button>
          <button className='butt4' onClick={() => buttonNumber('6')}>6</button>
          <button className='butt' onClick={() => buttonNumber('-')}>-</button>
        </div>
        <div>
          <button className='butt4' onClick={() => buttonNumber('1')}>1</button>
          <button className='butt4' onClick={() => buttonNumber('2')}>2</button>
          <button className='butt4' onClick={() => buttonNumber('3')}>3</button>
          <button className='butt' onClick={() => buttonNumber('+')}>+</button>
        </div>
        <div>
          <button className='butt2' onClick={() => buttonNumber('0')}>0</button>
          <button className='butt' onClick={() => buttonNumber('.')}>.</button>
          <button className='butt3' onClick={calculateResult}>=</button>
        </div>
      </div>
      <button className='circle1'></button>
    </div>
  )
}
export default App;