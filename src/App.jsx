import React from 'react'
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';


function CalButtons({ children, className, ...rest }) {
  return (
    <button className={twMerge('bg-gray-300 aspect-square rounded-2xl py-3 shadow-sm text-gray-700 hover:brightness-85 transition-all duration-100 cursor-pointer active:brightness-80 active:text-gray-900 active:text-2xl active:font-bold text-3xl', className)}
      {...rest}
    >
      {children}
    </button>
  );
}


function Calculator() {
  const [txtvalue, setTxtvalue] = useState('');
  const [previValue, setPreviValue] = useState('');
  const [operation, setOperation] = useState('');
  



  function handleClick(i) {
    setTxtvalue((prev) => prev + i); 
  }

  function handleclear() {
    setTxtvalue('');
    setPreviValue('');
    setOperation('');    
  }

  function handlePercentage() {
    setTxtvalue((prev) => prev / 100);
  }

  function handleSquareRoot() {
    setTxtvalue((prev) => Math.sqrt(prev));
  }

  function handleOperation(operation) {
    setOperation(operation);
    setPreviValue(txtvalue);
    setTxtvalue('');
    
  }

  function displayValue() {
    if (txtvalue.length === 0) {
      return '0';
    }else if(txtvalue === '.'){
      return '0.';
    }else{
      return parseFloat(txtvalue).toLocaleString();
    }
    
  }

  function handleEqual() {

    if (operation === '÷') {

      setTxtvalue(parseFloat(previValue) / parseFloat(txtvalue));
      setPreviValue('');
      setOperation('');
    }
    else if (operation === '×') {
      setTxtvalue(parseFloat(previValue) * parseFloat(txtvalue));
      setPreviValue('');
      setOperation('');
    }
    else if (operation === '-') {
      setTxtvalue(parseFloat(previValue) - parseFloat(txtvalue));
      setPreviValue('');
      setOperation('');
    }
    else if (operation === '+') {
      setTxtvalue(parseFloat(previValue) + parseFloat(txtvalue));
      setOperation('');
      setPreviValue('');
    }
  }


  return (
    <div className='bg-white rounded-2xl p-5 '>
      <div className='h-16 text-4xl text-right bg-gray-100 text-gray-800 rounded-xl p-3 shadow-sm mb-5 overflow-x-auto'>
        {displayValue().length > 14 ? displayValue().slice(0, 14) + "..." : displayValue()}
        
      </div>
      <div className='grid grid-cols-4 gap-5'>

        <CalButtons className='bg-red-300' onClick={() => handleclear()}>C</CalButtons>
        <CalButtons className='bg-red-300' onClick={() => handlePercentage()}>%</CalButtons>
        <CalButtons className='bg-red-300' onClick={() => handleSquareRoot()}>√</CalButtons>
        <CalButtons className='bg-amber-400 hover:brightness-90 hover:text-gray-700' onClick={() => handleOperation('÷')}>÷</CalButtons>


        <CalButtons onClick={() => handleClick('7')}>7</CalButtons>
        <CalButtons onClick={() => handleClick('8')}>8</CalButtons>
        <CalButtons onClick={() => handleClick('9')}>9</CalButtons>
        <CalButtons className='bg-amber-400 hover:brightness-90 hover:text-gray-700' onClick={() => handleOperation('×')}>×</CalButtons>


        <CalButtons onClick={() => handleClick('4')}>4</CalButtons>
        <CalButtons onClick={() => handleClick('5')}>5</CalButtons>
        <CalButtons onClick={() => handleClick('6')}>6</CalButtons>
        <CalButtons className='bg-amber-400 hover:brightness-90 hover:text-gray-700' onClick={() => handleOperation('-')}>-</CalButtons>


        <CalButtons onClick={() => handleClick('1')}>1</CalButtons>
        <CalButtons onClick={() => handleClick('2')}>2</CalButtons>
        <CalButtons onClick={() => handleClick('3')}>3</CalButtons>
        <CalButtons className='bg-amber-400 hover:brightness-90 hover:text-gray-700' onClick={() => handleOperation('+')}>+</CalButtons>


        <CalButtons className='col-span-2 aspect-auto' onClick={() => handleClick('0')}>0</CalButtons>
        <CalButtons onClick={() => handleClick('.')}>.</CalButtons>
        <CalButtons className='bg-emerald-400' onClick={handleEqual}>=</CalButtons>
      </div>
    </div>
  )

}

function App() {


  return (

    <div className="text-center bg-linear-to-br from-slate-700 to-slate-950 min-h-screen flex justify-center items-center">
      <Calculator />
      <div className='absolute bottom-6 text-gray-400 text-sm'>Made with &#10084;  by <a href="https://github.com/Desh524" target='blank' rel="noopener noreferrer"><b >DeshCode</b></a></div>
      <div className='absolute bottom-1 text-gray-500 text-xs'>Version 1.0.0</div>
    </div>


  )
}

export default App
