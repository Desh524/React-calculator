import React from 'react'
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';

function CalButtons({ children, className }) {
  return (
    <button className={twMerge('bg-gray-300 aspect-square rounded-2xl py-3 shadow-sm text-gray-700 hover:brightness-85 transition-all duration-100 cursor-pointer active:brightness-80 active:text-gray-900 active:text-2xl active:font-bold text-3xl', className)}>
      {children}
    </button>
  );
}


function Calculator() {
  const [txtvalue, setTxtvalue] = useState('');
  

  return (
    <div className='bg-white rounded-2xl p-5 '>
      <div className='h-16 text-4xl text-right bg-gray-100 text-gray-800 rounded-xl p-3 shadow-sm mb-5'>
        {txtvalue}
      </div>
      
      <div>
        <button
        onClick={() => {
          setTxtvalue(txtvalue + '1');
          // alert('Button clicked!');
          txtvalue += '112';          
        }}
        >click me</button>

      </div>

      <div className='grid grid-cols-4 gap-5'>
        <CalButtons className='bg-red-300'>C</CalButtons>
        <CalButtons className='bg-red-300'>%</CalButtons>
        <CalButtons className='bg-red-300'>√</CalButtons>
        <CalButtons className='bg-amber-400 hover:brightness-90 hover:text-gray-700'>÷</CalButtons>
        <CalButtons>7</CalButtons>
        <CalButtons>8</CalButtons>
        <CalButtons>9</CalButtons>
        <CalButtons className='bg-amber-400 hover:brightness-90 hover:text-gray-700'>×</CalButtons>
        <CalButtons>4</CalButtons>
        <CalButtons>5</CalButtons>
        <CalButtons>6</CalButtons>
        <CalButtons className='bg-amber-400 hover:brightness-90 hover:text-gray-700'>-</CalButtons>
        <CalButtons>1</CalButtons>
        <CalButtons>2</CalButtons>
        <CalButtons>3</CalButtons>
        <CalButtons className='bg-amber-400 hover:brightness-90 hover:text-gray-700'>+</CalButtons>
        <CalButtons className='col-span-2 aspect-auto'>0</CalButtons>
        <CalButtons>.</CalButtons>
        <CalButtons className='bg-emerald-400'>=</CalButtons>
      </div>
    </div>
  )

}

function App() {


  return (

    <div className="text-center bg-linear-to-br from-slate-700 to-slate-950 min-h-screen flex justify-center items-center">
      <Calculator />
    </div>


  )
}

export default App
