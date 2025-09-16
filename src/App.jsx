import React from 'react'
import { twMerge } from 'tailwind-merge';

function CalButtons({ children, className }) {
  return (
    <button className={twMerge('bg-white aspect-square rounded-2xl py-3 shadow-sm text-gray-600 hover:brightness-90 transition-all duration-200 cursor-pointer active:brightness-80 active:text-gray-900 active:text-2xl text-3xl', className)}>
      {children}
    </button>
  );
}


function Calculator() {
  return (
    <div className='bg-gray-400 flex items-center justify-center gap-3 rounded-2xl p-5 '>
      <div className='grid grid-cols-4 gap-5'>
        <CalButtons className='bg-red-300'>C</CalButtons>
        <CalButtons>%</CalButtons>
        <CalButtons>√</CalButtons>
        <CalButtons>÷</CalButtons>
        <CalButtons>7</CalButtons>
        <CalButtons>8</CalButtons>
        <CalButtons>9</CalButtons>
        <CalButtons>×</CalButtons>
        <CalButtons>4</CalButtons>
        <CalButtons>5</CalButtons>
        <CalButtons>6</CalButtons>
        <CalButtons>-</CalButtons>
        <CalButtons>1</CalButtons>
        <CalButtons>2</CalButtons>
        <CalButtons>3</CalButtons>
        <CalButtons>+</CalButtons>
        <CalButtons>0</CalButtons>
        <CalButtons>.</CalButtons>
        <CalButtons>=</CalButtons>
      </div>
    </div>
  )

}

function App() {


  return (

    <div className="text-center font-bold bg-linear-to-br from-slate-700 to-slate-950 min-h-screen flex justify-center items-center">
      <Calculator />
    </div>


  )
}

export default App
